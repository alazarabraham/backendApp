const db = require('./conn')

class Artist {
    constructor(id,name,bestsellingalbum,hometown,career){
        this.id = id;
        this.name =name;
        this.bestsellingalbum = bestsellingalbum;
        this.hometown = hometown;
        this.career = career;
    }
    static async getAll(){
        try{
            const response = db.any(`select * from artist`)
            return response
        }
        catch(error){
            return error.message1
        }

    }
    static async addArtist(id,name,bestsellingalbum,hometown,career){
        const query = `INSERT INTO artist ( id,name, bestsellingalbum, hometown, career) VALUES (${id}, '${name}', $3, $4,$5);`;

        try{
            const response=await db.result(query, [id,name,bestsellingalbum,hometown,career])
            return response
        }
        catch(error){
            return error.message
        }
    }
}
module.exports = Artist;