class Company {
    constructor() {
        this.id = faker.unique.random_int();
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
console.log(new Company());