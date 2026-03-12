import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Gym Tracker Mobile App",
      description: "Developed a cross-platform fitness tracking mobile app for logging workouts and monitoring progress. Built an AI chatbot fitness coach for real-time recommendations. Implemented dual data persistence with Firebase Firestore and local storage for offline support.",
      technologies: ["React Native (Expo)", "Firebase", "Google Sign-In", "Google AI APIs"],
      liveDemoLink: "https://expo.dev/accounts/ayanjyoti/projects/gym-tracker",
      repoLink: "https://github.com/Ayanjyoti2003/Gym-Tracker",
      images: ["/Dashboard.jpeg", "/Exercise Logging.jpeg", "/Analytics.jpeg"],
      apkLink: "/Gym-Tracker.v.1.0.apk"
    },
    {
      title: "E-Commerce Website",
      description: "Built a full-stack e-commerce application featuring secure user authentication, product filtering, cart management, and checkout workflow. Deployed on Vercel with SEO-friendly routing.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Firebase Auth", "Tailwind CSS"],
      liveDemoLink: "https://minishop1.vercel.app/",
      repoLink: "https://github.com/Ayanjyoti2003/FUTURE_FS_02",
      image: "/Minishop.png"
    },
    {
      title: "Employee Management System",
      description: "Developed an AI-powered attendance system using Python, OpenCV, and face recognition for real-time tracking. Implemented REST-based logging and reporting features via HR dashboards within a 24-hour hackathon.",
      technologies: ["Python", "OpenCV", "Face Recognition", "REST API"],
    }
  ];

  return (
    <section id="projects" className="section container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        Featured Projects
        <div style={{ height: '1px', flexGrow: 1, backgroundColor: 'var(--card-border)', maxWidth: '300px' }}></div>
      </h2>

      <div className="grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveDemoLink={project.liveDemoLink}
            repoLink={project.repoLink}
            image={project.image}
            images={project.images}
            apkLink={'apkLink' in project ? project.apkLink : undefined}
          />
        ))}
      </div>
    </section>
  );
}
