# Job Portal

This repository contains the code for a **Job Portal** application built with a modern tech stack. The platform supports role-based authentication and enables users to apply for jobs, employers to post jobs, and view applicants. Real-time notifications for job postings are implemented using GraphQL subscriptions, sending email alerts upon new postings.

---

## 🚀 Features

- **Role-Based Authentication**: Users are authenticated as `Job Seekers` or `Employers`.
- **Job Posting**: Employers can post new job opportunities.
- **Job Applications**: Job seekers can apply to listed jobs.
- **Applicant Management**: Employers can view applications for their postings.
- **Real-Time Notifications**: New job postings trigger email notifications via GraphQL subscriptions.
- **Responsive Design**: Built with **Tailwind CSS** and **shadcn** for a seamless and accessible UI.

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS, Tailwind CSS, shadcn
- **Backend**: Apollo Server, MongoDB, Aeternity
- **GraphQL**: Queries, Mutations, and Subscriptions for data handling
- **Real-Time Features**: Implemented via GraphQL Subscriptions
- **Authentication**: Role-based using secure tokens

---

## 🔧 Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
   ```

2. **Install Dependencies**:
   ```bash
   # Backend dependencies
   cd backend
   npm install

   # Frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Variables**:
   Create `.env` files in both the `backend` and `frontend` directories with the following keys:

   **Backend `.env`**:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/job-portal
   JWT_SECRET=your_jwt_secret
   EMAIL_SERVICE_API_KEY=your_email_service_key
   ```

   **Frontend `.env`**:
   ```env
   REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
   ```

4. **Run the Application**:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend development server
   cd ../frontend
   npm start
   ```

---

## 📄 GraphQL API Overview

### **Queries**
- `getJobs(location: String, salaryRange: Float)`: Fetch available jobs based on filters.
- `getApplicants(jobId: ID!)`: Fetch applicants for a specific job (Employer-only).

### **Mutations**
- `postJob(title: String!, company: String!, location: String!, salary: Float!, description: String!)`: Post a new job (Employer-only).
- `applyJob(jobId: ID!)`: Apply for a job (Job Seeker-only).

### **Subscriptions**
- `jobPosted`: Receive real-time notifications of new job postings.

---

## 📂 Folder Structure

```
job-portal/
├── backend/
│   ├── models/        # MongoDB models
│   ├── resolvers/     # GraphQL resolvers
│   ├── schema/        # GraphQL schema definitions
│   └── server.js      # Apollo server setup
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # React pages
│   │   ├── utils/       # Helper utilities
│   └── App.js         # Main React app
└── README.md
```

---

## 📧 Real-Time Notifications

- GraphQL Subscriptions are used for real-time job posting notifications.
- Email notifications are sent via a third-party email service using an API key.

---

## 🛡️ Role-Based Authentication

- **Job Seeker**:
  - Apply to jobs.
  - View job listings.
- **Employer**:
  - Post new job opportunities.
  - View applicants for posted jobs.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Create a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 💬 Contact

For any inquiries or feedback, reach out at [your.email@example.com](mailto:your.email@example.com).
