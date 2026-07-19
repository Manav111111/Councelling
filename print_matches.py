import re

FILE_PATH = "d:/c drive/OneDrive/Desktop/Ipuhub/lib/round2-cutoff-data.ts"

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

college_pattern = re.compile(r'(id:\s*"([^"]+)".*?branches:\s*\[)(.*?)(\]\s*,?\s*\}(?:,|$))', flags=re.DOTALL)

for m in college_pattern.finditer(content):
    col_id = m.group(2).lower()
    branches_str = m.group(3)
    print(f"--- {col_id} ---")
    for bm in re.finditer(r'branch:\s*"([^"]+)"', branches_str):
        print(f"  {bm.group(1)}")
