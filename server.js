
const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
// req is short for request
// res is short for response

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const random = () => {
  min = Math.ceil(1);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min) + min)
}

class User {
  constructor() {
    this.id = random();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();

  }
}


class Company {
  constructor() {
    this.id = random();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.stateAbbr(),
      zipCode: faker.address.zipCodeByState(),
      country: faker.address.country()
    }
  }
}


app.get("/api", (req, res) => {
  res.json({ message: 'Hello Hello ' });
});



app.get("/api/user", (req, res) => {
  res.json(new User);
});

app.get("/api/company", (req, res) => {
  res.json(new Company);
});

app.get("/api/user/company", (req, res) => {
  const wholeShebang = [
    { fakeUser: (new User) }, { fakeCo: (new Company) }
  ]
  res.json(wholeShebang)
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
