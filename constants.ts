import { SkillItem, ExperienceItem, ProjectItem, SocialLink } from './types';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/ritikbh193', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ritik-bhawsar-6a81751b7/', icon: Linkedin },
  { name: 'Email', url: 'mailto:ritikbhawsar22193@gmail.com', icon: Mail },
];

export const SKILLS: SkillItem[] = [
  // AI & ML
  { name: 'Generative AI', level: 95, category: 'AI/ML' },
  { name: 'LLMs', level: 90, category: 'AI/ML' },
  { name: 'NLP', level: 88, category: 'AI/ML' },
  { name: 'Deep Learning', level: 85, category: 'AI/ML' },
  { name: 'AI Agents', level: 92, category: 'AI/ML' },
  
  // Frameworks
  { name: 'PyTorch', level: 85, category: 'Frameworks' },
  { name: 'TensorFlow', level: 80, category: 'Frameworks' },
  { name: 'LangChain', level: 95, category: 'Frameworks' },
  { name: 'Hugging Face', level: 90, category: 'Frameworks' },
  { name: 'YOLO / OpenCV', level: 82, category: 'Frameworks' },

  // Backend & Tools
  { name: 'FastAPI', level: 90, category: 'Backend/Tools' },
  { name: 'Docker', level: 85, category: 'Backend/Tools' },
  { name: 'SQL / Vector DB', level: 88, category: 'Backend/Tools' },
  { name: 'Git', level: 90, category: 'Backend/Tools' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'nway',
    role: 'AI Software Developer',
    company: 'Nway Technologies',
    period: '2025 – Present',
    description: [
      'Developed an AI-powered Invoice Extractor using Gemini models for high-accuracy data parsing.',
      'Integrated ChromaDB for vector storage and semantic search capabilities.',
      'Built robust backend services using FastAPI to serve AI models in production.'
    ]
  },
  {
    id: 'visko',
    role: 'AI Developer',
    company: 'Visko Group',
    period: '2024 – Present',
    description: [
      'Engineered an AI Job & Candidate Finder with LLM-based SQL query generation.',
      'Implemented LangChain tools and AI autonomous agents for workflow automation.',
      'Created a PDF Q&A Chatbot leveraging Gemini, Mistral, and LLaMA models.',
      'Fine-tuned GPT-2, Mistral-7B, and Gemma-1B using LoRA/QLoRA techniques.',
      'Developed a dynamic AI Resume Builder and Interview Analyzer (Video/Audio).'
    ]
  },
  {
    id: 'octanet',
    role: 'Python Intern',
    company: 'OctaNet Services',
    period: '2024',
    description: [
      'Assisted in Python-based automation scripts and data processing pipelines.',
      'Gained hands-on experience with foundational ML libraries and backend logic.'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'invoice-extractor',
    title: 'AI Invoice Extractor',
    description: 'Automated invoice data extraction system using Gemini Pro Vision and FastAPI. capable of handling complex layouts.',
    tags: ['Gemini', 'FastAPI', 'OCR', 'Python'],
    category: 'GenAI',
    githubUrl: 'https://github.com/ritikbh193',
  },
  {
    id: 'job-recommender',
    title: 'Job Recommendation System',
    description: 'Smart matching engine for candidates and jobs using semantic search and LLM-generated SQL queries.',
    tags: ['LangChain', 'SQL', 'LLM', 'RAG'],
    category: 'Fullstack AI',
    githubUrl: 'https://github.com/ritikbh193',
  },
  {
    id: 'resume-builder',
    title: 'AI Resume Builder',
    description: 'Dynamic resume generation tool that uses AI to tailor content based on job descriptions.',
    tags: ['NLP', 'React', 'Python', 'GenAI'],
    category: 'GenAI',
    githubUrl: 'https://github.com/ritikbh193',
  },
  {
    id: 'pdf-chatbot',
    title: 'LLM PDF Chatbot',
    description: 'RAG-based conversational interface for querying large PDF documents using open-source models (Mistral/Llama).',
    tags: ['RAG', 'ChromaDB', 'Hugging Face', 'Streamlit'],
    category: 'NLP',
    githubUrl: 'https://github.com/ritikbh193',
  },
  {
    id: 'interview-analyzer',
    title: 'Interview Analyzer',
    description: 'Multimodal analysis system processing video and audio to evaluate candidate confidence and sentiment.',
    tags: ['OpenCV', 'Audio Processing', 'Emotion AI', 'Deep Learning'],
    category: 'CV',
    githubUrl: 'https://github.com/ritikbh193',
  },
  {
    id: 'yolo-detection',
    title: 'YOLO Object Detection',
    description: 'Real-time object detection pipeline deployed for surveillance and monitoring use cases.',
    tags: ['YOLOv8', 'Computer Vision', 'PyTorch'],
    category: 'CV',
    githubUrl: 'https://github.com/ritikbh193',
  },
  {
    id: 'graph-plotter',
    title: 'Automated Graph Plotter',
    description: 'Natural language to data visualization tool. Describe the chart you want, and the LLM generates the plotting code.',
    tags: ['LLM', 'Pandas', 'Matplotlib', 'Data Viz'],
    category: 'GenAI',
    githubUrl: 'https://github.com/ritikbh193',
  }
];
