import json

pins = []

# cycle through boards A to J
boards = ["Board A","Board B","Board C","Board D","Board E","Board F","Board G","Board H","Board I","Board J"]

for i in range(1001, 5001):
    pin = {
        "id": i,
        "title": f"Pin {i}",
        "description": f"Sample pin description {i}",
        "image": f"https://picsum.photos/seed/pin{i}/400/600",
        "link": "#",
        "author": f"user{i}",
        "board": boards[(i-101) % len(boards)]
    }
    pins.append(pin)

# save to getPins.json
with open("getPins.json", "w") as f:
    json.dump(pins, f, indent=4)

print("getPins.json created with 100 pins!")
