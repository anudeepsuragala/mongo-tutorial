
const Employee=require('../models/Employee')

const createEmployee = asyc(req,res)=> {
    try{

    
    const {name,email,phone,city} = req.body


    const employee = new Employee({

        name,
        email,
        phone,
        city

    })

    await.employee.save()
    res.status(201).json(employee)
   } 
   catch (error){
        console.log("there is a error:", error)
        res.status(500).json({message:'server error'})
    }

}
 module.exports = {createEmployee}
