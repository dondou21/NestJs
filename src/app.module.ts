import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';

@Module({
  controllers: [UserController],
  providers: [],
  imports: [TasksModule, UsersModule],
})
export class AppModule {}
