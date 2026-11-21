
from pathlib import Path
import re

SOURCE = Path("images")
OPTIMIZED = Path("images-optimized")

# Website code files to update
CODE_EXTENSIONS = {".html", ".css", ".js"}

# Find images in the original folder and map them to WebP
replacements = {}

for file in SOURCE.rglob("*"):
    if file.is_file() and file.suffix.lower() in {
        ".jpg", ".jpeg", ".png", ".webp"
    }:
        relative = file.relative_to(SOURCE)
        optimized_file = OPTIMIZED / relative.with_suffix(".webp")

        if optimized_file.exists():
            old_path = "images/" + relative.as_posix()
            new_path = "images-optimized/" + relative.with_suffix(".webp").as_posix()
            replacements[old_path] = new_path

# Update references across HTML, CSS, and JS files
for file in Path(".").rglob("*"):
    if not file.is_file() or file.suffix.lower() not in CODE_EXTENSIONS:
        continue

    if ".git" in file.parts or "node_modules" in file.parts:
        continue

    try:
        content = file.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        continue

    updated = content

    for old, new in replacements.items():
        updated = updated.replace(old, new)

    if updated != content:
        file.write_text(updated, encoding="utf-8")
        print(f"Updated: {file}")

print("Image path updates complete!")
