import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status';
import { CreateTaskDto } from './dto/create-tast.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

interface Task {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  create(CreateTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: this.idCounter++,
      title: CreateTaskDto.title,
      description: CreateTaskDto.description,
      status: CreateTaskDto.status,
      createdAt: new Date(),
    };

    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  udated(id: number, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);

    Object.assign(task, updateTaskDto);

    return task;
  }

  remove(id: number): void {
    const index = this.tasks.findIndex((task) => task,id === id);

    if (!index) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    this.tasks.splice(index, 1);
  }
}
