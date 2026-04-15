# Task Manager API

A simple full-stack task management application built with ASP.NET Core and PostgreSQL.

This project demonstrates clean architecture, RESTful API development, validation, error handling, and a basic frontend consuming the API.

---

## Features

- Create tasks
- List tasks
- Update tasks
- Delete tasks
- Mark tasks as completed
- Input validation using FluentValidation
- Global exception handling middleware
- PostgreSQL database integration
- Simple frontend interface

---

## Technologies Used

Backend:

- ASP.NET Core (.NET 8 / .NET 10)
- Entity Framework Core
- PostgreSQL
- FluentValidation
- REST API
- Middleware

Frontend:

- HTML
- CSS
- JavaScript (Fetch API)

Tools:

- Visual Studio
- DBeaver
- Git
- GitHub

---

## Project Structure

TaskManager.API

Controllers  
DTOs  
Models  
Validators  
Middleware  
Data  
wwwroot  

---

## API Endpoints

GET /api/tasks  
Returns all tasks

POST /api/tasks  
Creates a new task

PUT /api/tasks/{id}  
Updates a task

DELETE /api/tasks/{id}  
Deletes a task

---

## How to Run the Project

1) Clone the repository

git clone https://github.com/your-username/task-manager-api

2) Open the solution in Visual Studio

3) Configure the database connection in:

appsettings.json

4) Run migrations

Update-Database

5) Run the project

The application will start and the frontend will be available at:

https://localhost:{port}/index.html

---

## Screenshots

### Task Manager Interface

![Task Manager UI](screenshots/task-manager-ui.png)
---

## Future Improvements

- Authentication and authorization (JWT)
- Task categories
- Pagination
- Unit tests
- Docker support
- Deployment to cloud

---

## Author

João Pedro Oliveira Brasil

Back-End Developer

LinkedIn:
https://www.linkedin.com/in/joao-brasil/

GitHub:
https://github.com/JoaoPBrasil