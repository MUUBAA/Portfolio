
export type Project = {
    title: string;
    summary: string;
    tech: string[];
    status: 'Live' | 'In Development' | 'Conceptual Project' | 'Completed';
    demoUrl?: string;
    repoUrl?: string;
    detailsUrl?: string;
    imageId: string;
    featured: boolean;
    category: 'AI/ML' | 'Full-Stack' | 'Research' | 'Distributed Systems';
    year: number;
    client: string;
    duration: string;
};
  
export const projects: Project[] = [
    {
        title: 'HMS/Health Care App',
        summary: 'A comprehensive toolkit for job seekers, featuring resume analysis, cover letter generation, and interview preparation powered by OpenAI.',
        tech: ['React', '.Net', 'OpenAI API', 'JWT', 'Docker', 'Mysql'],
        status: 'Live',
        demoUrl: 'http://147.79.66.44:5014/',
        repoUrl: 'https://github.com/devbee-engineering/rimot-evac',
        imageId: 'project-career-toolkit',
        featured: true,
        category: 'AI/ML',
        year: 2024,
        client: 'Freelance Project',
        duration: '3 months',
    },
    {
        title: 'LCK University Website',
        summary: 'Official website for the National School of Applied Sciences of UK, built with a modern stack and a headless CMS for easy content management.',
        tech: ['Next.js', 'Tailwind CSS', 'CMS'],
        status: 'Live',
        demoUrl: 'https://lckacademy.org.uk/',
        repoUrl: '#',
        imageId: 'project-university-website',
        featured: true,
        category: 'Full-Stack',
        year: 2024,
        client: 'LCK University',
        duration: '2 months',
    },
    {
        title: 'Realtim-time Chat + Collaboration App',
        summary: 'real-time chat and collaboration platform featuring instant messaging, file sharing, and group channels. Integrated audio/video calling using WebRTC and WebSockets for seamless real-time communication across users and teams.',
        tech: ['.Net', 'Kafka', 'React', 'Docker'],
        status: 'Conceptual Project',
        demoUrl: '#',
        repoUrl: '#',
        imageId: 'project-voting-system',
        featured: true,
        category: 'Distributed Systems',
        year: 2024,
        client: 'Freelance Project',
        duration: '4 months',
    },
    {
        title: 'Job Portal Carrer platform',
        summary: 'Job portal platform with role-based dashboards, secure authentication, AI-powered job matching, and cloud deployment for scalability.',
        tech: ['Nextjs', '.Net', 'TailwindCss', 'Sql', 'Data Modeling'],
        status: 'In Development',
        repoUrl: '#',
        imageId: 'project-bert-training',
        featured: false,
        category: 'AI/ML',
        year: 2025,
        client: 'Freelance Project',
        duration: '6 weeks',
    },
    {
        title: 'Crown LLC Building Construction Website',
        summary: '“A modern and user-friendly website for an architectural building construction company, designed to showcase projects, services, and company expertise. Focused on clean design, easy navigation, and professional presentation to attract clients and highlight the brand.”',
        tech: ['Nextjs', 'TailwindCss', 'Nodejs', 'Docker', 'RestAPI'],
        status: 'Live',
        demoUrl: 'https://crownpillars.ae/',
        repoUrl: '#',
        imageId: 'project-youtube-transcription',
        featured: false,
        category: 'AI/ML',
        year: 2025,
        client: 'Freelance Project',
        duration: '1 month',
    },
    {
        title: 'E-Commerce Website',
        summary: 'A responsive and user-friendly e-commerce website designed to showcase products, simplify shopping, and provide a seamless online buying experience. Focused on intuitive navigation, secure checkout, and a clean, modern design to enhance customer engagement.',
        tech: ['React', '.Net', 'Kafka', 'Sql', 'AWS'],
        status: 'In Development',
        repoUrl: '#',
        imageId: 'project-web-scraping',
        featured: false,
        category: 'Full-Stack',
        year: 2025,
        client: 'Freelance Project',
        duration: '3 weeks',
    },
];
