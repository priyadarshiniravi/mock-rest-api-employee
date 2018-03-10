var faker = require('faker')

function randomNumberBetween1To5()
{
  return Math.floor(Math.random() * 5) + 1;
}

function getRandomLocation()
{
  var locations = ["BANGLORE","CHENNAI","MUMBAI","HYDERABAD","PUNE","GURUGRAM","LONDON","PARIS"]

  return locations[Math.floor(Math.random() * locations.length)];
}

function getRandomRole()
{
  var roles = ["QA", "BA", "DEV", "PM"]
  
  return roles[Math.floor(Math.random() * roles.length)];
}
function randomBoolean()
{
  return Math.random() >= 0.5;
}

function generateStaffs()
{
  var staffs = []
  
  for(var id = 0; id < 500; id++)
  {
    var name = faker.name.firstName();
        
    staffs.push({
      "id": id,
      "location": getRandomLocation(),
      "name": name,
      "role": getRandomRole(),
      "skill-set":[
        {
          "name":"Android",
          "Rating": randomNumberBetween1To5()
        },
        {
          "name":"Java",
          "Rating": randomNumberBetween1To5()
        }
      ],
      "travel-preference": {
        "Domestic": randomBoolean(),
        "International": randomBoolean()
      }
    })
  }
  
  return {"staffs": staffs}
}

module.exports = generateStaffs