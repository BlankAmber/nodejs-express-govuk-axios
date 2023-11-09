/* eslint-env mocha */
/* global browser */
const webdriver = require('selenium-webdriver');

const chai = require('chai');  

describe('Employee test', async () => {
    it('Create new employee', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        try {
            await driver.get(process.env.UI_TEST_URL);

            await driver.findElement(webdriver.By.id('add-employee-button')).click();

            await driver.findElement(webdriver.By.id('fname')).sendKeys('UI (Samuel)');
            await driver.findElement(webdriver.By.id('lname')).sendKeys('Tests (Samuel)');
            await driver.findElement(webdriver.By.id('email')).sendKeys('testemail@email.com');
            await driver.findElement(webdriver.By.id('address')).sendKeys('1 Home Street');
            await driver.findElement(webdriver.By.id('address2')).sendKeys('Home Lane');
            await driver.findElement(webdriver.By.id('city')).sendKeys('Belfast');
            await driver.findElement(webdriver.By.id('county')).sendKeys('Antrim');
            await driver.findElement(webdriver.By.id('postalCode')).sendKeys('BT9');
            await driver.findElement(webdriver.By.id('country')).sendKeys('Norn Iron');
            await driver.findElement(webdriver.By.id('phoneNo')).sendKeys('01234567890');
            await driver.findElement(webdriver.By.id('bankNo')).sendKeys('12345678');
            await driver.findElement(webdriver.By.id('nin')).sendKeys('AA1A11AA');
            await driver.findElement(webdriver.By.id('salary')).sendKeys('30000');

            // If you comment both of these out, then it will time out as the element is never found (page is never loaded).

            // If you comment just the line that starts with await, and also comment out the driver.wait() code,
            // then the element will load eventually but the assertion will always run before it loads, resulting
            // in a NoSuchElement error.

            // If you comment just the line that doesn't start with await, and also comment out the driver.wait() code,
            // then the element MAY load in time before the assertion runs. Therefore, a NoSuchElement error will occur
            // but not always. I believe this is dependent on network speeds/other uncontrollable factors.

            // As long as the driver.wait() code is uncommented, it doesn't really matter which of the two following
            // lines is used, but I use the one that starts with await so that the timeout counter strictly starts
            // counting after the submit button has been clicked.

            await driver.findElement(webdriver.By.id('submit')).click('#submit');
            //driver.findElement(webdriver.By.id('submit')).click('#submit');

            let timeoutDurationMs = 5 * 1000;
            await driver.wait(webdriver.until.elementLocated(webdriver.By.id('name')), timeoutDurationMs)

            await driver.findElement(webdriver.By.id('name')).getText().then(function(value) {
                chai.assert.equal(value, 'UI (Samuel) Tests (Samuel)');
            });
        }
        finally {
            await driver.quit();
        }
    });
    /*
    UI Test Exercise 1

    Write an UI test for the add employee flow

    Try to create an employee with a salary of £10,000

    Expect 'Salary must be at least £20,000' error to be displayed

    This should pass without code changes
    */
    it('Add new employee should display error when salary is too low', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        try {
            await driver.get(process.env.UI_TEST_URL);

            await driver.findElement(webdriver.By.id('add-employee-button')).click();

            await driver.findElement(webdriver.By.id('fname')).sendKeys('UI');
            await driver.findElement(webdriver.By.id('lname')).sendKeys('Tests');
            await driver.findElement(webdriver.By.id('email')).sendKeys('testemail@email.com');
            await driver.findElement(webdriver.By.id('address')).sendKeys('1 Home Street');
            await driver.findElement(webdriver.By.id('address2')).sendKeys('Home Lane');
            await driver.findElement(webdriver.By.id('city')).sendKeys('Belfast');
            await driver.findElement(webdriver.By.id('county')).sendKeys('Antrim');
            await driver.findElement(webdriver.By.id('postalCode')).sendKeys('BT9');
            await driver.findElement(webdriver.By.id('country')).sendKeys('Norn Iron');
            await driver.findElement(webdriver.By.id('phoneNo')).sendKeys('01234567890');
            await driver.findElement(webdriver.By.id('bankNo')).sendKeys('12345678');
            await driver.findElement(webdriver.By.id('nin')).sendKeys('AA1A11AA');
            await driver.findElement(webdriver.By.id('salary')).sendKeys('10000');

            await driver.findElement(webdriver.By.id('submit')).click('#submit');

            let timeoutDurationMs = 5 * 1000;
            await driver.wait(webdriver.until.elementLocated(webdriver.By.id('create-employee-error')), timeoutDurationMs)

            await driver.findElement(webdriver.By.id('create-employee-error')).getText().then(function(value) {
                chai.assert.equal(value, 'Salary must be at least £20,000');
            });
        }
        finally {
            await driver.quit();
        }
    });

    /*
    UI Test Exercise 2

    Write an UI test for the add employee flow

    Try to create an employee with a salary of ABC

    Expect 'Salary must be a number' error to be displayed

    This should pass without code changes
    */
    it('Add new employee should display error when salary is not a number', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        try {
            await driver.get(process.env.UI_TEST_URL);

            await driver.findElement(webdriver.By.id('add-employee-button')).click();

            await driver.findElement(webdriver.By.id('fname')).sendKeys('UI');
            await driver.findElement(webdriver.By.id('lname')).sendKeys('Tests');
            await driver.findElement(webdriver.By.id('email')).sendKeys('testemail@email.com');
            await driver.findElement(webdriver.By.id('address')).sendKeys('1 Home Street');
            await driver.findElement(webdriver.By.id('address2')).sendKeys('Home Lane');
            await driver.findElement(webdriver.By.id('city')).sendKeys('Belfast');
            await driver.findElement(webdriver.By.id('county')).sendKeys('Antrim');
            await driver.findElement(webdriver.By.id('postalCode')).sendKeys('BT9');
            await driver.findElement(webdriver.By.id('country')).sendKeys('Norn Iron');
            await driver.findElement(webdriver.By.id('phoneNo')).sendKeys('01234567890');
            await driver.findElement(webdriver.By.id('bankNo')).sendKeys('12345678');
            await driver.findElement(webdriver.By.id('nin')).sendKeys('AA1A11AA');
            await driver.findElement(webdriver.By.id('salary')).sendKeys('ABC');

            await driver.findElement(webdriver.By.id('submit')).click('#submit');

            let timeoutDurationMs = 5 * 1000;
            await driver.wait(webdriver.until.elementLocated(webdriver.By.id('create-employee-error')), timeoutDurationMs)

            await driver.findElement(webdriver.By.id('create-employee-error')).getText().then(function(value) {
                chai.assert.equal(value, 'Salary must be a number');
            });
        }
        finally {
            await driver.quit();
        }
    });

    /*
    UI Test Exercise 3

    Write an UI test for view employee workflow

    Navigate from the homepage to the employee list

    Select view on an employee

    Expect the name on the view employee page to match the name from the link you've clicked
    */
    it('View employee should display appropriate first and last name', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        try {
            await driver.get(process.env.UI_TEST_URL);

            await driver.findElement(webdriver.By.id('view-employees-button')).click();

            let timeoutDurationMs = 5 * 1000;
            await driver.wait(webdriver.until.elementLocated(webdriver.By.className('govuk-table')), timeoutDurationMs)

            let rows = await driver.findElements(webdriver.By.className('govuk-table__cell'));
            let firstName = await rows[0].getText();
            let lastName = await rows[1].getText();

            await driver.findElement(webdriver.By.id('view_employee_0')).click();

            // Timeout until page loads?

            let rowsView = await driver.findElements(webdriver.By.className('govuk-table__cell'));
            let firstNameView = await rowsView[0].getText();
            let lastNameView = await rowsView[1].getText();

            chai.assert.equal(firstNameView, firstName);
            chai.assert.equal(lastNameView, lastName);
        }
        finally {
            await driver.quit();
        }
    });

    /*
    UI Test Exercise 4

    Write an UI test for view employee workflow

    Navigate directly to the view employee page with an invalid ID

    Expect 'Employee does not exist' error to be displayed
    */
    it('View employee should display error with invalid ID', async () => {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        try {
            await driver.get(process.env.UI_TEST_URL + '/employees/12345678');

            // Grabbing the whole page source feels like a hack but it works!
            let html = await driver.getPageSource();
            chai.assert.isTrue(html.includes('Employee does not exist'));
        }
        finally {
            await driver.quit();
        }
    });
  })