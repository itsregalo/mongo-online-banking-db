// Function to create graph nodes for customers and accounts
function createGraphNode(nodeType, nodeData) {
    const node = {
        "type": nodeType,
        "data": nodeData
    };
    const result = db.graph.insertOne(node);
    return result.insertedId;
}

// Function to update graph nodes
function updateGraphNode(nodeId, updates) {
    db.graph.updateOne({ "_id": nodeId }, { "$set": updates });
}

// Function to delete graph nodes
function deleteGraphNode(nodeId) {
    db.graph.deleteOne({ "_id": nodeId });
}
