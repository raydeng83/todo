"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('../models/task');
var common_1 = require('@angular/common');
var Home = (function () {
    function Home() {
        this.tasks = [];
        this.validTask = true;
        this.borderInvisible = true;
        this.task = new task_1.Task();
        var task1 = new task_1.Task();
        var task2 = new task_1.Task();
        task1.name = "Go to gym";
        task1.description = "I need to workout 3 times a day to lose some pounds";
        task1.done = false;
        task2.name = "Read books";
        task2.description = "One week one book";
        task2.done = false;
        this.tasks.push(task1);
        this.tasks.push(task2);
    }
    Home.prototype.onAdd = function () {
        if (this.task.name != null && this.task.description != null) {
            this.validTask = true;
            this.addTask();
        }
        else {
            this.validTask = false;
        }
    };
    Home.prototype.addTask = function () {
        this.tasks.push(this.task);
        this.task = new task_1.Task();
    };
    Home.prototype.onDelete = function (task) {
        this.tasks.splice(this.tasks.indexOf(task));
    };
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [common_1.NgClass],
            templateUrl: 'app/components/home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.component.js.map