"use client";
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import noApplicantsImage from '@/assets/404.png'; // Path to your image

const GET_APPLICANTS = gql`
  query GetApplicants($jobId: ID!) {
    getApplications(jobId: $jobId) {
      id
      name
      qualification
      email
      phoneNumber
      resume
      status
    }
    applicantsCount(jobId: $jobId)
  }
`;

function Applicants() {
  const { jobId } = useParams();
  const { loading, error, data } = useQuery(GET_APPLICANTS, {
    variables: { jobId },
  });

  const [hoveredApplicant, setHoveredApplicant] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Applicants for Job ID: {jobId}</h1>
      <h2 className="text-lg mb-4">Total Applicants: {data.applicantsCount}</h2>
      {data.getApplications.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={noApplicantsImage} alt="No applicants" className="w-64 h-64 mb-4" />
          <p className="text-lg">No applicants have applied for this job yet.</p>
        </div>
      ) : (
        <table className="min-w-full bg-gray-800 border border-gray-700">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-700">Name</th>
              <th className="py-2 px-4 border-b border-gray-700">Email</th>
              <th className="py-2 px-4 border-b border-gray-700">Qualification</th>
              <th className="py-2 px-4 border-b border-gray-700">Phone Number</th>
              <th className="py-2 px-4 border-b border-gray-700">Status</th>
              <th className="py-2 px-4 border-b border-gray-700">Resume</th>
            </tr>
          </thead>
          <tbody>
            {data.getApplications.map((app) => (
              <tr
                key={app.id}
                className="hover:bg-gray-700"
                onMouseEnter={() => setHoveredApplicant(app.id)}
                onMouseLeave={() => setHoveredApplicant(null)}
              >
                <td className="py-2 px-4 border-b border-gray-700">{app.name}</td>
                <td className="py-2 px-4 border-b border-gray-700">{app.email}</td>
                <td className="py-2 px-4 border-b border-gray-700">{app.qualification}</td>
                <td className="py-2 px-4 border-b border-gray-700">{app.phoneNumber}</td>
                <td className="py-2 px-4 border-b border-gray-700">{app.status}</td>
                <td className="py-2 px-4 border-b border-gray-700">
                  <a href={app.resume} target="_blank" rel="noopener noreferrer" className="text-blue-400">View Resume</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Applicants; 