# Practical exercices 

## 1️⃣ CRUD + Validation + Architecture    
 
### 🧩 Exercise: Task Management API

Build a small REST API for managing tasks.   


### Requirements 

- Create a `Task` module

- Task fields:  
    - `id` (number)
    - `title` (string, required, min length 3) 
    - `description` (string, optional)
    - `status` (`TODO | IN_PROGRESS | DONE`)
    - `createdAt` 
- Endpoints:
    - `POST /tasks`
    - `GET /tasks`
    - `GET /tasks/:id`
    - `PATCH /tasks/:id`
    - `DELETE /tasks/:id`

### Interview Expectations

- Use DTOs with `class-validator`
- Use Pipes for validation 
- Use enums correctly
- Separate controller/service logic
- Proper HTTP exceptions
- Clean folder structure

