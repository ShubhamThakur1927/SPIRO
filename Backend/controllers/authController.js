import usersModel from "../model/usersModel";

export const registerController = async (req,res) => {
    try{
        const   {email, password} = req.body;

        if(!email || !password){
            return res.status(400).send({
                success: false,
                message: "Please enter all fields"
            })
        }

        const user = await usersModel.findOne({
            email
        });

        if(user){
            return res.status(200).send({
                success: false,
                message: "User already exists"
            })
        }


        const hashedPassword = await hashPassword(password);

        const useradd = new usersModel({
            email,
            password: hashedPassword
        }).save();


        res.status(201).send({
            success: true,
            message: "User created successfully",
        })



    }catch(error){
        console.log(`Error: ${error.message}`);
        res.status(500).send({
            sucess: false,
            message: "Error in resgistering user",
            error
        })
    }
};
