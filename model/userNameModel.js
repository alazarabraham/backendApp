const db = require('./conn')

class User {
    constructor(id, firstName,lastName, username, bio, email, phoneNumber, gender){
        this.id = id;
        this.firstName = firstName;
        this.lastName =lastName;
        this.username = username;
        this.bio = bio;
        this.email = email;
        this.phoneNumber = phoneNumber;
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
    static async addUser(id,firstName,lastName, username, bio, email, phoneNumber, gender){
        const query = `INSERT INTO usertable ( id,firstName,lastName, username, bio, email, phoneNumber, gender) VALUES (${id},$2, $3, $4,$5, $6,${phoneNumber}, $8);`;

        try{
            const response=await db.result(query, [id,firstName,lastName, username, bio, email, phoneNumber, gender])
            return response
        }
        catch(error){
            return error.message
        }
    }
}
module.exports = User;