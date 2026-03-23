const crypto = require("crypto");

function generateHash(data, previousHash = "") {

    const hash = crypto
        .createHash("sha256")
        .update(
            JSON.stringify(data) +
            previousHash +
            Date.now()
        )
        .digest("hex");

    return hash;
}

module.exports = {
    generateHash
};