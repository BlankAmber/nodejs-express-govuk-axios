//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
const EmployeeService = require('./service/EmployeeService');
const EmployeeValidator = require('./validator/EmployeeValidator');
const employeeValidator = new EmployeeValidator();

router.get('/', async (req, res) => {     
    res.render('employee-home') 
});

router.get('/employees', async (req, res) => {
    let data = [];

    try {
        data = await EmployeeService.getEmployees()


        for (let i = 0; i < data.length; i++) {
            data[i].viewUrl = `<a href='employees/${data[i].employeeId}' id='view_employee_${i}'>View</a>`
        }
    } catch (e) {
        console.error(e);
    }
    
    res.render('list-employees', { employees: data } ) 
});

router.get('/employees/:id', async (req, res) => {     
    try {
        let employee = await EmployeeService.getEmployee(req.params.id);
        res.render('list-employee', { employee: employee } )
    } catch (e) {
        res.render('list-employee', { employee: null } )
    }
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