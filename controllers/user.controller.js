const  User = require("../models/users.model")

class UserController {
    static async getAll(req, res){
        console.log(req.query,"15");
        const info = await User.find();
        return info;
    }

    static async create(req, res){ 
        console.log(req.query,"2");
        if(req.query.pass1===req.query.pass2 && req.query.firstname && req.query.lastname && req.query.email){
            const info = await User.create(req.query);
            console.log(req.query)
            res.json(info)
        }
    }
    static async getOne(req, res){
        console.log(req.query,"3");
        const info = await User.findById(req.params.id);
        return info;
    }

 

    static async update(req, res){
        console.log(req.query,"4");
            const info = await User.findByIdAndUpdate(req.params.id,req.body);
            return info;
    }

    static async remove(req, res){
        console.log(req.query,"5");
        const info = await User.findByIdAndRemove(req.params.id);
        return info;
    }
}

module.exports = UserController