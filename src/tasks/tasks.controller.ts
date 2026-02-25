import { Controller, Get, Post, Body, Param } from '@nestjs/common';

let tasks: any[] = [];

@Controller('tasks')
export class TasksController {

  @Post()
  create(@Body() body: any) {
    if (!body.title || !body.description) {
      return { error: 'Title and description are required' };
    }

    const task = {
      id: Date.now(),
      title: body.title,
      description: body.description,
      status: 'PENDING',
    };

    tasks.push(task);
    return task;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const task = tasks.find(t => t.id === Number(id));
    if (!task) {
      return { error: 'Task not found' };
    }
    return task;
  }
}

Point out issues in this code and how can you fix them?