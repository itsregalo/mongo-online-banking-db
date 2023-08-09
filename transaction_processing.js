// Function to perform a deposit or withdrawal on an account
function performTransaction(accountId, amount, description) {
    const transaction = {
        "date": new Date().toISOString(),
        "description": description,
        "amount": amount
    };
    
    db.accounts.updateOne(
        { "_id": accountId },
        {
            "$push": { "transactions": transaction },
            "$inc": { "balance": amount }
        }
    );
}

// Example usage:
const johnAccountTrans = db.customers.findOne({ "name": "John Doe" }).accounts[0];
performTransaction(johnAccountTrans._id, 500, "Deposit");
performTransaction(johnAccountTrans._id, -200, "Withdrawal");

// Function to transfer funds between accounts
function transferFunds(fromAccountId, toAccountId, amount) {
    performTransaction(fromAccountId, -amount, "Transfer to " + toAccountId);
    performTransaction(toAccountId, amount, "Transfer from " + fromAccountId);
}

// Example usage:
const janeAccount = db.customers.findOne({ "name": "Jane Doe" }).accounts[0];
const johnAccount = db.customers.findOne({ "name": "John Smith" }).accounts[0];
transferFunds(janeAccount._id, johnAccount._id, 300);