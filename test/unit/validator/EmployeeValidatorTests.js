var chai = require('chai');  
const expect = chai.expect;
const EmployeeValidator = require('../../../app/validator/EmployeeValidator');

describe('EmployeeValidator', function () {
  const employeeValidator = new EmployeeValidator()

    describe('validateEmployee', function () {
      it('should return null when no errors', () => {
        let employee = {
            salary: "30000",
            fname: "Mocha",
            lname: "Chai",
            email: "test@email.com",
            address: "address",
            address2: "address2",
            city: "city",
            county: "county",
            postalCode: "postalCode",
            country: "country",
            phoneNo: "01234567890",
            bankNo: "12345678",
            nin: "12345678"
        }

        expect(employeeValidator.validateEmployee(employee)).to.be.null
      })

      it('should return error when salary not a number', () => {
        let employee = {
            salary: "not a number",
            fname: "Mocha",
            lname: "Chai",
            email: "test@email.com",
            address: "address",
            address2: "address2",
            city: "city",
            county: "county",
            postalCode: "postalCode",
            country: "country",
            phoneNo: "01234567890",
            bankNo: "12345678",
            nin: "12345678"
        }

        expect(employeeValidator.validateEmployee(employee)).to.equal("Salary must be a number")
      })

    /*
    Unit Test Exercise 1

    Write a unit test for the validateEmployee method

    When the bank number is less than 8 characters

    Expect error to be returned

    This should pass without code changes
     */
    it('should return error when bank number is less than 8 characters', () => {
      let employee = {
          salary: "30000",
          fname: "Mocha",
          lname: "Chai",
          email: "test@email.com",
          address: "address",
          address2: "address2",
          city: "city",
          county: "county",
          postalCode: "postalCode",
          country: "country",
          phoneNo: "01234567890",
          bankNo: "1234567",
          nin: "12345678"
      }

      expect(employeeValidator.validateEmployee(employee)).to.equal("Invalid bank number")
    })

    /*
    Unit Test Exercise 2

    Write a unit test for the validateEmployee method

    When the bank number is more than 8 characters

    Expect error to be returned

    This should pass without code changes
     */
    it('should return error when bank number is more than 8 characters', () => {
      let employee = {
          salary: "30000",
          fname: "Mocha",
          lname: "Chai",
          email: "test@email.com",
          address: "address",
          address2: "address2",
          city: "city",
          county: "county",
          postalCode: "postalCode",
          country: "country",
          phoneNo: "01234567890",
          bankNo: "123456789",
          nin: "12345678"
      }

      expect(employeeValidator.validateEmployee(employee)).to.equal("Invalid bank number")
    })

    /*
    Unit Test Exercise 3

    Write a unit test for the validateEmployee method

    When the first name than 50 characters

    Expect error to be returned

    This should fail, make code changes to make this test pass
     */
    it('should return error when first name is more than 50 characters', () => {
      let employee = {
          salary: "30000",
          fname: "123456789012345678901234567890123456789012345678901",
          lname: "Chai",
          email: "test@email.com",
          address: "address",
          address2: "address2",
          city: "city",
          county: "county",
          postalCode: "postalCode",
          country: "country",
          phoneNo: "01234567890",
          bankNo: "12345678",
          nin: "12345678"
      }

      expect(employeeValidator.validateEmployee(employee)).to.equal("Invalid first name")
    })

    /*
    Unit Test Exercise 4

    Write a unit test for the validateEmployee method

    When the last name than 50 characters

    Expect error to be returned

    This should fail, make code changes to make this test pass
     */
    it('should return error when last name is more than 50 characters', () => {
      let employee = {
          salary: "30000",
          fname: "Mocha",
          lname: "123456789012345678901234567890123456789012345678901",
          email: "test@email.com",
          address: "address",
          address2: "address2",
          city: "city",
          county: "county",
          postalCode: "postalCode",
          country: "country",
          phoneNo: "01234567890",
          bankNo: "12345678",
          nin: "12345678"
      }

      expect(employeeValidator.validateEmployee(employee)).to.equal("Invalid last name")
    })

    /*
    Unit Test Exercise 5

    Write a unit test for the validateEmployee method

    When the nin is more than 8 characters

    Expect error to be returned

    This should fail, make code changes to make this test pass
     */
    it('should return error when nin is more than 8 characters', () => {
      let employee = {
          salary: "30000",
          fname: "Mocha",
          lname: "Chai",
          email: "test@email.com",
          address: "address",
          address2: "address2",
          city: "city",
          county: "county",
          postalCode: "postalCode",
          country: "country",
          phoneNo: "01234567890",
          bankNo: "12345678",
          nin: "123456789"
      }

      expect(employeeValidator.validateEmployee(employee)).to.equal("Invalid nin")
    })

    /*
    Unit Test Exercise 6

    Write a unit test for the validateEmployee method

    When the nin is less than 8 characters

    Expect error to be returned

    This should fail, make code changes to make this test pass
     */
    it('should return error when nin is less than 8 characters', () => {
      let employee = {
          salary: "30000",
          fname: "Mocha",
          lname: "Chai",
          email: "test@email.com",
          address: "address",
          address2: "address2",
          city: "city",
          county: "county",
          postalCode: "postalCode",
          country: "country",
          phoneNo: "01234567890",
          bankNo: "12345678",
          nin: "1234567"
      }

      expect(employeeValidator.validateEmployee(employee)).to.equal("Invalid nin")
    })

    /*
    Unit Test Exercise 7

    Write a unit test for the validateEmployee method

    When the salary is less than 20000

    Expect error to be returned

    This should pass without code changes
     */
    it('should return error when salary is less than 20000', () => {
      let employee = {
          salary: "19999",
          fname: "Mocha",
          lname: "Chai",
          email: "test@email.com",
          address: "address",
          address2: "address2",
          city: "city",
          county: "county",
          postalCode: "postalCode",
          country: "country",
          phoneNo: "01234567890",
          bankNo: "12345678",
          nin: "12345678"
      }

      expect(employeeValidator.validateEmployee(employee)).to.equal("Salary must be at least £20,000")
    })
    })
  })