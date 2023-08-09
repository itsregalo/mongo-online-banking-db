
// Create a Database called "online_banking" 
use("online_banking");

// Create a Collection called "customers"
db.createCollection("customers");

// Insert 3 documents into the "customers" collection
db.customers.insertMany([
    {
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "phone": "1234567890",
        "address": "123 Main St, Anytown, USA",
        "account": {
            "account_number": "1234567890",
            "balance": 1000,
            "transactions": [
                {
                    "date": "2021-01-01",
                    "description": "Initial Deposit",
                    "amount": 1000
                }
            ]
        }
    },
    {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "phone": "1234567890",
        "address": "123 Main St, Anytown, USA",
        "account": {
            "account_number": "1234567890",
            "balance": 1000,
            "transactions": [
                {
                    "date": "2021-01-01",
                    "description": "Initial Deposit",
                    "amount": 1000
                }
            ]
        }
    },
    {
        "name": "John Smith",
        "email": "johnsmith@gmail.com",
        "phone": "1234567890",
        "address": "123 Main St, Anytown, USA",
        "account": {
            "account_number": "1234567890",
            "balance": 1000,
            "transactions": [
                {
                    "date": "2021-01-01",
                    "description": "Initial Deposit",
                    "amount": 1000
                }
            ]
        }
    }
]);