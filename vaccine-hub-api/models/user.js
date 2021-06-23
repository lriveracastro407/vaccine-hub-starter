const { UnauthorizedError } = require('../utils/error')

class User {
    static async login(credentials) {
        //user submits emails and password
        //if anything of those fields are missing throw an error
        //
        //lookup user in db by email
        //if user is found then compare the inputted password with the one in the database
        //if there is a match is return the user
        //
        //if anything of this goes wrong throw an error
        throw new UnauthorizedError("Invalid email/password combination")
    }
    static async register(credentials) {
        //user should submit their email
        //if any of these fields are missing, throw an error
        //
        //make sure no user already exists in the system with that email
        //if one does then throw an error
        //
        //take the users password and hash it 
        //take the users email and lowercase it 
        //
        //create a new entry in the data base
        //return the user 

    }
}

module.exports = User