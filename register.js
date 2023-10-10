// Which method should you use to create a hash from a password?
// bcrypt.hash 

// Which method should you use to compare a password with a hash?
// bcrypt.compare

const bcrypt = require("bcrypt")
const userInput = process.argv[2]

hashPassword(userInput)

async function hashPassword(userInput){
    try {
         const saltRounds = 10
         const hashedPassword = await bcrypt.hash(userInput, saltRounds)
         console.log(hashedPassword) 
    } catch (error) {
         console.error("Error hashing string: ", error)
         throw error
    } 
 }