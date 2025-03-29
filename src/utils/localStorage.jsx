const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "title": "Update Website UI", "description": "Redesign homepage for better UX.", "date": "2025-03-29", "assignTo": "employee1@example.com", "category": "Frontend" },
      { "active": false, "newTask": false, "completed": true, "failed": false, "title": "Fix Login Bug", "description": "Resolve the issue preventing login.", "date": "2025-03-20", "assignTo": "employee1@example.com", "category": "Backend" },
      { "active": true, "newTask": false, "completed": false, "failed": false, "title": "Optimize Database Queries", "description": "Improve query efficiency in MySQL.", "date": "2025-04-01", "assignTo": "employee1@example.com", "category": "Database" },
      { "active": false, "newTask": false, "completed": false, "failed": true, "title": "Refactor Old Codebase", "description": "Improve readability of legacy code.", "date": "2025-03-28", "assignTo": "employee1@example.com", "category": "Backend" }
    ],
    "taskNumbers": { "newTasks": 1, "completedTasks": 1, "acceptedTasks": 1, "failedTasks": 1 }
  },
  {
    "id": 2,
    "firstName": "Rahul",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "title": "Create API Endpoints", "description": "Develop RESTful API for user management.", "date": "2025-03-30", "assignTo": "employee2@example.com", "category": "Backend" },
      { "active": false, "newTask": false, "completed": true, "failed": false, "title": "Implement JWT Authentication", "description": "Secure API endpoints with JWT.", "date": "2025-03-22", "assignTo": "employee2@example.com", "category": "Security" },
      { "active": true, "newTask": false, "completed": false, "failed": false, "title": "Add Dark Mode Feature", "description": "Enable dark mode support in UI.", "date": "2025-04-02", "assignTo": "employee2@example.com", "category": "Frontend" },
      { "active": false, "newTask": false, "completed": false, "failed": true, "title": "Optimize Database Indexing", "description": "Improve query efficiency.", "date": "2025-03-25", "assignTo": "employee2@example.com", "category": "Database" }
    ],
    "taskNumbers": { "newTasks": 1, "completedTasks": 1, "acceptedTasks": 1, "failedTasks": 1 }
  },
  {
    "id": 3,
    "firstName": "Vikram",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": false, "completed": false, "failed": false, "title": "Create Dashboard Charts", "description": "Implement data visualization for reports.", "date": "2025-03-31", "assignTo": "employee3@example.com", "category": "Frontend" },
      { "active": true, "newTask": true, "completed": false, "failed": false, "title": "Optimize CSS Performance", "description": "Minimize and optimize CSS files.", "date": "2025-04-01", "assignTo": "employee3@example.com", "category": "Frontend" },
      { "active": false, "newTask": false, "completed": true, "failed": false, "title": "Set Up DevOps Pipeline", "description": "Automate deployment using CI/CD.", "date": "2025-03-15", "assignTo": "employee3@example.com", "category": "DevOps" },
      { "active": false, "newTask": false, "completed": false, "failed": true, "title": "Implement Caching Strategy", "description": "Improve application performance.", "date": "2025-03-20", "assignTo": "employee3@example.com", "category": "Backend" }
    ],
    "taskNumbers": { "newTasks": 1, "completedTasks": 1, "acceptedTasks": 1, "failedTasks": 1 }
  },
  {
    "id": 4,
    "firstName": "Arjun",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": false, "completed": false, "failed": false, "title": "Enhance Search Functionality", "description": "Implement advanced filters in search.", "date": "2025-03-30", "assignTo": "employee4@example.com", "category": "Backend" },
      { "active": false, "newTask": false, "completed": true, "failed": false, "title": "Fix Payment Gateway Issue", "description": "Resolve checkout payment failures.", "date": "2025-03-25", "assignTo": "employee4@example.com", "category": "Backend" },
      { "active": true, "newTask": true, "completed": false, "failed": false, "title": "Improve Mobile Responsiveness", "description": "Ensure UI adapts to mobile devices.", "date": "2025-04-05", "assignTo": "employee4@example.com", "category": "Frontend" },
      { "active": false, "newTask": false, "completed": false, "failed": true, "title": "Upgrade Database Schema", "description": "Refactor table relationships.", "date": "2025-03-22", "assignTo": "employee4@example.com", "category": "Database" }
    ],
    "taskNumbers": { "newTasks": 1, "completedTasks": 1, "acceptedTasks": 1, "failedTasks": 1 }
  },
  {
    "id": 5,
    "firstName": "Rohan",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      { "active": true, "newTask": true, "completed": false, "failed": false, "title": "Implement Role-Based Access", "description": "Set user permissions based on roles.", "date": "2025-03-29", "assignTo": "employee5@example.com", "category": "Security" },
      { "active": true, "newTask": false, "completed": false, "failed": false, "title": "Create User Feedback System", "description": "Allow users to submit feedback and ratings.", "date": "2025-04-02", "assignTo": "employee5@example.com", "category": "Frontend" },
      { "active": false, "newTask": false, "completed": true, "failed": false, "title": "Setup Email Notification Service", "description": "Send automated emails for user actions.", "date": "2025-03-20", "assignTo": "employee5@example.com", "category": "Backend" },
      { "active": false, "newTask": false, "completed": false, "failed": true, "title": "Enhance Logging System", "description": "Improve error logging capabilities.", "date": "2025-03-18", "assignTo": "employee5@example.com", "category": "Backend" }
    ],
    "taskNumbers": { "newTasks": 1, "completedTasks": 1, "acceptedTasks": 1, "failedTasks": 1 }
  }
];



const admin = [
  {
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    // console.log(employees, admin);
    return {employees, admin}
}
