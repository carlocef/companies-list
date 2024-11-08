const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();


router.get('/', (req, res)=>{
  const companies = []
  const { size } = req.query;
  const limit = size || 50
  for (let i = 0; i < limit; i++) {
    companies.push({
      id: companies.length + 1,
      name: faker.company.name(),
      location:faker.location.direction(),
      image: faker.image.url(),
    })

  }
  res.json(companies);
})



module.exports = router;
