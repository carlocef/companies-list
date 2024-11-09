const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');
const CompanyService = require('../services/companyServices');
const service = new CompanyService();
const validatorHandler = require('../middlewares/validatorHandler');
const { createCompanySchema, updateCompanySchema, getCompanySchema } = require('../schemas/companySchemas');

router.get('/api', async (req, res)=>{
 const companies = await service.find();
  res.json(companies);
})

router.get('/api/:id', validatorHandler(getCompanySchema, 'params'), async (req, res, next)=>{
  try {
    const { id } = req.params;
     const company = await service.findOne(id);
      res.json(company);
       } catch (err) {
        next(err)
        }
 })

router.post('/api',validatorHandler(createCompanySchema, 'body'), async(req, res, next)=>{
try {
  const body = req.body;
   const newCompany = await service.create(body);
    res.status(201).json(newCompany);
     } catch (err) {
      next(err);
      }
})

router.patch('/api/:id',validatorHandler(getCompanySchema, 'params'),validatorHandler(updateCompanySchema, 'body'), async(req, res, next)=>{
  try {
   const { id } = req.params;
    const body = req.body;
     const company = await service.update(id, body);
      res.json(company);
       } catch (err) {
        next(err);
       }
})

router.delete('/api/:id', async (req, res)=>{
 const { id } = req.params;
  rta = await service.delete(id);
   res.json(rta);
})

module.exports = router;
