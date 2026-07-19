import re
import json

FILE_PATH = "d:/c drive/OneDrive/Desktop/Ipuhub/lib/round2-cutoff-data.ts"

# USING EXACT TS BRANCH NAMES
updates = {
    "usar": {
        "Artificial Intelligence & Data Science (AI-DS)": {"delhiGeneral": [138983, 166801], "outsideGeneral": [49675, 75632], "delhiSC": [310123, 629373], "outsideSC": [233647, 299927]},
        "Artificial Intelligence & Machine Learning (AI-ML)": {"delhiGeneral": [135311, 169427], "outsideGeneral": [51495, 75022], "delhiSC": [343133, 585156], "outsideSC": [234425, 287488]},
        "Automation & Robotics (AR)": {"delhiGeneral": [191047, 231134], "outsideGeneral": [70824, 88671], "delhiSC": [573282, 836933], "outsideSC": [308124, 349159]},
        "Industrial Internet of Things (IIOT)": {"delhiGeneral": [195850, 227105], "outsideGeneral": [62206, 93613], "delhiSC": [567061, 882396], "outsideSC": [347636, 352424]}
    },
    "vips": {
        "Artificial Intelligence & Data Science": {"delhiGeneral": [112468, 272027], "outsideGeneral": [91886, 116297], "delhiSC": [937752, 1194330], "outsideSC": [412298, 447558]},
        "Artificial Intelligence & Machine Learning": {"delhiGeneral": [114710, 277237], "outsideGeneral": [89210, 122408], "delhiSC": [487965, 1436296], "outsideSC": [421643, 434629]},
        "Computer Science & Applied Mathematics": {"delhiGeneral": [152610, 301597], "outsideGeneral": [119832, 131767], "delhiSC": [992821, 1070255], "outsideSC": [401495, 464205]},
        "Computer Science & Engineering": {"delhiGeneral": [115002, 234490], "outsideGeneral": [79333, 101361], "delhiSC": [1173411, 1173411], "outsideSC": [375590, 398813]},
        "CSE (Cyber Security)": {"delhiGeneral": [75067, 280817], "outsideGeneral": [110504, 125176], "delhiSC": [512741, 1491741], "outsideSC": [432111, 450270]},
        "Electronics Engg. - VLSI Design & Technology": {"delhiGeneral": [202482, 348496], "outsideGeneral": [86404, 138465], "outsideSC": [474729, 513403]},
        "Industrial Internet of Things": {"delhiGeneral": [164779, 336359], "outsideGeneral": [130557, 142476], "outsideSC": [549111, 549111]}
    },
    "gtbit": {
        "Computer Science & Engineering (Shift I)": {"delhiGeneral": [100687, 875050], "outsideGeneral": [90533, 95618], "delhiSC": [1388924, 1388924], "outsideSC": [373105, 373105]},
        "Computer Science & Engineering (Shift II)": {"delhiGeneral": [189035, 221408], "outsideGeneral": [96194, 99032], "delhiSC": [1086915, 1111307]},
        "CSE - Artificial Intelligence & Machine Learning": {"delhiGeneral": [197315, 219622], "outsideGeneral": [90455, 99233], "delhiSC": [667335, 752972]},
        "CSE - Data Science": {"delhiGeneral": [221557, 227700], "outsideGeneral": [100699, 103794], "delhiSC": [990864, 1142567]},
        "Electronics & Communication Engineering": {"delhiGeneral": [246872, 289967], "outsideGeneral": [109914, 114069], "delhiSC": [1204529, 1430054], "outsideSC": [451045, 451045]},
        "Information Technology (Shift I)": {"delhiGeneral": [217234, 253280], "outsideGeneral": [99643, 106457], "delhiSC": [696105, 1484057], "outsideSC": [384214, 384214]},
        "Information Technology (Shift II)": {"delhiGeneral": [230374, 258529], "outsideGeneral": [106730, 109968]}
    },
    "adgitm": {
        "Artificial Intelligence & Data Science (Shift I)": {"delhiGeneral": [226787, 357099], "outsideGeneral": [126031, 140744], "delhiSC": [984785, 1047436], "outsideSC": [377118, 443716]},
        "Artificial Intelligence & Data Science (Shift II)": {"delhiGeneral": [282225, 362094], "outsideGeneral": [125086, 134255], "outsideSC": [447811, 447811]},
        "Artificial Intelligence & Machine Learning (Shift I)": {"delhiGeneral": [184127, 340833], "outsideGeneral": [100655, 132826], "delhiSC": [1035267, 1471070], "outsideSC": [429082, 467848]},
        "Artificial Intelligence & Machine Learning (Shift II)": {"delhiGeneral": [285532, 358570], "outsideGeneral": [137014, 143282], "delhiSC": [1026192, 1026192], "outsideSC": [470389, 470389]},
        "B.Tech (Computer Science)": {"delhiGeneral": [216162, 287793], "outsideGeneral": [108265, 114840], "delhiSC": [884411, 1236916], "outsideSC": [407468, 407468]},
        "B.Tech (Computer Science) Shift II": {"delhiGeneral": [226158, 318607], "outsideGeneral": [118786, 128144], "delhiSC": [999177, 1204691], "outsideSC": [426539, 426539]},
        "Civil Engineering": {"delhiGeneral": [215441, 399728], "outsideGeneral": [108024, 151601], "delhiSC": [761461, 783266], "outsideSC": [547623, 547623]},
        "Computer Science & Engineering (Shift I)": {"delhiGeneral": [148016, 263917], "outsideGeneral": [87093, 116044], "delhiSC": [832040, 1347230], "outsideSC": [374459, 406034]},
        "Computer Science & Engineering (Shift II)": {"delhiGeneral": [180895, 276488], "outsideGeneral": [94048, 118457], "delhiSC": [1374284, 1374284], "outsideSC": [409851, 409851]},
        "Computer Science & Technology (Shift I)": {"delhiGeneral": [237587, 298666], "outsideGeneral": [108523, 122907], "outsideSC": [434953, 434953]},
        "Computer Science & Technology (Shift II)": {"delhiGeneral": [272945, 341456], "outsideGeneral": [118731, 134917], "outsideSC": [450428, 450428]},
        "Electronics & Communication Engineering (Shift I)": {"delhiGeneral": [264616, 364973], "outsideGeneral": [109516, 144008], "outsideSC": [488883, 488883]},
        "Electronics & Communication Engineering (Shift II)": {"delhiGeneral": [216835, 377323], "outsideGeneral": [117836, 146301], "outsideSC": [507398, 507398]},
        "Information Technology (Shift I)": {"delhiGeneral": [235721, 340824], "outsideGeneral": [128519, 137051], "delhiSC": [712482, 712482], "outsideSC": [423481, 435588]},
        "Information Technology (Shift II)": {"delhiGeneral": [283671, 359770], "outsideGeneral": [110154, 142419], "outsideSC": [457563, 457563]},
        "Mechanical Engineering": {"delhiGeneral": [255303, 385832], "outsideGeneral": [125556, 155688], "outsideSC": [523789, 523789]}
    },
    "gtb4cec": {
        "Computer Science & Engineering": {"delhiGeneral": [137864, 293988], "outsideGeneral": [83783, 114915], "delhiSC": [734923, 1468988], "outsideSC": [478338, 485162]},
        "CSE (Data Science)": {"delhiGeneral": [218741, 317941], "outsideGeneral": [118167, 122640], "delhiSC": [1013864, 1055936], "outsideSC": [487344, 487344]},
        "CSE - Artificial Intelligence & Machine Learning": {"delhiGeneral": [221440, 296682], "outsideGeneral": [111097, 118216], "delhiSC": [779610, 1428686], "outsideSC": [375799, 375799]},
        "Electronics & Communication Engineering": {"delhiGeneral": [246226, 360693], "outsideGeneral": [123144, 138314], "outsideSC": [459622, 459622]},
        "Information Technology": {"delhiGeneral": [243517, 322459], "outsideGeneral": [105075, 128979], "delhiSC": [1276464, 1280816], "outsideSC": [496367, 496367]}
    },
    "hmritm": {
        "Computer Science & Engineering (Shift I)": {"delhiGeneral": [277906, 419763], "outsideGeneral": [143770, 156269], "outsideSC": [455441, 567906]},
        "Computer Science & Engineering (Shift II)": {"delhiGeneral": [360632, 446060], "outsideGeneral": [129788, 160782], "outsideSC": [572433, 572433]},
        "Computer Science & Technology": {"delhiGeneral": [368137, 509670], "outsideGeneral": [157375, 170896], "outsideSC": [589216, 589216]},
        "CSE - Artificial Intelligence": {"delhiGeneral": [380643, 506284], "outsideGeneral": [149020, 173643], "outsideSC": [588812, 588812]},
        "CSE (Cyber Security)": {"delhiGeneral": [369402, 495493], "outsideGeneral": [138689, 154889]},
        "CSE - Artificial Intelligence & Machine Learning": {"delhiGeneral": [353609, 468040], "outsideGeneral": [146994, 158856], "delhiSC": [1179712, 1179712], "outsideSC": [553851, 553851]},
        "CSE - Data Science": {"delhiGeneral": [364060, 521947], "outsideGeneral": [161675, 169198], "outsideSC": [593256, 593256]},
        "Electrical Engineering": {"delhiGeneral": [301886, 548672], "outsideGeneral": [170848, 175147], "outsideSC": [615180, 615180]},
        "Information Technology": {"delhiGeneral": [373041, 522975], "outsideGeneral": [164289, 171163], "outsideSC": [574281, 574281]},
        "Mechanical Engineering": {"delhiGeneral": [71295, 594570], "outsideGeneral": [177034, 183055], "outsideSC": [615472, 615472]}
    },
    "dtc": {
        "Artificial Intelligence & Machine Learning": {"delhiGeneral": [237631, 566081], "outsideGeneral": [164634, 173171], "delhiSC": [725469, 725469], "outsideSC": [466966, 466966]},
        "Computer Science & Engineering": {"delhiGeneral": [223316, 546106], "outsideGeneral": [107416, 166173], "delhiSC": [1020053, 1020053], "outsideSC": [411892, 522188]},
        "CSE - Artificial Intelligence & Machine Learning": {"delhiGeneral": [261783, 559392], "outsideGeneral": [110589, 167986], "delhiSC": [885484, 885484], "outsideSC": [532186, 535047]},
        "CSE - Data Science": {"delhiGeneral": [320815, 569697], "outsideGeneral": [162507, 171223], "outsideSC": [536191, 536191]}
    },
    "jemtec": {
        "Artificial Intelligence & Data Science": {"delhiGeneral": [337683, 620661], "outsideGeneral": [66371, 175832], "outsideSC": [582454, 582454]},
        "Artificial Intelligence & Machine Learning": {"delhiGeneral": [327017, 622312], "outsideGeneral": [153479, 182638], "delhiSC": [907119, 907119], "outsideSC": [518977, 518977]},
        "Computer Science & Engineering": {"delhiGeneral": [268679, 609849], "outsideGeneral": [130672, 180682], "outsideSC": [484170, 581966]},
        "CSE - Artificial Intelligence & Machine Learning": {"delhiGeneral": [215120, 598015], "outsideGeneral": [149813, 170471], "outsideSC": [369237, 369237]}
    },
    "fimt": {
        "Artificial Intelligence & Machine Learning": {"delhiGeneral": [387171, 591887], "outsideGeneral": [173816, 184842], "outsideSC": [674610, 674610]},
        "Computer Science & Engineering": {"delhiGeneral": [271141, 529369], "outsideGeneral": [129922, 184721], "delhiSC": [1166887, 1166887], "outsideSC": [619501, 619501]},
        "Electronics & Communication Engineering": {"delhiGeneral": [401706, 642396], "outsideGeneral": [188479, 193385], "outsideSC": [495711, 495711]},
        "Information Technology": {"delhiGeneral": [367155, 629055], "outsideGeneral": [142185, 195750], "outsideSC": [576807, 576807]}
    },
    "mbs": {
        "B.Tech (AI & ML)": {"delhiGeneral": [285811, 425413], "outsideGeneral": [178132, 185246], "delhiSC": [895365, 1324628], "outsideSC": [615062, 615062]},
        "Civil Engineering": {"delhiGeneral": [330820, 566678], "outsideGeneral": [183059, 187221], "outsideSC": [570977, 570977]},
        "Computer Science & Engineering": {"delhiGeneral": [187570, 392084], "outsideGeneral": [139719, 174574], "outsideSC": [609249, 609249]},
        "Electronics & Communication Engineering": {"delhiGeneral": [371818, 459968], "outsideGeneral": [154780, 183590], "delhiSC": [1071080, 1071080], "outsideSC": [604042, 604042]}
    },
    "echelon": {
        "Artificial Intelligence & Data Science": {"delhiGeneral": [420434, 712774], "outsideGeneral": [187064, 192913], "outsideSC": [627457, 627457]},
        "Mechanical Engineering": {"delhiGeneral": [378507, 759077], "outsideGeneral": [191585, 203915], "outsideSC": [720144, 720144]},
        "Robotics & Artificial Intelligence": {"delhiGeneral": [366701, 747853], "outsideGeneral": [194452, 199251], "outsideSC": [716572, 716572]},
        "B.Tech CSE (IOT) & Blockchain Technology": {"delhiGeneral": [321725, 767160], "outsideGeneral": [200154, 201201]},
        "Civil Engineering": {"delhiGeneral": [576870, 729052], "outsideGeneral": [196291, 205877]},
        "Computer Science & Engineering": {"delhiGeneral": [218583, 698564], "outsideGeneral": [129804, 187718], "outsideSC": [520538, 624650]},
        "CSE (Cyber Security)": {"delhiGeneral": [530796, 725722], "outsideGeneral": [190168, 198304], "outsideSC": [596355, 596355]},
        "CSE - Artificial Intelligence & Machine Learning": {"delhiGeneral": [245621, 692925], "outsideGeneral": [101427, 193573], "outsideSC": [608498, 608498]},
        "CSE - Data Science": {"delhiGeneral": [621561, 735010], "outsideGeneral": [159143, 196824], "outsideSC": [651045, 651045]},
        "Electronics & Communication Engineering": {"delhiGeneral": [213462, 687758], "outsideGeneral": [144806, 199854]}
    },
    "gnit": {
        "Artificial Intelligence & Machine Learning": {"delhiGeneral": [367852, 586151], "outsideGeneral": [152936, 178771], "outsideSC": [588074, 588074]},
        "Computer Science & Engineering": {"delhiGeneral": [236490, 574760], "outsideGeneral": [146075, 175583], "outsideSC": [560433, 587926]}
    },
    "dird": {
        "Computer Science & Engineering": {"delhiGeneral": [226391, 496302], "outsideGeneral": [84375, 152579], "delhiSC": [1363735, 1455775], "outsideSC": [280908, 402683]}
    },
    "sbit": {
        "B.Tech CSE (AI & DS)": {"delhiGeneral": [486286, 679136], "outsideGeneral": [183736, 187558], "outsideSC": [664441, 664441]},
        "Computer Science & Engineering": {"delhiGeneral": [353533, 647086], "outsideGeneral": [118844, 177179], "outsideSC": [618046, 618046]},
        "CSE - Artificial Intelligence & Machine Learning": {"delhiGeneral": [415931, 662375], "outsideGeneral": [176138, 190205], "outsideSC": [647307, 647307]},
        "Electronics & Communication Engineering": {"delhiGeneral": [499437, 671432], "outsideGeneral": [174934, 183974], "outsideSC": [661858, 661858]},
        "Mechanical Engineering": {"delhiGeneral": [365260, 667092], "outsideGeneral": [185306, 190335]}
    },
    "usct": {
        "Chemical Engineering (Dual Degree)": {"delhiGeneral": [298645, 533584], "outsideGeneral": [64503, 130328], "delhiSC": [582127, 1298183], "outsideSC": [322272, 355467]},
        "Energy Engineering": {"delhiGeneral": [182287, 282396], "outsideGeneral": [99740, 131858], "delhiSC": [700515, 1327375], "outsideSC": [333500, 333500]}
    },
    "usbas": {
        "Industrial Chemistry": {"delhiGeneral": [204186, 375194], "outsideGeneral": [136862, 151111], "delhiSC": [1206945, 1419362], "outsideSC": [361611, 361611]}
    }
}

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Instead of regex over the entire block, we can just split by branch boundaries
# Much more foolproof!

