var taskList = [
    {id:1, name:"cours js", duree:5},
    {id:2, name:"cours spring", duree:2},
    {id:3, name:"cours express", duree:7}
]

var maxId = 3

const getTasks = (req, res) =>{
    res.json(taskList)
}

const getTask = (req, res) =>{
    const id = Number(req.params.id)
    const task = taskList.find(task => task.id === id)
    
    if (!task){
        return res.status(404).send("Task not found !")
    }
    res.json(task)

}

const createTask = (req, res) =>{
    maxId += 1
    const task = {
        id: maxId,
        name: req.body.name,
        duree: req.body.duree
    }
    taskList.push(task)
    console.log(JSON.stringify(task))

    res.status(201).json(task)
}

const updateTask = (req, res) =>{
    const id = Number(req.params.id)
    const index = taskList.findIndex(task => task.id === id)
    const updateTask = {
        id : id,
        name : req.body.name,
        duree : req.body.duree
    }

    taskList[index] = updateTask
    
    res.send('Task updated')
}

const deleteTask = (req, res) =>{
    const id = Number(req.params.id)
    const index = taskList.findIndex(task => task.id === id)
    taskList.splice(index, 1)
    res.send('Task deleted')
}


module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}