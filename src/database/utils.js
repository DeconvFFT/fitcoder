// In src/database/utils.js
const fs = require('fs');

const saveToDB = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: 'utf8',
    });
};

module.exports = {saveToDB};