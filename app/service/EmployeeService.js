const axios = require('axios');
axios.defaults.baseURL = process.env.API_URL;

module.exports.URL = '/hr/employee/'


module.exports.createEmployee = async function (employee) {
    try {
        const response = await axios.post(this.URL, employee)

    return response.data
    } catch (e) {
        console.log('Error: ' + e)
        if (e.response.status === 500) {
            throw new Error('Could not create employee')
        }
        else if (e.response.status === 400) {
            throw new Error('Invalid data')
        }
    }
}

module.exports.getEmployee = async function (id) {
    if (id === null) {
        throw new Error('Invalid ID')
    }

    try {
        const response = await axios.get(this.URL + id)

        return response.data
    } catch (e) {
        console.log('Error: ' + e)
        if (e.response.status === 500) {
            throw new Error('Failed to get employee')
        }
        else if (e.response.status === 400) {
            throw new Error('Employee does not exist')
        }
    }
}

module.exports.getEmployees = async function () {
    try {
        const response = await axios.get(this.URL)

        return response.data
    } catch (e) {
        console.log('Error: ' + e)
        throw new Error('Could not get employees')
    }
}