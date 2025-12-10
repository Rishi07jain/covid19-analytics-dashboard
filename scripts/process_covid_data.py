import json
import csv
import os
from datetime import datetime
from collections import defaultdict

def load_country_mapping():
    """Load country to continent mapping from datahub"""
    mapping = {}
    try:
        with open('./raw/datahub/countries.csv', 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                mapping[row['Country Code']] = {
                    'name': row['Country Name'],
                    'continent': row['Continent Name'],
                    'code': row['Country Code'],
                }
    except FileNotFoundError:
        print("Country mapping file not found")
    return mapping

def process_covid_data():
    """Process COVID-19 time series data from JHU repository"""
    data_path = './raw/COVID-19/csse_covid_19_data/csse_covid_19_time_series'
    
    # File mappings
    files = {
        'confirmed': 'time_series_covid19_confirmed_global.csv',
        'deaths': 'time_series_covid19_deaths_global.csv',
        'recovered': 'time_series_covid19_recovered_global.csv',
    }
    
    processed_data = {
        'global_timeseries': defaultdict(lambda: {'confirmed': 0, 'deaths': 0, 'recovered': 0, 'active': 0}),
        'country_data': {},
        'daily_changes': defaultdict(lambda: {'confirmed': 0, 'deaths': 0}),
    }
    
    # Process each dataset
    for key, filename in files.items():
        filepath = os.path.join(data_path, filename)
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        with open(filepath, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                country = row['Country/Region']
                
                # Initialize country data if not exists
                if country not in processed_data['country_data']:
                    processed_data['country_data'][country] = {
                        'confirmed': [],
                        'deaths': [],
                        'recovered': [],
                        'dates': [],
                        'lat': float(row['Lat']),
                        'lon': float(row['Long']),
                    }
                
                # Process dates and values
                for col in row:
                    if col not in ['Province/State', 'Country/Region', 'Lat', 'Long']:
                        try:
                            date = datetime.strptime(col, '%m/%d/%y').isoformat()
                            value = int(row[col]) if row[col] else 0
                            
                            if date not in [d for d in processed_data['country_data'][country]['dates']]:
                                processed_data['country_data'][country]['dates'].append(date)
                                processed_data['country_data'][country]['confirmed'].append(0)
                                processed_data['country_data'][country]['deaths'].append(0)
                                processed_data['country_data'][country]['recovered'].append(0)
                            
                            date_idx = processed_data['country_data'][country]['dates'].index(date)
                            if key == 'confirmed':
                                processed_data['country_data'][country]['confirmed'][date_idx] = value
                            elif key == 'deaths':
                                processed_data['country_data'][country]['deaths'][date_idx] = value
                            elif key == 'recovered':
                                processed_data['country_data'][country]['recovered'][date_idx] = value
                        except ValueError:
                            pass
    
    # Calculate global stats
    country_mapping = load_country_mapping()
    for country, data in processed_data['country_data'].items():
        if data['dates']:
            idx = len(data['dates']) - 1
            confirmed = data['confirmed'][idx] if idx < len(data['confirmed']) else 0
            deaths = data['deaths'][idx] if idx < len(data['deaths']) else 0
            recovered = data['recovered'][idx] if idx < len(data['recovered']) else 0
            
            processed_data['country_data'][country]['latest'] = {
                'confirmed': confirmed,
                'deaths': deaths,
                'recovered': recovered,
                'active': max(0, confirmed - deaths - recovered),
            }
            
            if country in country_mapping:
                processed_data['country_data'][country]['continent'] = country_mapping[country]['continent']
                processed_data['country_data'][country]['code'] = country_mapping[country]['code']
    
    # Save processed data
    os.makedirs('./public/data', exist_ok=True)
    with open('./public/data/covid_data.json', 'w', encoding='utf-8') as f:
        # Convert defaultdict to regular dict for JSON serialization
        clean_data = {
            'country_data': processed_data['country_data'],
            'last_updated': datetime.now().isoformat(),
        }
        json.dump(clean_data, f)
    
    print("COVID data processing complete")
    print(f"Processed {len(processed_data['country_data'])} countries")

if __name__ == '__main__':
    process_covid_data()
