export type Project = {
    title: string;
    summary: string;
    tech: string[];
    status: 'Live' | 'In Development' | 'Conceptual Project';
    demoUrl: string;
    repoUrl: string;
    imageUrl: string;
    imageId: string;
    featured: boolean;
};
  
export const projects: Project[] = [
    {
        title: 'AI-Powered Career Toolkit',
        summary: 'A comprehensive toolkit for job seekers, featuring resume analysis, cover letter generation, and interview preparation powered by OpenAI.',
        tech: ['React', 'Django', 'OpenAI API', 'JWT', 'Docker', 'AWS'],
        status: 'In Development',
        demoUrl: '#',
        repoUrl: '#',
        imageUrl: '',
        imageId: 'project-career-toolkit',
        featured: true,
    },
    {
        title: 'ENSA Khouribga University Website',
        summary: 'Official website for the National School of Applied Sciences of Khouribga, built with a modern stack and a headless CMS for easy content management.',
        tech: ['Next.js', 'Tailwind CSS', 'CMS'],
        status: 'Live',
        demoUrl: '#',
        repoUrl: '#',
        imageUrl: '',
        imageId: 'project-university-website',
        featured: true,
    },
    {
        title: 'Distributed Real-Time Voting System',
        summary: 'A conceptual project demonstrating a scalable, fault-tolerant voting system using event-driven architecture with Kafka and real-time frontend updates.',
        tech: ['Java', 'Kafka', 'React', 'Docker'],
        status: 'Conceptual Project',
        demoUrl: '#',
        repoUrl: '#',
        imageUrl: '',
        imageId: 'project-voting-system',
        featured: true,
    },
];
