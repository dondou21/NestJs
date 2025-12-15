import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Bobo',
            username: 'Bobo',
            password: 'sosecure',
        },
        {
            id: 2,
            name: 'Joly',
            username: 'Joly',
            password: 'kyra',
        },
    ]

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
