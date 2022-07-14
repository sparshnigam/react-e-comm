const mongoose = require('mongoose');

// connecting to mongodb database
async function main() {
    await mongoose.connect('mongodb://localhost:27017/e-comm');
}
main().catch(err => console.log(err));