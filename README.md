# mock-rest-api-employee
This is a mock server for employee look-up created using https://github.com/typicode/json-server

#Running the app
* Install json-server `npm install -g json-server`
* To start the server `json-server --watch db.json`
* Staffs enpoints for the data is exposed 
```
{
    "id": 1,
    "location": "Pune",
    "name": "Priya",
    "role": "DEV",
    "skill-set": [
      {
        "name": "Android",
        "Rating": 5
      },
      {
        "name": "Java",
        "Rating": 5
      }
    ],
    "travel-preference": {
      "Domestic": false,
      "International": false
    }
  }
```
Few Examples:
* http://localhost:3000/staffs?location=Pune
* http://localhost:3000/staffs
* http://localhost:3000/staffs/1
* Including Fuzzy Search http://localhost:3000/staffs?q=Priya
* Can also use most Rest feature including GET, PUT, POST, DELETE etc

#Running the app with fake data
* To generate lot of fake data faker is used
* staff.js uses faker to generate data
* to start server with fake data run - `json-server staffs.js`
