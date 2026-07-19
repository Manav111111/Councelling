import re

def remove_obc_from_private(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    colleges = content.split('  {\n    id:')
    
    for i in range(1, len(colleges)):
        if "campusType: \"Govt / University Campus\"" not in colleges[i]:
            # This is a private college, remove delhiOBC
            colleges[i] = re.sub(r'\s*delhiOBC: \{[^}]+\},?\n', '\n', colleges[i])
            colleges[i] = re.sub(r'\s*outsideOBC: \{[^}]+\},?\n', '\n', colleges[i])
    
    new_content = '  {\n    id:'.join(colleges)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

remove_obc_from_private('lib/round1-cutoff-data.ts')
remove_obc_from_private('lib/round2-cutoff-data.ts')
