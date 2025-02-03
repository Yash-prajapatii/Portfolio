import React from 'react';

const Portfolio = () => {
  // Color Palette with Rich Background
  const colors = {
    background: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-gray-800',
    headerGradient: 'bg-gradient-to-r from-blue-800 to-purple-800',
    sectionBackground: 'bg-gradient-to-tr from-gray-800 via-slate-800 to-gray-900',
    text: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      highlight: 'text-blue-300'
    },
    skillTags: {
      programmingLanguages: 'bg-gradient-to-r from-blue-700 to-blue-900',
      frontend: 'bg-gradient-to-r from-green-700 to-green-900',
      backend: 'bg-gradient-to-r from-purple-700 to-purple-900',
      databases: 'bg-gradient-to-r from-red-700 to-red-900'
    }
  };

  // Restored contact and other information
  const contactInfo = {
    name: "Yash Prajapati",
    email: "yashkprajapati1414@gmail.com",
    phone: "+91 7010753727",
    location: "Chennai, India"
  };

  const skills = {
    programmingLanguages: ['Python', 'C++', 'JavaScript', 'Java', 'TypeScript'],
    frontend: ['React.js', 'Redux', 'TypeScript'],
    backend: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI'],
    databases: ['PostgreSQL', 'MySQL', 'Redis']
  };

  const projects = [
    {
      title: "Scalable ECommerce Platform",
      description: "High-performance e-commerce backend with advanced security and payment integrations.",
      technologies: ["Spring Boot", "PostgreSQL", "AWS", "Kubernetes", "JWT", "OAuth2"],
      highlights: [
        "Implemented JWT authentication and OAuth2",
        "Integrated Stripe/Razorpay payment gateways",
        "Deployed on AWS with Kubernetes for scalability"
      ]
    },
    {
      title: "Hospital Management System",
      description: "Microservices-based hospital portal for seamless patient-doctor interactions.",
      technologies: ["Spring Boot", "Microservices", "Redis", "JWT"],
      highlights: [
        "Optimized SQL query performance",
        "Implemented role-based access control",
        "Secured patient data with JWT authentication"
      ]
    }
  ];

  const achievements = [
    {
      title: "GRAVITON 2.0 Hackathon - Top 5",
      description: "Developed Degree Verification System using Quantum Blockchain"
    },
    {
      title: "Google Cybersecurity Certification",
      description: "Advanced security frameworks and risk management"
    },
    {
      title: "Google GenAI Certification",
      description: "Practical exposure to AI model deployment"
    }
  ];

  const education = {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Sathyabama Institute of Science and Technology",
    cgpa: "7.87/10",
    duration: "2021 - 2025"
  };

  return (
    <div className={`max-w-4xl mx-auto p-8 ${colors.background} ${colors.text.primary} overflow-hidden`}>
      <header 
        className={`text-center mb-12 rounded-xl p-6 ${colors.headerGradient} ${colors.text.primary} shadow-2xl transform transition-all duration-700 ease-in-out hover:scale-105`}
        style={{
          animation: 'fadeIn 1s ease-out',
          animationFillMode: 'backwards'
        }}
      >
        <h1 className={`text-4xl font-bold mb-4 ${colors.text.highlight} transform transition-transform duration-300 hover:text-yellow-300`}>
          {contactInfo.name}
        </h1>
        <div className="flex justify-center space-x-4 mt-4">
          {[
            { icon: '📧', text: contactInfo.email, href: `mailto:${contactInfo.email}` },
            { icon: '🔗', text: 'LinkedIn', href: 'https://linkedin.com/in/yashprajapati' },
            { icon: '💻', text: 'GitHub', href: 'https://github.com/yashprajapati' }
          ].map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center ${colors.text.primary} transform transition-all duration-300 hover:scale-110 hover:text-yellow-300`}
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.2}s`,
                animationFillMode: 'backwards'
              }}
            >
              <span className="mr-2">{link.icon}</span> {link.text}
            </a>
          ))}
        </div>
      </header>

      <section 
        className="mb-12"
        style={{
          animation: 'fadeInUp 0.8s ease-out 0.2s',
          animationFillMode: 'backwards'
        }}
      >
        <h2 className={`text-2xl font-semibold border-b-2 border-blue-700 pb-2 mb-6 flex items-center ${colors.text.highlight}`}>
          <span className="mr-3">💻</span> Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category} 
              className={`${colors.sectionBackground} p-4 rounded-lg shadow-xl transform transition-all duration-300 hover:shadow-2xl`}
            >
              <h3 className={`font-semibold mb-2 capitalize ${colors.text.secondary}`}>
                {category.replace(/([A-Z])/g, ' $1')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => (
                  <span 
                    key={skill} 
                    className={`text-white px-2 py-1 rounded text-sm transform transition-transform duration-300 hover:scale-105 ${colors.skillTags[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        className="mb-12"
        style={{
          animation: 'fadeInUp 0.8s ease-out 0.4s',
          animationFillMode: 'backwards'
        }}
      >
        <h2 className={`text-2xl font-semibold border-b-2 border-blue-700 pb-2 mb-6 flex items-center ${colors.text.highlight}`}>
          <span className="mr-3">💼</span> Professional Projects
        </h2>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`${colors.sectionBackground} p-6 rounded-lg shadow mb-6 transform transition-all duration-300 hover:shadow-xl`}
          >
            <h3 className={`text-xl font-semibold mb-3 ${colors.text.highlight}`}>{project.title}</h3>
            <p className={`${colors.text.secondary} mb-4`}>{project.description}</p>
            <div className="mb-4">
              <h4 className={`font-medium mb-2 ${colors.text.secondary}`}>Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-blue-800 text-white px-2 py-1 rounded text-sm transform transition-transform duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`font-medium mb-2 ${colors.text.secondary}`}>Key Highlights</h4>
              <ul className={`list-disc list-inside ${colors.text.secondary}`}>
                {project.highlights.map((highlight, idx) => (
                  <li 
                    key={idx}
                    className="transform transition-transform duration-300 hover:translate-x-2 hover:text-blue-300"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section 
        className="mb-12"
        style={{
          animation: 'fadeInUp 0.8s ease-out 0.6s',
          animationFillMode: 'backwards'
        }}
      >
        <h2 className={`text-2xl font-semibold border-b-2 border-blue-700 pb-2 mb-6 flex items-center ${colors.text.highlight}`}>
          <span className="mr-3">🏆</span> Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`${colors.sectionBackground} p-4 rounded-lg shadow flex items-start transform transition-all duration-300 hover:shadow-lg`}
            >
              <span className="mr-4 mt-1 text-yellow-500 text-2xl">🎖️</span>
              <div>
                <h3 className={`font-semibold ${colors.text.highlight}`}>{achievement.title}</h3>
                <p className={colors.text.secondary}>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        style={{
          animation: 'fadeInUp 0.8s ease-out 0.8s',
          animationFillMode: 'backwards'
        }}
      >
        <h2 className={`text-2xl font-semibold border-b-2 border-blue-700 pb-2 mb-6 flex items-center ${colors.text.highlight}`}>
          <span className="mr-3">🎓</span> Education
        </h2>
        <div className={`${colors.sectionBackground} p-6 rounded-lg shadow transform transition-all duration-300 hover:shadow-xl`}>
          <h3 className={`text-xl font-semibold ${colors.text.highlight}`}>{education.degree}</h3>
          <p className={`${colors.text.secondary} mb-2`}>{education.institution}</p>
          <div className={`flex justify-between ${colors.text.secondary}`}>
            <span>CGPA: {education.cgpa}</span>
            <span>{education.duration}</span>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