def replace_college(m):
    col_str = m.group(0)
    col_id = m.group(2).lower()
    
    if col_id in updates:
        branch_updates = updates[col_id]
        
        for branch_name, quotas in branch_updates.items():
            # Find the start of this branch
            branch_start = col_str.find(f'branch: "{branch_name}"')
            if branch_start == -1:
                print(f"ERROR: Could not find branch {branch_name} in {col_id}")
                continue
                
            # Find the end of this branch (next 'branch:' or end of array ']')
            next_branch_start = col_str.find('branch:', branch_start + 10)
            end_bracket = col_str.find(']', branch_start)
            
            if next_branch_start != -1 and next_branch_start < end_bracket:
                branch_end = next_branch_start
            else:
                branch_end = end_bracket
                
            branch_content = col_str[branch_start:branch_end]
            
            # Now replace quotas within branch_content
            for quota, (min_val, max_val) in quotas.items():
                q_pat = r'({0}:\s*\{{\s*minRank:\s*)\d+(,\s*maxRank:\s*)\d+(\s*\}})'.format(quota)
                branch_content = re.sub(q_pat, r'\g<1>{0}\g<2>{1}\g<3>'.format(min_val, max_val), branch_content)
                
            col_str = col_str[:branch_start] + branch_content + col_str[branch_end:]
            
    return col_str

college_pattern = re.compile(r'(id:\s*"([^"]+)".*?branches:\s*\[.*?\]\s*,?\s*\}(?:,|$))', flags=re.DOTALL)
new_content = college_pattern.sub(replace_college, content)

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Remaining updates successfully written with string find!")
