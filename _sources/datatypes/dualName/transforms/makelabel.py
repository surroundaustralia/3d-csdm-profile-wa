import json
data = json.load(open("../examples/strings.json"))
en_label=""
in_label=""
slash=""
for p in data['hasPart']:
    if p['type'] == 'wa:indigenousName':
        in_label = p['label']
    elif  p['type'] == 'wa:placeName':
        en_label = p['label']
if in_label and en_label:
    slash = " / "
output_data=f"{in_label}{slash}{en_label}"
print(output_data)