var faker = require('faker')

function randomNumberBetween1To5()
{
  return Math.floor(Math.random() * 5) + 1;
}

function generateStaffs()
{
  var staffs = []
  
  for(var id = 0; id < 500; id++)
  {
    var name = faker.name.firstName();
    
    var locations = [
       "BANGLORE",
       "CHENNAI",
       "MUMBAI",
       "HYDERABAD",
       "PUNE",
       "GURUGRAM",
       "LONDON",
       "PARIS"
    ]

    var randomLocation = locations[Math.floor(Math.random() * locations.length)];
    
    var roles = ["QA", "BA", "DEV", "PM"]
    
    var randomRole = roles[Math.floor(Math.random() * roles.length)];
        
    staffs.push({
      "id": id,
      "location": randomLocation,
      "name": name,
      "role": randomRole,
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
        "Domestic": false,
        "International": false
      }
    })
  }
  
  return {"staffs": staffs}
}

module.exports = generateStaffs