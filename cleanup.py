import os
import re
import glob

# The regex targets any class that starts with min-[1920px]: or 2xl:
# It handles bracket values like text-[80px] or max-w-[1800px]
regex = re.compile(r'\s*(?:min-\[1920px\]|2xl):[a-zA-Z0-9_\-\[\]]+')

components_dir = os.path.join(os.path.dirname(__file__), 'components')
tsx_files = glob.glob(os.path.join(components_dir, '*.tsx'))

for filepath in tsx_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all added responsive breakpoints
    new_content = regex.sub('', content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned {os.path.basename(filepath)}")

print("Done stripping CSS classes.")
