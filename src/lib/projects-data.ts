
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
        title: 'AI-Powered Career Toolkit',
        summary: 'A comprehensive toolkit for job seekers, featuring resume analysis, cover letter generation, and interview preparation powered by OpenAI.',
        tech: ['React', 'Django', 'OpenAI API', 'JWT', 'Docker', 'AWS'],
        status: 'In Development',
        demoUrl: '#',
        repoUrl: '#',
        imageId: 'project-career-toolkit',
        featured: true,
        category: 'AI/ML',
        year: 2024,
        client: 'Freelance Project',
        duration: '3 months',
    },
    {
        title: 'ENSA Khouribga University Website',
        summary: 'Official website for the National School of Applied Sciences of Khouribga, built with a modern stack and a headless CMS for easy content management.',
        tech: ['Next.js', 'Tailwind CSS', 'CMS'],
        status: 'Live',
        demoUrl: '#',
        repoUrl: '#',
        imageId: 'project-university-website',
        featured: true,
        category: 'Full-Stack',
        year: 2024,
        client: 'ENSA Khouribga University',
        duration: '2 months',
    },
    {
        title: 'Distributed Real-Time Voting System',
        summary: 'A conceptual project demonstrating a scalable, fault-tolerant voting system using event-driven architecture with Kafka and real-time frontend updates.',
        tech: ['Java', 'Kafka', 'React', 'Docker'],
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
        title: 'BERT Training Using PDF Documents',
        summary: 'Fine-tuned a BERT model on a custom corpus of PDF documents for specialized domain-specific language understanding.',
        tech: ['Python', 'PyTorch', 'Hugging Face', 'BERT', 'Data Modeling'],
        status: 'Completed',
        repoUrl: '#',
        imageId: 'project-bert-training',
        featured: false,
        category: 'AI/ML',
        year: 2025,
        client: 'Freelance Project',
        duration: '6 weeks',
    },
    {
        title: 'YouTube Transcription Web App',
        summary: 'A Python-based web application that uses NLP to transcribe YouTube videos, providing users with downloadable and searchable transcripts.',
        tech: ['Python', 'Flask', 'React', 'NLP', 'YouTube API'],
        status: 'Completed',
        demoUrl: '#',
        repoUrl: '#',
        imageId: 'project-youtube-transcription',
        featured: false,
        category: 'AI/ML',
        year: 2025,
        client: 'Freelance Project',
        duration: '1 month',
    },
    {
        title: 'Web Scraping for Schneider Electric',
        summary: 'Developed a robust web scraping solution to gather product data and competitive intelligence for Schneider Electric.',
        tech: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
        status: 'Completed',
        repoUrl: '#',
        imageId: 'project-web-scraping',
        featured: false,
        category: 'Full-Stack',
        year: 2025,
        client: 'Freelance Project',
        duration: '3 weeks',
    },
];
