const db = require('./conn')

class Artist {
    constructor(firstName,lastName, username, bio, email, phoneNumber, gender){
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
            const response = db.any(`select * from userTable`)
            return response
        }
        catch(error){
            return error.message1
        }

    } 
    static async addUser(firstName,lastName, username, bio, email, phoneNumber, gender){
        const query = `INSERT INTO userTable ( firstname,lastname, username, bio, email, phonenumber, gender) VALUES (${id}, '${name}', $3, $4,$5);`;

        try{
            const response=await db.result(query, [firstName,lastName, username, bio, email, phoneNumber, gender])
            return response
        }
        catch(error){
            return error.message
        }
    }
}
module.exports = Artist;