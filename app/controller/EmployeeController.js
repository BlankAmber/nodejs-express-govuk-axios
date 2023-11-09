const express = require('express')
const router = express.Router()

const EmployeeService = require('../service/EmployeeService');
const EmployeeValidator = require('../validator/EmployeeValidator');
const employeeValidator = new EmployeeValidator()

router.get('/', async (req, res) => {     
    res.render('employee-home') 
});

router.get('/employees', async (req, res) => {
    let data = [];

    try {
        data = await EmployeeService.getEmployees()


        for (let i = 0; i < data.length; i++) {
            data[i].viewUrl = `<a href='employees/${data[i].employeeId}'>View</a>`
        }
    } catch (e) {
        res.locals.errormessage = e.message
    }
    
    res.render('list-employees', { employees: data } ) 
});

router.get('/employees/:id', async (req, res) => {     
    res.render('list-employee', { employee: await EmployeeService.getEmployee(req.params.id) } ) 
});

router.get('/insert-employee', (req, res) => { 
    res.render('employee-form') 
});

router.post('/insert-employee', async (req, res) => {
    let error = employeeValidator.validateEmployee(req.body)

    console.log(error)

    if (error) {
        res.locals.errormessage = error
        return res.render('employee-form', req.body) 
    }

    try {        
        const id = await EmployeeService.createEmployee(req.body)
        res.redirect('/employees/' + id)
    } catch (e) {
        res.locals.errormessage = "Failed to submit form"
        res.render('employee-form', req.body)
    }
});

module.exports = router
