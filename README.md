# Security with bcrypt 🔒🔑

This assignment will allow you to play around with the `bcrypt` package by building a CLI application

## What you will be doing

You will be working with `bcrypt` using just the CLI (no server required!).

You will be expected to write your solution in 2 files;

1. `register.js` - will generate a password hash
2. `login.js` - will compare a password hash with the hash from the user

## Tasks

### Task 1 - getting bcrypt

1. Initialise `npm`

2. Install the [bcrypt](https://www.npmjs.com/package/bcrypt) npm package

### Task 2 - learning how to use bcrypt

Read the bcrypt [documentation](https://github.com/kelektiv/node.bcrypt.js/#usage)

Answer the following questions;

- Which method should you use to create a hash from a password?
- Which method should you use to compare a password with a hash?

### Task 3 - writing a hashing helper function (register.js)

1. Open the file `register.js`

2. Import `bcrypt`

3. Write a function which takes a **string** parameter, and the `bcrypt` hashing method to hash and **return** the result

   > Hint: For now, use `10` as the number of salt rounds

4. Run your function with the `userInput` variable as a parameter. This variable can be populated from your terminal, for example:

   ```bash
   node register.js kittens
   ```

5. Use `console.log()` to display the output of your function

### Task 4 - playing with salt

Play around with the salt rounds value. Use small and large numbers.

- How long does the program take to run?
- What would an ideal salt rounds number be?

### Task 5 - writing a compare helper function (login.js)

1. Open the file `login.js`

2. Import `bcrypt`

3. Write a function which receives two **string** parameters (password, and hash)

4. Use the `bcrypt` compare method to compare the `password` variable with the `hash`

5. If the password;

   - **matches**, display a message to the user stating that the passwords match
   - **does not match**, display a message to the user stating that the passwords do not match

### Task 6 - testing

Test your code.

1. Run `node register.js {password}` where `{password}` is the password you would like to register with. Make a note of the outputted hash.

2. Run `node login.js {password} {hash}` - where;

   - `{password}` is the password you wish to test against the hash
   - `{hash}` is the hash you received from running `register.js`

3. Try using different passwords, and logging in with the wrong password to see different results
