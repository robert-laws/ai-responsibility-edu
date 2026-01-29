export const resources = [
  // AI Ethics Resources
  {
    id: 1,
    title: 'Ethics of Artificial Intelligence',
    source: 'Stanford Encyclopedia of Philosophy',
    description:
      'Comprehensive academic overview of ethical issues in AI, including bias, transparency, and accountability.',
    url: 'https://plato.stanford.edu/entries/ethics-ai/',
    category: 'ai-ethics',
  },
  {
    id: 2,
    title: 'AI Now Institute',
    source: 'New York University',
    description:
      'Research institute examining the social implications of artificial intelligence. Publishes annual reports on AI accountability.',
    url: 'https://ainowinstitute.org/',
    category: 'ai-ethics',
  },
  {
    id: 3,
    title: 'Recommendation on the Ethics of Artificial Intelligence',
    source: 'UNESCO',
    description:
      'The first global standard on AI ethics, adopted by 193 countries. Outlines values and principles for responsible AI development.',
    url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
    category: 'ai-ethics',
  },
  {
    id: 4,
    title: 'Human-Centered AI Institute',
    source: 'Stanford University',
    description:
      'Research and resources on developing AI that benefits humanity, including educational materials on AI ethics.',
    url: 'https://hai.stanford.edu/',
    category: 'ai-ethics',
  },
  {
    id: 5,
    title: 'ACM Code of Ethics',
    source: 'Association for Computing Machinery',
    description:
      'Professional code of ethics for computing professionals, including guidelines on fairness, privacy, and responsible AI.',
    url: 'https://www.acm.org/code-of-ethics',
    category: 'ai-ethics',
  },

  // Academic Integrity Resources
  {
    id: 6,
    title: 'How to Cite ChatGPT',
    source: 'APA Style',
    description:
      'Official guidance from APA on how to cite ChatGPT and other AI-generated content in academic papers.',
    url: 'https://apastyle.apa.org/blog/how-to-cite-chatgpt',
    category: 'academic-integrity',
  },
  {
    id: 7,
    title: 'Citing Generative AI',
    source: 'MLA Style Center',
    description:
      'MLA guidelines for citing AI-generated text, including examples and best practices.',
    url: 'https://style.mla.org/citing-generative-ai/',
    category: 'academic-integrity',
  },
  {
    id: 8,
    title: 'AI and Academic Integrity',
    source: 'Harvard University',
    description:
      'Resources and guidelines for students on using AI tools responsibly in academic work.',
    url: 'https://www.harvard.edu/ai-guidelines/',
    category: 'academic-integrity',
  },
  {
    id: 9,
    title: 'AI Writing Tools and Academic Integrity',
    source: 'Purdue OWL',
    description:
      'Writing center resource on navigating AI writing assistants while maintaining academic integrity.',
    url: 'https://owl.purdue.edu/',
    category: 'academic-integrity',
  },

  // Privacy & Security Resources
  {
    id: 10,
    title: 'ChatGPT Privacy Policy',
    source: 'OpenAI',
    description:
      'Official privacy policy explaining how OpenAI collects, uses, and protects user data.',
    url: 'https://openai.com/privacy/',
    category: 'privacy-security',
  },
  {
    id: 11,
    title: 'Privacy and AI',
    source: 'Electronic Frontier Foundation',
    description:
      'Resources on privacy rights in the age of AI, including guides for protecting personal information.',
    url: 'https://www.eff.org/issues/ai',
    category: 'privacy-security',
  },
  {
    id: 12,
    title: 'AI and Data Privacy',
    source: 'Future of Privacy Forum',
    description:
      'Research and resources on the intersection of artificial intelligence and data privacy.',
    url: 'https://fpf.org/',
    category: 'privacy-security',
  },

  // PLACEHOLDER: Add more resources here
  // {
  //   id: 13,
  //   title: 'Resource Title',
  //   source: 'Source Name',
  //   description: 'Description of the resource.',
  //   url: 'https://example.com',
  //   category: 'ai-ethics', // or 'academic-integrity' or 'privacy-security'
  // },
];

export const getResourcesByCategory = (category) => {
  if (category === 'all') return resources;
  return resources.filter((r) => r.category === category);
};

export const categories = [
  { id: 'all', label: 'All Resources' },
  { id: 'ai-ethics', label: 'AI Ethics' },
  { id: 'academic-integrity', label: 'Academic Integrity' },
  { id: 'privacy-security', label: 'Privacy & Security' },
];
