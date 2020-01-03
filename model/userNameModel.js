const db = require('./conn')

class User {
    constructor( firstname,lastname, username, bio, email, phonenumber, gender){
        this.firstname = firstname;
        this.lastname =lastname;
        this.username = username;
        this.bio = bio;
        this.email = email;
        this.phonenumber = phonenumber;
        this.gender = gender;
    }
    static async getAll(){
        try{
            const response = db.any(`select * from usertable`)
            return response
        }
        catch(error){
            return error.message1
        }

    } 
    static async addUser(firstname,lastname, username, bio, email, phonenumber, gender){
        const query = `INSERT INTO usertable ( firstname,lastname, username, bio, email, phonenumber, gender) VALUES (${firstName},$2, $3, $4,$5, $6,${phoneNumber}, $8);`;

        try{
            const response=await db.result(query, [firstname,lastname, username, bio, email, phonenumber, gender])
            return response
        }
        catch(error){
            return error.message
        }
    }
}
module.exports = User;