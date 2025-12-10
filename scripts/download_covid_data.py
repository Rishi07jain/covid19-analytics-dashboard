from shutil import rmtree
import requests
import wbdata
from git import Repo
from time import sleep

def delete_directory(path):
    try:
        rmtree(path)
    except FileNotFoundError:
        pass

def download_covid():
    url = 'https://github.com/CSSEGISandData/COVID-19'
    path = './raw/COVID-19'
    print('Downloading covid data.')
    delete_directory(path=path)
    Repo.clone_from(url, to_path=path)

def download_countries():
    url = 'https://datahub.io/JohnSnowLabs/country-and-continent-codes-list/r/country-and-continent-codes-list-csv.csv'
    path = './raw/datahub'
    print('Downloading country data.')
    delete_directory(path=path)
    req = requests.get(url=url)
    content = req.content
    with open(f'{path}/countries.csv', 'wb') as csv:
        csv.write(content)

def download_world_bank():
    path = './raw/world_bank'
    delete_directory(path=path)

    indicators = [
        {'NY.GDP.PCAP.PP.CD': 'GDP per capita, PPP (current international $)'},
        {'SP.POP.TOTL': 'Population, total'},
        {'SP.URB.TOTL.IN.ZS': 'Urban population (% of total population)'},
        {'EN.POP.SLUM.UR.ZS': 'Urban population (% of total population)'},
        {'SP.RUR.TOTL.ZS': 'Rural population (% of total population)'},
        {'SP.DYN.LE00.IN': 'Life expectancy at birth, total (years)'},
        {'SH.XPD.CHEX.GD.ZS': 'Current health expenditure (% of GDP)'}
    ]

    for indicator in indicators:
        file_name = list(indicator.keys())[0]
        full_path = f'{path}/{file_name}.csv'
        print(f'Downloading {indicator}.')
        try:
            df = wbdata.get_dataframe(indicator)
            df.to_csv(full_path)
            sleep(2)
        except Exception:
            print(f'Download failed for {indicator}')

if __name__ == '__main__':
    download_covid()
    download_countries()
    download_world_bank()
