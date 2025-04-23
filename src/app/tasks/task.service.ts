import { Injectable } from "@angular/core";
import { NewTask, Task } from "./task/task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks = [
    {
        id: 't1',
        userId: 'u1',
        title: "Master Angulasr",
        summary: "Learn all the basic and advanced features of Angular & how to apply them.",
        dueDate: '2025-12-31'
    },
    {
        id: 't2',
        userId: 'u3',
        title: "Build first prototype",
        summary: "Build first prototype of the online shop website.",
        dueDate: '2024-05-31'
    },
    {
        id: 't3',
        userId: 'u3',
        title: "Prepare issue template",
        summary: "Prepare and describe an issue template which will help with project management",
        dueDate: '2024-06-15'
    }
    ];

    getUserTasks(userId:string) {
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTask(task: NewTask, userId:string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.date
        })
        this.saveTasks()
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.saveTasks()
    }

    constructor() {
        const tasks = localStorage.getItem('tasks')
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    private saveTasks() {
        localStorage.setItem('tasks',  JSON.stringify(this.tasks));
    }

}