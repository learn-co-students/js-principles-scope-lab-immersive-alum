// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
};

function setBestCustomer() {
    bestCustomer = 'not bob';
    console.log("best", bestCustomer);
};

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    console.log("new best", bestCustomer);
};

const leastFavoriteCustomer = "initial";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "jen"
};
