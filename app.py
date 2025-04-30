from flask import Flask, request, render_template
from geopy.distance import geodesic
import json
from datetime import datetime

# app = Flask(__name__)
app = Flask(__name__, static_folder='static')

# Load cities with coordinates and events from JSON
with open('api/eventCities.json', 'r', encoding='utf-8') as f:
    cities_data = json.load(f)
    all_event_cities = cities_data.get("eventCities", [])

# Predefined datalist cities
datalist_cities = [
    {"name": "Breclav", "lat": 48.7572, "lon": 16.8829},
    {"name": "Brno", "lat": 49.1952, "lon": 16.6073},
    {"name": "Hodonin", "lat": 48.8494, "lon": 17.1326},
    {"name": "Vyskov", "lat": 49.2771, "lon": 16.9977},
    {"name": "Znojmo", "lat": 48.8555, "lon": 16.0495},
    {"name": "Blansko", "lat": 49.3635, "lon": 16.6459}
]

def get_future_event_cities(event_cities):
    today = datetime.today().date()
    return [
        event_city for event_city in event_cities
        if datetime.strptime(event_city['date'], '%Y-%m-%d').date() >= today
    ]

@app.route('/', methods=['GET', 'POST'])
def index():
    selected_city = None
    nearby_cities = []

    if request.method == 'POST':
        # Get the selected city from the form
        selected_city_name = request.form.get('selectedCity')
        selected_city = next((city for city in datalist_cities if city['name'] == selected_city_name), None)

        if selected_city:
            future_event_cities = get_future_event_cities(all_event_cities)

            # Debug: Print filtered future events
            print("Future Event Cities:", future_event_cities)

            # Calculate distances to all event cities
            distances = [
                {
                    'name': event_city['name'],
                    'distance': geodesic(
                        (selected_city['lat'], selected_city['lon']),
                        (event_city['lat'], event_city['lon'])
                    ).kilometers,
                    'date': event_city['date']
                }
                for event_city in future_event_cities
            ]

            # Debug: Print distances
            print("Distances from selected city:", distances)

            # Sort by distance and take the two closest cities
            nearby_cities = sorted(distances, key=lambda x: x['distance'])[:3]

            # Debug: Print nearby cities
            print("Nearby Cities:", nearby_cities)

    return render_template(
        'menu.html',
        cities=datalist_cities,
        selected_city=selected_city,
        nearby_cities=nearby_cities
    )


if __name__ == '__main__':
    app.run(debug=True)
