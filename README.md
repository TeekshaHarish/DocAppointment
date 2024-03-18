# DocAppointment

DocAppointment is a MERN stack application designed to streamline the process of connecting patients with healthcare providers. It offers a user-friendly interface for patients to find and book appointments with doctors efficiently. The application includes an admin dashboard for managing users, doctors, and appointment bookings. With search filters based on the specialty of doctors and a notification feature, DocAppointment aims to enhance user engagement and facilitate seamless communication between patients and healthcare providers.

## Stack

- MongoDB: A NoSQL database used for storing user, doctor, and appointment data.
- Express.js: A web application framework for building RESTful APIs and handling server-side logic.
- React.js: A JavaScript library for building interactive user interfaces.
- Node.js: A JavaScript runtime environment used for server-side scripting.

## Features

- User Authentication: Secure user authentication and authorization.
- Doctor Search: Filter doctors by specialty to find the most suitable healthcare provider.
- Appointment Booking: Efficient appointment booking system for patients.
- Admin Dashboard: Admin dashboard for managing users, doctors, and appointments.
- Notification System: Notification feature to enhance user engagement.
- Admin Control: Full control for admin users, including user and doctor management, and approval of doctor applications.

## Contributors

- [Your Name](link to your GitHub profile)

## Setup Guidelines

To set up DocAppointment on your local machine, follow these steps:

1. **Clone this repository**: Begin by cloning the repository to your local machine using the following command:
    ```bash
    git clone https://github.com/TeekshaHarish/DocAppointment.git
    ```

2. **Setup the backend**: Navigate to the cloned repository and install the required dependencies by running the following command:
    ```bash
    cd DocAppointment
    npm install
    ```
- **Setup the backend environment variables**: Copy the environment variables to `.env` and change the values

    ```shell
    cp .env.example .env
    ```

    The following environment variables must be set:

    - `MONGO_URL` - The connection string for the MongoDB database

    - `JWT_SECRET` - The secret key for JWT authentication

    - `PORT` - The port on which the backend server (default: 8080)

    - `DEV_MODE` - The development mode 


        ```env
        MONGO_URL="your_mongodb_url"
        JWT_SECRET="your_secret_key_for_jwt"
        PORT="8080"
        DEV_MODE=development
        ```

3. **Setup the frontend**: Navigate to the frontend directory and install the required dependencies by running the following command:

    ```bash
    cd frontend
    npm install
    ```

- **Setup the frontend environment variables**: Copy the environment variables to `.env` and change the values

    ```shell
    cp .env.example .env
    ```

    The following environment variables must be set:

    - `VITE_BACKEND_API` - The backend server url ( default: http://localhost:8080 )


4. **Run the project**: Once you have installed the dependencies and added the required environment variables, you are ready to run the project. 

    To start both the frontend and backend servers simultaneously, run the following command:

    if you are in frontend folder go back to root folder
     ```bash
    cd .. 
    npm run dev
    ```
    or if you are in root folder
    ```bash
    npm run dev
    ```

    Visit [http://localhost:3000](http://localhost:3000) in your browser.

