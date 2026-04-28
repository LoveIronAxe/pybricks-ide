#!/usr/bin/env python3
import subprocess
import re
import os
import time

BASE_DIR = "/home/simonljt/.openclaw/workspace-lobster5/pybricks_docs/IDE/docs_archive/web_learn/"

URLS = [
    "https://pybricks.com/learn/building-a-robot/",
    "https://pybricks.com/learn/building-a-robot/boost/",
    "https://pybricks.com/learn/building-a-robot/city/",
    "https://pybricks.com/learn/building-a-robot/mindstorms-inventor/",
    "https://pybricks.com/learn/building-a-robot/spike-essential/",
    "https://pybricks.com/learn/building-a-robot/spike-prime/",
    "https://pybricks.com/learn/building-a-robot/technic/",
    "https://pybricks.com/learn/flow-basics/advanced-multitasking/",
    "https://pybricks.com/learn/flow-basics/multitasking/",
    "https://pybricks.com/learn/flow-basics/tasks-functions/",
    "https://pybricks.com/learn/flow-basics/waiting-repeating/",
    "https://pybricks.com/learn/getting-started/install-pybricks/",
    "https://pybricks.com/learn/getting-started/pybricks-environment/",
    "https://pybricks.com/learn/getting-started/what-do-you-need/",
    "https://pybricks.com/learn/intro/access/",
    "https://pybricks.com/learn/intro/story-mission/",
    "https://pybricks.com/learn/intro/what-can-you-make/",
    "https://pybricks.com/learn/making-programs/basic-blocks/",
    "https://pybricks.com/learn/making-programs/basic-robot-navigation/",
    "https://pybricks.com/learn/making-programs/sound-light/",
    "https://pybricks.com/learn/making-programs/your-first-program/",
    "https://pybricks.com/learn/sensors/combining-values-with-logic/",
    "https://pybricks.com/learn/sensors/measuring-sensor-values/",
    "https://pybricks.com/learn/sensors/responding-sensor-values/",
    "https://pybricks.com/learn/smart-sensors/getting-started/",
    "https://pybricks.com/learn/smart-sensors/machine-learning/",
]

SCRAPE_PY = r"""
import sys, re
html = sys.stdin.read()
text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
text = re.sub(r'<nav[^>]*>.*?</nav>', '', text, flags=re.DOTALL)
text = re.sub(r'<footer[^>]*>.*?</footer>', '', text, flags=re.DOTALL)
text = re.sub(r'<header[^>]*>.*?</header>', '', text, flags=re.DOTALL)
text = re.sub(r'<aside[^>]*>.*?</aside>', '', text, flags=re.DOTALL)
text = re.sub(r'<[^>]+>', '', text)
text = re.sub(r'&nbsp;', ' ', text)
text = re.sub(r'&amp;', '&', text)
text = re.sub(r'&lt;', '<', text)
text = re.sub(r'&gt;', '>', text)
text = re.sub(r'&quot;', '"', text)
text = re.sub(r'&#39;', "'", text)
text = re.sub(r'\n{3,}', '\n\n', text)
print(text.strip())
"""

def url_to_filename(url):
    # https://pybricks.com/learn/building-a-robot/spike-prime/ -> learn_building-a-robot_spike-prime.txt
    path = url.replace("https://pybricks.com/learn/", "").rstrip("/")
    if path == "building-a-robot":
        filename = "learn_building-a-robot.txt"
    elif path.startswith("building-a-robot/"):
        sub = path.replace("building-a-robot/", "")
        filename = f"learn_building-a-robot_{sub}.txt"
    elif path.startswith("flow-basics/"):
        sub = path.replace("flow-basics/", "")
        filename = f"learn_flow-basics_{sub}.txt"
    elif path.startswith("getting-started/"):
        sub = path.replace("getting-started/", "")
        filename = f"learn_getting-started_{sub}.txt"
    elif path.startswith("intro/"):
        sub = path.replace("intro/", "")
        filename = f"learn_intro_{sub}.txt"
    elif path.startswith("making-programs/"):
        sub = path.replace("making-programs/", "")
        filename = f"learn_making-programs_{sub}.txt"
    elif path.startswith("sensors/"):
        sub = path.replace("sensors/", "")
        filename = f"learn_sensors_{sub}.txt"
    elif path.startswith("smart-sensors/"):
        sub = path.replace("smart-sensors/", "")
        filename = f"learn_smart-sensors_{sub}.txt"
    else:
        filename = f"learn_{path.replace('/', '_')}.txt"
    return filename

success = 0
failed = []
total_bytes = 0

for url in URLS:
    filename = url_to_filename(url)
    filepath = os.path.join(BASE_DIR, filename)
    
    try:
        result = subprocess.run(
            ['curl', '-s', '-L', '-A', 
             'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
             url],
            capture_output=True, text=True, timeout=30
        )
        html = result.stdout
        
        # Extract text using Python
        proc = subprocess.run(
            ['python3', '-c', SCRAPE_PY],
            input=html, capture_output=True, text=True, timeout=30
        )
        text = proc.stdout
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f"URL: {url}\n")
            f.write(f"Title: {filename}\n")
            f.write("=" * 80 + "\n\n")
            f.write(text)
        
        size = os.path.getsize(filepath)
        total_bytes += size
        success += 1
        print(f"OK  [{success:2d}] {filename} ({size:,} bytes)")
        
    except Exception as e:
        failed.append((url, str(e)))
        print(f"FAIL {url}: {e}")
    
    time.sleep(0.5)

print(f"\n=== Done ===")
print(f"Success: {success}/{len(URLS)}")
print(f"Failed: {len(failed)}")
for url, err in failed:
    print(f"  - {url}: {err}")
print(f"Total size: {total_bytes:,} bytes ({total_bytes/1024:.1f} KB)")
