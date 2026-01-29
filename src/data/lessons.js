export const topics = [
  {
    id: 'ai-ethics',
    title: 'AI Ethics & Bias',
    description: 'Fairness, transparency, and accountability in AI systems',
    icon: '⚖️',
    lessons: [
      {
        id: 'what-is-ai-bias',
        title: 'What is AI Bias?',
        duration: '8 min',
        content: [
          {
            type: 'text',
            value:
              'Artificial intelligence systems learn from data created by humans. When that data contains biases—whether intentional or not—the AI can learn and amplify those biases in its outputs.',
          },
          {
            type: 'heading',
            value: 'How Bias Enters AI Systems',
          },
          {
            type: 'list',
            items: [
              'Training data that underrepresents certain groups',
              'Historical data that reflects past discrimination',
              'Labels and categories created with implicit biases',
              'Feedback loops that reinforce existing patterns',
            ],
          },
          {
            type: 'example',
            title: 'Real-World Example',
            value:
              'In 2018, Amazon discovered their AI recruiting tool was biased against women. The system was trained on resumes submitted over 10 years, which were predominantly from men, leading it to penalize resumes containing words like "women\'s" or graduates of all-women\'s colleges.',
          },
          {
            type: 'text',
            value:
              'Understanding that AI systems can be biased is the first step toward using them responsibly. Always question AI outputs, especially when they involve judgments about people.',
          },
          {
            type: 'keyTakeaway',
            value:
              'AI systems are not neutral—they reflect the biases present in their training data and design choices.',
          },
        ],
      },
      {
        id: 'fairness-in-ai',
        title: 'Fairness in AI',
        duration: '10 min',
        content: [
          {
            type: 'text',
            value:
              'Fairness in AI is not a simple concept with one definition. Different contexts may require different approaches to fairness, and sometimes these definitions can even conflict with each other.',
          },
          {
            type: 'heading',
            value: 'Types of Fairness',
          },
          {
            type: 'definition',
            term: 'Individual Fairness',
            value: 'Similar individuals should be treated similarly by the AI system.',
          },
          {
            type: 'definition',
            term: 'Group Fairness',
            value:
              'Different demographic groups should receive similar outcomes on average.',
          },
          {
            type: 'definition',
            term: 'Procedural Fairness',
            value:
              'The process by which decisions are made should be fair and transparent.',
          },
          {
            type: 'interactive',
            title: 'Think About It',
            prompt:
              'A college uses AI to help with admissions. Should the AI aim to admit the same percentage of applicants from each demographic group (group fairness), or should it treat each applicant based solely on their individual qualifications (individual fairness)?',
            discussion:
              'There\'s no single right answer. Both approaches have merits and drawbacks, which is why human oversight remains crucial in high-stakes AI decisions.',
          },
          {
            type: 'keyTakeaway',
            value:
              'Fairness has multiple definitions that may conflict. Critical thinking is essential when evaluating whether an AI system is "fair."',
          },
        ],
      },
      {
        id: 'your-role',
        title: 'Your Role',
        duration: '7 min',
        content: [
          {
            type: 'text',
            value:
              'As a user of AI systems, you have agency and responsibility. You can identify potential biases, question outputs, and advocate for better systems.',
          },
          {
            type: 'heading',
            value: 'Practical Steps You Can Take',
          },
          {
            type: 'list',
            items: [
              'Question AI outputs that involve judgments about people',
              'Consider who might be harmed by biased AI decisions',
              'Look for diverse perspectives when AI is making recommendations',
              'Report problematic AI behavior when you encounter it',
              'Stay informed about AI ethics discussions in your field',
            ],
          },
          {
            type: 'heading',
            value: 'Red Flags to Watch For',
          },
          {
            type: 'list',
            items: [
              'AI that stereotypes groups of people',
              'Outputs that seem unfair to certain demographics',
              'Systems that lack transparency about how decisions are made',
              'AI used in high-stakes decisions without human oversight',
            ],
          },
          {
            type: 'interactive',
            title: 'Reflection',
            prompt:
              'Think about an AI system you use regularly (like recommendation algorithms on social media or streaming services). Can you identify any potential biases in how it works?',
            discussion:
              'Being a critical user of AI starts with awareness. The more you practice questioning AI systems, the better you\'ll become at identifying potential issues.',
          },
          {
            type: 'keyTakeaway',
            value:
              'You are not a passive consumer of AI—you can and should critically evaluate AI systems and advocate for fairness.',
          },
        ],
      },
    ],
  },
  {
    id: 'academic-integrity',
    title: 'Academic Integrity',
    description: 'Proper use and citation of AI in academic work',
    icon: '📝',
    lessons: [
      {
        id: 'ai-as-tool',
        title: 'AI as a Tool, Not an Author',
        duration: '8 min',
        content: [
          {
            type: 'text',
            value:
              'AI writing assistants like ChatGPT are powerful tools, but they are not authors. Understanding this distinction is crucial for maintaining academic integrity.',
          },
          {
            type: 'heading',
            value: 'The Key Distinction',
          },
          {
            type: 'text',
            value:
              'When you submit academic work, you are representing it as your own intellectual contribution. Using AI to generate content without disclosure violates this fundamental principle, regardless of whether there\'s a specific policy against it.',
          },
          {
            type: 'heading',
            value: 'Appropriate Uses of AI in Academic Work',
          },
          {
            type: 'list',
            items: [
              'Brainstorming and generating initial ideas',
              'Getting explanations of difficult concepts',
              'Checking grammar and improving clarity',
              'Finding gaps in your arguments',
              'Learning about a topic (then doing your own research)',
            ],
          },
          {
            type: 'heading',
            value: 'Inappropriate Uses (Unless Explicitly Permitted)',
          },
          {
            type: 'list',
            items: [
              'Generating entire papers or sections',
              'Having AI write your thesis or arguments',
              'Submitting AI-generated code as your own',
              'Using AI to answer exam questions',
              'Paraphrasing AI output without attribution',
            ],
          },
          {
            type: 'keyTakeaway',
            value:
              'AI is a tool for enhancing your learning and work, not a replacement for your own thinking and effort.',
          },
        ],
      },
      {
        id: 'citation-transparency',
        title: 'Citation & Transparency',
        duration: '10 min',
        content: [
          {
            type: 'text',
            value:
              'When you do use AI in ways that influence your work, transparency is essential. Different institutions and contexts may have different requirements, but honesty is always the foundation.',
          },
          {
            type: 'heading',
            value: 'General Principles',
          },
          {
            type: 'list',
            items: [
              'Check your institution\'s AI usage policy first',
              'When in doubt, disclose and describe your AI use',
              'Be specific about what AI tool you used and how',
              'Distinguish between AI-assisted and AI-generated content',
            ],
          },
          {
            type: 'heading',
            value: 'How to Cite AI Usage',
          },
          {
            type: 'example',
            title: 'APA Style Example',
            value:
              'OpenAI. (2024). ChatGPT (Mar 14 version) [Large language model]. https://chat.openai.com/chat',
          },
          {
            type: 'example',
            title: 'MLA Style Example',
            value:
              '"Describe the symbolism in The Great Gatsby" prompt. ChatGPT, 14 Mar. version, OpenAI, 15 Mar. 2024, chat.openai.com/chat.',
          },
          {
            type: 'text',
            value:
              'Beyond formal citations, consider including a note in your work explaining how AI was used. For example: "I used ChatGPT to help brainstorm initial topics and to check grammar. All arguments and analysis are my own."',
          },
          {
            type: 'heading',
            value: 'Questions to Ask Yourself',
          },
          {
            type: 'list',
            items: [
              'Would I be comfortable if my instructor knew exactly how I used AI?',
              'Am I learning the material, or just producing an output?',
              'Does my work represent my understanding and effort?',
            ],
          },
          {
            type: 'keyTakeaway',
            value:
              'When using AI in academic work, default to transparency. Disclosure protects your integrity and helps establish healthy norms.',
          },
        ],
      },
    ],
  },
  {
    id: 'privacy-security',
    title: 'Privacy & Security',
    description: 'Protecting yourself when using AI tools',
    icon: '🔒',
    lessons: [
      {
        id: 'what-you-share',
        title: 'What You Share Matters',
        duration: '8 min',
        content: [
          {
            type: 'text',
            value:
              'Every time you interact with an AI system, you\'re potentially sharing data. Understanding what happens to that data is crucial for protecting yourself and others.',
          },
          {
            type: 'heading',
            value: 'Types of Data You Might Share',
          },
          {
            type: 'list',
            items: [
              'The text of your prompts and questions',
              'Personal information mentioned in conversations',
              'Files and documents you upload',
              'Patterns in how you use the service',
              'Information about others (be careful!)',
            ],
          },
          {
            type: 'heading',
            value: 'How AI Companies May Use Your Data',
          },
          {
            type: 'list',
            items: [
              'Training future AI models',
              'Improving their services',
              'Research and development',
              'Sharing with third parties (check privacy policies)',
              'Legal compliance when required',
            ],
          },
          {
            type: 'example',
            title: 'Cautionary Tale',
            value:
              'In 2023, Samsung employees accidentally leaked confidential source code by pasting it into ChatGPT for help debugging. The code became part of ChatGPT\'s training data. Samsung subsequently banned the use of generative AI tools.',
          },
          {
            type: 'keyTakeaway',
            value:
              'Treat AI chat interfaces like public forums—don\'t share anything you wouldn\'t want to become public or be used in training data.',
          },
        ],
      },
      {
        id: 'protecting-yourself',
        title: 'Protecting Yourself',
        duration: '7 min',
        content: [
          {
            type: 'text',
            value:
              'You can use AI tools while still protecting your privacy. It requires awareness and intentional choices about what you share and how.',
          },
          {
            type: 'heading',
            value: 'Practical Privacy Tips',
          },
          {
            type: 'list',
            items: [
              'Never share passwords, API keys, or credentials',
              'Avoid sharing personal identifying information (full name, address, SSN)',
              'Don\'t paste confidential documents or proprietary code',
              'Use pseudonyms or general descriptions when possible',
              'Check if the AI service offers privacy-focused options',
            ],
          },
          {
            type: 'heading',
            value: 'Privacy Settings to Look For',
          },
          {
            type: 'list',
            items: [
              'Options to opt out of training data collection',
              'Conversation history controls',
              'Data deletion requests',
              'Enterprise or educational versions with better privacy',
            ],
          },
          {
            type: 'heading',
            value: 'Protecting Others',
          },
          {
            type: 'text',
            value:
              'Remember that sharing information about other people—classmates, family, colleagues—in AI systems may violate their privacy, even if you have good intentions.',
          },
          {
            type: 'interactive',
            title: 'Before You Type',
            prompt:
              'Develop a habit of pausing before sharing anything with an AI system. Ask yourself: Would I be comfortable if this information appeared in a data breach? Could this harm me or someone else?',
            discussion:
              'This quick mental check can prevent many privacy mistakes before they happen.',
          },
          {
            type: 'keyTakeaway',
            value:
              'Privacy in AI requires proactive protection. Make conscious choices about what you share, and familiarize yourself with privacy settings.',
          },
        ],
      },
    ],
  },
];

export const getLessonById = (topicId, lessonId) => {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return null;
  return topic.lessons.find((l) => l.id === lessonId) || null;
};

export const getTopicById = (topicId) => {
  return topics.find((t) => t.id === topicId) || null;
};

export const getNextLesson = (topicId, currentLessonId) => {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return null;

  const currentIndex = topic.lessons.findIndex((l) => l.id === currentLessonId);
  if (currentIndex === -1 || currentIndex === topic.lessons.length - 1) {
    return null;
  }

  return topic.lessons[currentIndex + 1];
};

export const getPreviousLesson = (topicId, currentLessonId) => {
  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return null;

  const currentIndex = topic.lessons.findIndex((l) => l.id === currentLessonId);
  if (currentIndex <= 0) {
    return null;
  }

  return topic.lessons[currentIndex - 1];
};
