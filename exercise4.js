var Task = /** @class */ (function () {
    function Task() {
    }
    Task.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log('Task item ' + task + ' has been added to your list');
        return this.Tasks.length;
    };
    Task.prototype.listAllTask = function () {
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log('Task ' + Task[i] + ' is on list');
        }
    };
    Task.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log('Task ' + task + ' has been delected');
        }
        else {
            console.log('Task ' + task + ' has not been delected');
        }
        return this.Tasks.length;
    };
    return Task;
}());
var TaskInterface = new Task();
TaskInterface.addTask("school");
TaskInterface.addTask("somethign else");
TaskInterface.listAllTask();
TaskInterface.deleteTask("school");
TaskInterface.listAllTask();
