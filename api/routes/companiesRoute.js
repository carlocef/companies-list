const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');
const CompanyService = require('../services/companyServices');
const service = new CompanyService();
const validatorHandler = require('../middlewares/validatorHandler');
const { createCompanySchema, updateCompanySchema, getCompanySchema } = require('../schemas/companySchemas');

router.get('/', async (req, res)=>{
 const companies = await service.find();
  res.json(companies);
})

router.get('/:id', validatorHandler(getCompanySchema, 'params'), async (req, res, next)=>{
  try {
    const { id } = req.params;
     const company = await service.findOne(id);
      res.json(company);
       } catch (err) {
        next(err)
        }
 })

router.post('/',validatorHandler(createCompanySchema, 'body'), async(req, res, next)=>{
try {
  const body = req.body;
   const newCompany = await service.create(body);
    res.status(201).json(newCompany);
     } catch (err) {
      next(err);
      }
})

router.patch('/:id',validatorHandler(getCompanySchema, 'params'),validatorHandler(updateCompanySchema, 'body'), async(req, res, next)=>{
  try {
   const { id } = req.params;
    const body = req.body;
     const company = await service.update(id, body);
      res.json(company);
       } catch (err) {
        next(err);
       }
})

router.delete('/:id', async (req, res)=>{
 const { id } = req.params;
  rta = await service.delete(id);
   res.json(rta);
})

module.exports = router;
