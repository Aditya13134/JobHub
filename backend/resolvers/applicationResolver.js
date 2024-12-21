const Application = require('../models/Application');
const User = require('../models/User');
const Job = require('../models/Job');

const applicationResolver = {
  Query: {
    getApplications: async (_, { jobId }) => {
      const applications = await Application.find({ jobId }).populate('userId');
      console.log("Applications fetched:", applications);
      return applications;
    },
    applicantsCount: async (_, { jobId }) => {
      const count = await Application.countDocuments({ jobId });
      return count;
    },
    getApplicants: async (_, { jobId }) => {
      const applicants = await Application.find({ jobId }).populate('userId');
      console.log(applicants, "This is a sample ");
      return applicants;
    },
  },
  Mutation: {
    applyForJob: async (_, { jobId, name, qualification, email, phoneNumber, resume }, { user }) => {
      console.log("User object:", user);

      if (!user) throw new Error("Unauthorized");

      const userObject = await User.findById(user.id);

      const existingApplication = await Application.findOne({
        jobId,
        userId: user.id,
      });

      if (existingApplication) {
        throw new Error("You have already applied for this job.");
      }

      const job = await Job.findById(jobId);
      if (!job) {
        throw new Error("Job not found.");
      }

      if (!name) {
        throw new Error("Name is required.");
      }

      const newApplication = new Application({
        jobId,
        userId: user.id,
        status: "Applied",
        name,
        qualification,
        email,
        phoneNumber,
        resume,
      });

      const savedApplication = await newApplication.save();
      return {
        id: savedApplication._id.toString(),
        job: {
          id: job._id.toString(),
          title: job.title,
          company: job.company,
          location: job.location,
          salary: job.salary,
          description: job.description,
        },
        user: {
          id: user.id,
          username: userObject.username,
          email: userObject.email,
          role: userObject.role,
        },
        status: savedApplication.status,
        name: savedApplication.name,
        qualification: savedApplication.qualification,
        phoneNumber: savedApplication.phoneNumber,
        resume: savedApplication.resume,
      };
    },
  },
};

module.exports = applicationResolver;
  