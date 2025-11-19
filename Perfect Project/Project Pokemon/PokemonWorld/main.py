import requests
import json

url = "https://pokeapi.co/api/v2/pokemon?limit=1000"

response = requests.get(url)
data = response.json()

with open("pokemon_data.json", "w") as file:
    json.dump(data, file, indent=2)

print("Data saved to pokemon_data.json")
