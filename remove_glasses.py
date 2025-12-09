#!/usr/bin/env python3
"""
Script to remove glasses from profile image using AI.
This script uses the Hugging Face API (free) to remove glasses.
"""

import requests
import base64
import sys
import os

def remove_glasses_with_hf(image_path, output_path):
    """
    Remove glasses from image using Hugging Face API.
    Note: This requires a Hugging Face API token (free).
    """
    API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-inpainting"
    
    # Read image
    with open(image_path, "rb") as f:
        image_data = base64.b64encode(f.read()).decode()
    
    print("Note: This requires a Hugging Face API token.")
    print("Alternative: Use online tools like:")
    print("  - https://www.insmind.com/remove-glasses-from-photo/")
    print("  - https://www.fotor.com/features/remove-glasses-from-photo/")
    print("  - https://www.perfectcorp.com/consumer/blog/photo-editing/remove-glasses-from-photo")
    print("\nOr use Photoshop/GIMP with manual editing.")

if __name__ == "__main__":
    image_path = "assets/img/profile1.jpg"
    if os.path.exists(image_path):
        print(f"Image found: {image_path}")
        print("For best results, use one of the online AI tools mentioned above.")
    else:
        print(f"Image not found: {image_path}")

