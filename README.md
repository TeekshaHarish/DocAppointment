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

1. Clone the repository:
`git clone https://github.com/TeekshaHarish/DocAppointment.git`
2. Navigate to the project directory:
`cd DocAppointment`
3. Install dependencies for both the client and server:

`cd client`

`npm install`

`cd ../server`

`npm install`

5. Create a `.env` file in the `server` directory and configure the following environment variables:

PORT=3000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key_for_jwt

5. Run both the client and server:

`npm run dev` in the root directory


6. Access the application in your browser at `http://localhost:3000`.
