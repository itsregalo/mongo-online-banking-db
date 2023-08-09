
// Function to create a new account for a customer
function createAccount(customerId, accountType, initialBalance) {
    const account = {
        "account_number": Math.floor(Math.random() * 10000000000), // Generate a random account number
        "type": accountType,
        "balance": initialBalance || 0,
        "transactions": []
    };
    db.accounts.insertOne(account);
    db.customers.updateOne({ "_id": customerId }, { "$push": { "accounts": account } });
}

// Example usage:
const johnDoe = db.customers.findOne({ "name": "John Doe" });
createAccount(johnDoe._id, "Savings", 500);

// Function to update account details
function updateAccount(accountId, updates) {
    db.accounts.updateOne({ "_id": accountId }, { "$set": updates });
}

// Example usage:
const janeAccount = db.customers.findOne({ "name": "Jane Doe" }).accounts[0];
updateAccount(janeAccount._id, { "balance": 1500 });

// Function to close an account
function closeAccount(accountId) {
    db.accounts.deleteOne({ "_id": accountId });
}

// Example usage:
const johnAccount = db.customers.findOne({ "name": "John Smith" }).accounts[0];
closeAccount(johnAccount._id);

