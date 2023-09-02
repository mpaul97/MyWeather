import json
import requests

class Data:
    def __init__(self, _dir):
        self._dir = _dir
        self.api_key = '9fa9382f92msh7a31d64d5592c88p168c3djsn1401d40dbe5c'
        self.api_host = 'weatherapi-com.p.rapidapi.com'
        self.headers = {
            'X-RapidAPI-Key': self.api_key,
            'X-RapidAPI-Host': self.api_host
        }
        return
    def saveRealtime(self):
        url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Los%20Angeles%20US'
        res = requests.get(url, headers=self.headers)
        content = res.json()
        with open('realtime_temp_date.json', 'w') as f:
            json.dump(content, f)
        return
    def saveForecast(self):
        url = 'https://weatherapi-com.p.rapidapi.com/forecast.json'
        params = {
            'q': 'Los Angeles',
            'days': 10
        }
        res = requests.get(url, headers=self.headers, params=params)
        content = res.json()
        with open('forecast_temp_data.json', 'w') as f:
            json.dump(content, f)
        return
    
# END / Data

################

d = Data("./")

# d.saveRealtime()

# d.saveForecast()
