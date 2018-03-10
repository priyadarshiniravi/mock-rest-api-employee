var faker = require('faker')

function randomNumberBetween1To5()
{
  return faker.random.number({min:1, max:5});
}

function getRandomLocation()
{
  var locations = ["BANGLORE","CHENNAI","MUMBAI","HYDERABAD","PUNE","GURUGRAM","LONDON","PARIS"]

  return faker.random.arrayElement(locations);
}

function getRandomRole()
{
  var roles = ["QA", "BA", "DEV", "PM"]
  
  return faker.random.arrayElement(roles);
}
function randomBoolean()
{
  return faker.random.boolean();
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