from __future__ import annotations

from collections import deque
from pathlib import Path
import sys

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps


def connected_background_mask(rgb: np.ndarray) -> np.ndarray:
    """Find only the light gray background connected to the image border."""
    channel_range = rgb.max(axis=2) - rgb.min(axis=2)
    brightness = rgb.mean(axis=2)
    background_like = (channel_range <= 18) & (brightness >= 82) & (brightness <= 218)

    height, width = background_like.shape
    mask = np.zeros((height, width), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    def enqueue(y: int, x: int) -> None:
        if background_like[y, x] and not mask[y, x]:
            mask[y, x] = True
            queue.append((y, x))

    for x in range(width):
        enqueue(0, x)
        enqueue(height - 1, x)
    for y in range(height):
        enqueue(y, 0)
        enqueue(y, width - 1)

    while queue:
        y, x = queue.popleft()
        if y > 0:
            enqueue(y - 1, x)
        if y < height - 1:
            enqueue(y + 1, x)
        if x > 0:
            enqueue(y, x - 1)
        if x < width - 1:
            enqueue(y, x + 1)

    return mask


def create_cutout(input_path: Path, output_path: Path) -> None:
    image = ImageOps.exif_transpose(Image.open(input_path)).convert("RGB")
    rgb = np.asarray(image)

    background = connected_background_mask(rgb)
    alpha_array = np.where(background, 0, 255).astype(np.uint8)
    alpha = Image.fromarray(alpha_array, mode="L")

    # Smooth tiny gaps and antialiased edges without changing the original face.
    alpha = alpha.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.MinFilter(5))
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.75))

    polished = ImageOps.autocontrast(image, cutoff=0.25)
    polished = ImageEnhance.Sharpness(polished).enhance(1.04)
    polished = ImageEnhance.Contrast(polished).enhance(1.02)
    polished.putalpha(alpha)

    bbox = alpha.getbbox()
    if bbox:
        top = max(0, bbox[1] - 24)
        polished = polished.crop((0, top, polished.width, polished.height))

    output_path.parent.mkdir(parents=True, exist_ok=True)
    polished.save(output_path)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: create_profile_cutout.py <input> <output>")

    create_cutout(Path(sys.argv[1]), Path(sys.argv[2]))
