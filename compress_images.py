
from pathlib import Path
from PIL import Image, ImageOps
import os

SOURCE = Path("images")
OUTPUT = Path("images-optimized")

MAX_WIDTH = 1800
MAX_HEIGHT = 1800
QUALITY = 82

OUTPUT.mkdir(exist_ok=True)

original_total = 0
optimized_total = 0

for file in SOURCE.rglob("*"):
    if not file.is_file():
        continue

    if file.suffix.lower() not in [".jpg", ".jpeg", ".png", ".webp"]:
        continue

    relative = file.relative_to(SOURCE)
    destination = OUTPUT / relative.with_suffix(".webp")
    destination.parent.mkdir(parents=True, exist_ok=True)

    try:
        with Image.open(file) as image:
            image = ImageOps.exif_transpose(image)

            image.thumbnail(
                (MAX_WIDTH, MAX_HEIGHT),
                Image.Resampling.LANCZOS
            )

            if image.mode not in ("RGB", "RGBA"):
                image = image.convert("RGB")

            image.save(
                destination,
                "WEBP",
                quality=QUALITY,
                method=6
            )

        before = file.stat().st_size
        after = destination.stat().st_size

        original_total += before
        optimized_total += after

        print(
            f"{relative}: "
            f"{before / 1024 / 1024:.2f} MB -> "
            f"{after / 1024:.0f} KB"
        )

    except Exception as e:
        print(f"Error processing {file}: {e}")

print("\nCompression complete!")
print(f"Original: {original_total / 1024 / 1024:.2f} MB")
print(f"Optimized: {optimized_total / 1024 / 1024:.2f} MB")

if original_total:
    reduction = (1 - optimized_total / original_total) * 100
    print(f"Reduction: {reduction:.1f}%")
