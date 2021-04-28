const Task = require('../models/Task');
const ObjectId = require('mongoose').Types.ObjectId;
// const Usuario = require('../models/Usuario');


exports.getTasks = async ( req, res ) => {
    
    // const {  } = req.params;
    // console.log(req.body);
    
    return res.status(200).json({
        msg: 'as'
    });
}

exports.getTaskUser = async ( req, res ) => {
    const { userId } = req.params;
    if(!userId || !ObjectId.isValid(userId)){
        return res.status(402).json({
            message: 'No userId params'
        });
    }

    const tasksForUser = await Task.find({
        assignedTo: userId
    });
    if(!tasksForUser || tasksForUser.length === 0 || tasksForUser.length < 1){
        return res.status(201).json({
            message: 'No results',
            results: tasksForUser
        });
    }

    return res.status(200).json({
        message: 'Found',
        code: 1,
        results: tasksForUser
    });
    
} 


exports.postNewTask = async ( req, res ) => {

    const { title, description, date, assignedTo, assignedFrom, priority, color }
        = req.body;

    if(!title || !description || !date || !assignedTo || !assignedFrom
        ||!priority
    ){
        return res.status(402).json({
            message: 'No valid arguments.'
        });
    }

    if(!ObjectId.isValid(assignedFrom) || !ObjectId.isValid(assignedTo)){
        return res.status(402).json({
            message: 'Error, no valid assigns ( no valid ids) '
        });
    }
    const format = {
        title,
        description,
        start:date,
        assignedTo,
        assignedFrom,
        priority,
        color
    }
    const newTask = new Task(format);
    await newTask.save();
    res.status(200).json({
        message: 'Task created!',
        newTask: newTask,
        task: format
    })

}