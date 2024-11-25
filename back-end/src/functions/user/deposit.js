const { initiateLogin } = require('./login');

async function initiateDeposit() {
    return await initiateLogin();;
}

module.exports = { initiateDeposit };