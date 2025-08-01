# Prompts Used for GenAI Assignment – Headphone Store App

This markdown file lists all the GitHub Copilot prompts used during the development of the full-stack Headphone Store application (Spring Boot + Angular).

---

## 🔧 Backend (Spring Boot)

### ✅ Project Setup
- "Create a Spring Boot project with Maven using Java 17."
- "Add dependencies for Spring Web, Spring Data JPA, MySQL, Spring Security, JWT, and H2 database."

### ✅ Models and Entities
- "Create a JPA entity for Headphone with fields like id, name, brand, price, description, and stock."
- "Create a User entity with roles for customer and admin."

### ✅ Repository Layer
- "Create a JPA repository interface for Headphone."
- "Create a UserRepository for authentication."

### ✅ Service Layer
- "Write a service class to fetch all headphones and search by brand."
- "Add service to register a user and encode password using BCrypt."

### ✅ Controller Layer
- "Create a REST controller for listing, adding, and purchasing headphones."
- "Add controller for user registration and login."

### ✅ Security
- "Add Spring Security configuration with JWT authentication."
- "Add filters for JWT token validation and authorization."

### ✅ Database
- "Configure application.properties for MySQL and H2 support."

---

## 🎨 Frontend (Angular)

### ✅ Angular Setup
- "Initialize an Angular project named 'angular-app' using Angular CLI."
- "Add Bootstrap for styling."

### ✅ Component Generation
- "Generate Angular components for:
  - Home
  - ProductList
  - ProductDetails
  - Register
  - Login
  - Purchase"

### ✅ Routing and Navigation
- "Configure Angular routing for all generated components."
- "Add navigation bar with links to Login, Register, Product List, and Purchase."

### ✅ Forms and Auth
- "Create a reactive form for user registration with email, password, and confirm password fields."
- "Create a login form with basic validation and mock backend connection."

### ✅ HTTP Communication
- "Create an Angular service to fetch all headphone products from Spring Boot backend."
- "Use HTTPClient to send POST request on user registration form submission."

---

## ✅ UI Testing Prompt
- "Generate simple UI test cases using Jasmine and Karma for ProductList component."
- "Write tests to ensure navigation and buttons are visible."

---

## 🗂️ Miscellaneous
### ✅ GitHub and DevOps
- "Generate a README.md for the project."
- "Create a `.gitignore` file for Java + Angular project."
- "Generate a script to build and run both backend and frontend simultaneously."

---

### 🔚 Notes
All the above prompts were tested, refined, and completed using GitHub Copilot inside VS Code for faster and AI-assisted development.

