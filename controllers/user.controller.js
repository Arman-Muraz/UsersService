const  User = require("../models/users.model")

class UserController {
    static async getAll(req, res){
        const info = await User.find();
        return info;
    }

    static async getOne(req, res){
        const info = await User.findById(req.params.id);
        return info;
    }

    static async create(req, res){ 
        const info = await User.create(req.body);
        return info;
    }

    static async update(req, res){
            const info = await User.findByIdAndUpdate(req.params.id,req.body);
            return info;
    }

    static async remove(req, res){
        const info = await User.findByIdAndRemove(req.params.id);
        return info;
    }
}

module.exports = UserController