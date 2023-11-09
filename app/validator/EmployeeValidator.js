module.exports = class EmployeeValidator {
    validateEmployee = function (employee) {
        if (isNaN(employee.salary)) {
            return "Salary must be a number"
        }

        if (Number(employee.salary) < 20000) {
            return "Salary must be at least £20,000"
        }

        if (employee.bankNo.length != 8) {
            return "Invalid bank number"
        }

        if (employee.fname.length > 50) {
            return "Invalid first name"
        }

        if (employee.lname.length > 50) {
            return "Invalid last name"
        }

        if (employee.nin.length != 8) {
            return "Invalid nin"
        }

        return null
    }
}