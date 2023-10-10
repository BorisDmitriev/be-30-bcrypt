const bcrypt = require("bcrypt")

const [, , password, hash] = process.argv;

// console.log("Password: " + password)
// console.log("Hash: " + hash)

comparePassword(password, hash)

async function comparePassword(password, hash) {
    try {
        const match = await bcrypt.compare(password, hash)

        // console.log("Password: " + password)
        // console.log("Hash: " + hash)

        if (match) console.log("Alles gut")
        else console.log("Everything went wrong!")

    } catch (error) {
        console.error("Error comparing password: ", error)
        throw error
    }
}