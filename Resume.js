import React from 'react';

const Resume = () => {
  const skills = ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Git', 'Node.js'];
  const experience = [
    {
      role: 'Frontend Developer Intern',
      company: 'Tech Startup',
      period: 'Jan 2025 – Jun 2025',
      details: 'Built responsive UI components using React and Tailwind CSS.',
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2024 – Present',
      details: 'Created portfolio websites and small business landing pages.',
    },
  ];
  const education = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'XYZ University',
      period: '2021 – 2024',
    },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Resume</h1>

      {/* Button Group */}
      <div className="mb-6 flex flex-wrap gap-4">
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          📄 Download PDF
        </a>
        <button
          onClick={() => window.print()}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
        >
          🖨️ Print Resume
        </button>
      </div>

      {/* Skills Section */}
      <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{job.role} – {job.company}</h3>
            <p className="text-sm text-gray-600">{job.period}</p>
            <p className="text-gray-700">{job.details}</p>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{edu.degree}</h3>
            <p className="text-sm text-gray-600">{edu.institution}</p>
            <p className="text-gray-700">{edu.period}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;