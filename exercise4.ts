interface TaskInterface{
    Tasks:string[];
    addTask(task:string):number;
    listAllTask():void;
    deleteTask(task:string):number;
}

class Task implements TaskInterface{
    constructor(){

    }
    Tasks: string[];

    addTask(task:string):number{
        this.Tasks.push(task);
        console.log('Task item '+task+' has been added to your list');
        return this.Tasks.length;
    }

    listAllTask(): void {
        for(let i=0; i<this.Tasks.length; i++)
        {
            console.log('Task '+Task[i]+' is on list');
        }
    }

    deleteTask(task: string): number {
        let index = this.Tasks.indexOf(task);
        if(index>-1)
        {
            this.Tasks.splice(index, 1);
            console.log('Task '+ task+ ' has been delected');
        }
        else
        {
            console.log('Task '+ task+ ' has not been delected');
        }
    
        return this.Tasks.length;
    }
}

let TaskInterface=new Task();
TaskInterface.addTask("school");
TaskInterface.addTask("somethign else");
TaskInterface.listAllTask();
TaskInterface.deleteTask("school");
TaskInterface.listAllTask();