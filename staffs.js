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

  for(var id = 0; id < 1000; id++)
  {
    var name = faker.name.firstName();

    staffs.push({
      "id": id,
      "location": getRandomLocation(),
      "name": name,
      "role": getRandomRole(),
      "skillSet":[
        {
          "name":"Android",
          "rating": randomNumberBetween1To5()
        },
        {
          "name":"Java",
          "rating": randomNumberBetween1To5()
        }
      ],
      "travelPreference": {
        "domestic": randomBoolean(),
        "international": randomBoolean()
      }
    })
  }

  return {"staffs": staffs}
}

module.exports = generateStaffs
