// Import required modules and functions
const { createAccount, updateAccount, closeAccount } = require('./account_management');
const { performTransaction, transferFunds } = require('./transaction_processing');
const { viewAccountHistory, generateAccountReport } = require('./account_history');
const { createGraphNode, updateGraphNode, deleteGraphNode } = require('./graph_representation');

// To create a new account for a customer
const johnDoe = db.customers.findOne({ "name": "John Doe" });
createAccount(johnDoe._id, "Savings", 500);

// To update account details
const janeAccount = db.customers.findOne({ "name": "Jane Doe" }).accounts[0];
updateAccount(janeAccount._id, { "balance": 1500 });

// To close an account
const johnAccountClose = db.customers.findOne({ "name": "John Smith" }).accounts[0];
closeAccount(johnAccountClose._id);

// To perform a transaction
const johnAccount = db.customers.findOne({ "name": "John Doe" }).accounts[0];
performTransaction(johnAccount._id, "Withdrawal", 100);

// To transfer funds between accounts
const janeAccount1 = db.customers.findOne({ "name": "Jane Doe" }).accounts[0];
const janeAccount2 = db.customers.findOne({ "name": "Jane Doe" }).accounts[1];
transferFunds(janeAccount1._id, janeAccount2._id, 100);

// To view account history
const johnAccountHistory = db.customers.findOne({ "name": "John Doe" }).accounts[0];
viewAccountHistory(johnAccountHistory._id);

// To generate an account report
const janeAccountReport = db.customers.findOne({ "name": "Jane Doe" }).accounts[0];
generateAccountReport(janeAccountReport._id);

// To create a graph node
const johnDoeNode = createGraphNode("customer", johnDoe);
const janeDoeNode = createGraphNode("customer", db.customers.findOne({ "name": "Jane Doe" }));
const johnSmithNode = createGraphNode("customer", db.customers.findOne({ "name": "John Smith" }));
const johnAccountNode = createGraphNode("account", johnAccount);
const janeAccountNode = createGraphNode("account", janeAccount);
const janeAccount2Node = createGraphNode("account", janeAccount2);

// To update a graph node
updateGraphNode(johnDoeNode, { "data": db.customers.findOne({ "name": "John Doe" }) });

// To delete a graph node
deleteGraphNode(johnDoeNode);

// To create a graph edge
createGraphEdge(johnDoeNode, johnAccountNode, "owns");

// To update a graph edge
updateGraphEdge(johnDoeNode, johnAccountNode, "owns", { "data": "owns" });

// To delete a graph edge
deleteGraphEdge(johnDoeNode, johnAccountNode, "owns");

// To find a graph node
findGraphNode(johnDoeNode);

// To find a graph edge
findGraphEdge(johnDoeNode, johnAccountNode, "owns");

// To find all graph nodes
findAllGraphNodes();