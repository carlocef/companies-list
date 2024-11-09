const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
class CompanyService{

constructor(){
this.companies = [];
this.generate();
}

async generate(){
  const limit =  50;
  for (let i = 0; i < limit; i++) {
    this.companies.push({
      id: faker.string.uuid(),
      name: faker.company.name(),
      location:faker.location.direction(),
      image: faker.image.url(),
    })
  }
}

async find(){
return new Promise((resolve, reject) => {
      setTimeout(()=>{
      resolve(this.companies)
    },100)
  })
}

async findOne(id){
 const company = this.companies.find(item => item.id === id);
  if(!company) {
   throw boom.notFound('company not found');
    } else{
     return company;
     }
}

async create(data){
  const newCompany = {
    id: faker.string.uuid(),
    ...data
  }
   this.companies.push(newCompany);
    return newCompany;
}
async update(id, changes){
 const index = this.companies.findIndex(item => item.id ===id);
  if(index === -1){
    throw boom.notFound('Company not found');
  }
    const company = this.companies[index]
     this.companies[index] = {
      ...company,
      ...changes
     }
      return this.companies[index];
}

 async delete(id){
  const index = this.companies.findIndex(item => item.id ===id);
   if(index === -1){
    throw boom.notFound('company not found');
     } this.companies.splice(index, 1);
        return { id };
 }
}
module.exports = CompanyService;
