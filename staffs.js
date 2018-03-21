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

function getRandomGrade()
{
  var grades = ["GRAD_CONSULTANT", "CONSULTANT", "SENIOR_CONSULTANT", "LEAD_CONSULTANT"]

  return faker.random.arrayElement(grades);
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
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function getRandomSkillSet(role)
{
  var skillSetDict = {
    "DEV": ["Android","Java","Build Pipelines","C++","CI","Go CD","HTML","Oracle","Postgres","Python","AWS","CSS","Docker","Golang","Javascript","MySQL","PHP","React","SQL","Unix/Linux","C#","Clojure"],
    "QA": ["C# application development","Go","Java application development","Java test automation","C# test automation","JavaScript application development","Manual Testing"],
    "PM": ["Change Management","Iteration Management","Project Management","Stakeholder Management","Establish & Cultivate Relationships"],
    "BA": ["Analytics","Business Vision & Context Analysis","Concept Generation","Product Innovation & Delivery","Process Analysis & Design","Usability Research","User Research & Customer Analysis","Visual Design"]
  }
  var skills = skillSetDict[role];
  var currentSkills = []
  for (var i = 0; i < randomNumberBetween1To5(); i++) {
    currentSkills.push(faker.random.arrayElement(skills));
  }
  var uniqueSkills = currentSkills.filter(onlyUnique);
  var skillsJson = []
  for (var i = 0; i < uniqueSkills.length; i++) {
    skillsJson.push(
      {
        "name": uniqueSkills[i],
        "rating": randomNumberBetween1To5()
      }
    )
  }
  return skillsJson;
}

function generateStaffs()
{
  var staffs = []

  for(var id = 0; id < 2000; id++)
  {
    var name = faker.name.firstName();
    var role = getRandomRole();
    staffs.push({
      "id": id,
      "location": getRandomLocation(),
      "name": name,
      "role": role,
      "grade": getRandomGrade(),
      "skillSet": getRandomSkillSet(role),
      "travelPreference": {
        "domestic": randomBoolean(),
        "international": randomBoolean()
      }
    })
  }

  return {"staffs": staffs}
}

module.exports = generateStaffs
