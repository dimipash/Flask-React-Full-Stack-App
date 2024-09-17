# Flask-React Fullstack Contact Management App

This is a fullstack web application for managing contacts, built with Flask (backend) and React (frontend).

## Features

- View a list of contacts
- Create new contacts
- Edit existing contacts
- Delete contacts

## Tech Stack

- Backend: Flask, SQLAlchemy
- Frontend: React
- Database: SQLite (default, can be changed in configuration)

## Setup and Installation

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install flask flask-sqlalchemy flask-cors
   ```

4. Run the Flask application:
   ```
   python main.py
   ```

The backend server will start running on `http://127.0.0.1:5000`.

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the required npm packages:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm run dev
   ```

The frontend application will start running on `http://localhost:3000`.

## API Endpoints

- GET `/contacts`: Retrieve all contacts
- POST `/create_contact`: Create a new contact
- PATCH `/update_contact/<id>`: Update an existing contact
- DELETE `/delete_contact/<id>`: Delete a contact



