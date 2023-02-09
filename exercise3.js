var arr = [];
function addTask(task) {
    //adding task to array
    arr.push(task);
    //printing message to sow insretion 
    console.log("Array is now " + arr);
    //return array
    return task.length;
}
function allTask() {
    for (var i = 0; i < arr.length; i++) {
        console.log("Task " + arr[i] + " is on list");
    }
}
function deletTask(task) {
    var index = arr.indexOf(task);
    if (index > -1) {
        arr.splice(index, 1);
        console.log("Task " + task + " has been deleted");
    }
    else {
        console.log("Task " + task + " has not been delected");
    }
    return task.length;
}
addTask("Eat lunch");
addTask("Eat soup");
allTask();
deletTask("Eat soup");
