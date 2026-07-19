import re

FILE_PATH = "d:/c drive/OneDrive/Desktop/Ipuhub/lib/round2-cutoff-data.ts"

# USING EXACT TS BRANCH NAMES (Test with just ADGITM)
updates = {
    "adgitm": {
        "B. Tech. (Computer Science)": {"delhiGeneral": [216162, 287793], "outsideGeneral": [108265, 114840], "delhiSC": [884411, 1236916], "outsideSC": [407468, 407468]},
    }
}

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

college_pattern = re.compile(r'(id:\s*"([^"]+)".*?branches:\s*\[)(.*?)(\]\s*,?\s*\}(?:,|$))', flags=re.DOTALL)

for m in college_pattern.finditer(content):
    col_id = m.group(2).lower()
    branches_str = m.group(3)
    
    if col_id in updates:
        print("Found college", col_id)
        branch_updates = updates[col_id]
        
        for branch_name, quotas in branch_updates.items():
            bp = r'\{\s*branch:\s*"' + re.escape(branch_name) + r'".*?(?=\s*\},|\s*\}$)'
            match = re.search(bp, branches_str, flags=re.DOTALL)
            if match:
                print(f"Matched branch: {branch_name}")
            else:
                print(f"FAILED to match branch: {branch_name}")
