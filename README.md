# Astrologer CRM

A full-stack CRM application for managing customers, astrologers, and consultation appointments.

---

## Overview

Astrologer CRM is a customer relationship management system designed for astrology consultation businesses. It allows management of customers, astrologers, and appointments through a centralized dashboard.

The project is built using React, Node.js, Express.js, MongoDB Atlas, and Mongoose.

---

## Features

- Add and manage customers
- Add and manage astrologers
- Schedule consultation appointments
- View appointment details
- REST API architecture
- MongoDB Atlas integration
- React-based dashboard
- Modular backend structure

---

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## Project Structure

```text
AstrologerCRM
│
├── backend
│   ├── models
│   │   ├── Customer.js
│   │   ├── Astrologer.js
│   │   └── Appointment.js
│   │
│   ├── routes
│   │   ├── customerRoutes.js
│   │   ├── astrologerRoutes.js
│   │   └── appointmentRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── README.md
└── AI_USAGE.md
```

---

## API Endpoints

### Customers

| Method | Endpoint |
|----------|----------|
| GET | /customers |
| POST | /customers |

### Astrologers

| Method | Endpoint |
|----------|----------|
| GET | /astrologers |
| POST | /astrologers |

### Appointments

| Method | Endpoint |
|----------|----------|
| GET | /appointments |
| POST | /appointments |

---

## Installation & Setup

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Sample Data

### Customer

```json
{
  "name": "Namita",
  "email": "namita@gmail.com",
  "phone": "9876543210"
}
```

### Astrologer

```json
{
  "name": "Rahul Sharma",
  "specialization": "Vedic Astrology",
  "experience": 8,
  "fees": 1500
}
```

### Appointment

```json
{
  "customerId": "customer_id",
  "astrologerId": "astrologer_id",
  "date": "2026-06-15",
  "time": "10:00 AM",
  "status": "Scheduled"
}
```

---

## Future Improvements

- Authentication & Authorization
- Appointment Status Management
- Search & Filtering
- Analytics Dashboard
- Responsive Mobile Design

---

## Author

**Namita Gupta**

Computer Science Engineering Student