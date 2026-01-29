export const quizzes = {
  'ai-ethics': {
    title: 'AI Ethics & Bias',
    questions: [
      {
        id: 1,
        question: 'How does bias typically enter AI systems?',
        options: [
          'AI systems generate bias on their own',
          'Bias comes from training data and human design choices',
          'Only intentional programming creates bias',
          'Bias only affects older AI systems',
        ],
        correctAnswer: 1,
        explanation:
          'AI systems learn from data created by humans. When that data contains biases—intentional or not—the AI can learn and amplify those biases.',
      },
      {
        id: 2,
        question: 'What is "group fairness" in AI?',
        options: [
          'Treating every individual exactly the same',
          'Ensuring different demographic groups receive similar outcomes on average',
          'Making AI decisions transparent to all users',
          'Allowing groups to vote on AI decisions',
        ],
        correctAnswer: 1,
        explanation:
          'Group fairness means that different demographic groups should receive similar outcomes on average, though this can sometimes conflict with individual fairness.',
      },
      {
        id: 3,
        question: 'Which is a red flag that an AI system might be biased?',
        options: [
          'The system provides fast responses',
          'The system asks for user feedback',
          'The system stereotypes groups of people in its outputs',
          'The system was created by a large company',
        ],
        correctAnswer: 2,
        explanation:
          'AI systems that stereotype groups of people are showing clear signs of bias. Other red flags include unfair outcomes for certain demographics and lack of transparency.',
      },
      {
        id: 4,
        question:
          'What happened with Amazon\'s AI recruiting tool that demonstrated bias?',
        options: [
          'It only hired candidates from Amazon',
          'It penalized resumes containing words associated with women',
          'It refused to evaluate any resumes',
          'It only worked in English',
        ],
        correctAnswer: 1,
        explanation:
          'Amazon\'s AI recruiting tool was trained on resumes submitted over 10 years (mostly from men), leading it to penalize resumes with words like "women\'s" or graduates of all-women\'s colleges.',
      },
      {
        id: 5,
        question: 'What is the most important thing you can do as an AI user regarding bias?',
        options: [
          'Avoid using AI entirely',
          'Trust AI outputs since they are computer-generated',
          'Question AI outputs, especially those involving judgments about people',
          'Only use AI for entertainment purposes',
        ],
        correctAnswer: 2,
        explanation:
          'Being a critical user means questioning AI outputs, especially when they involve judgments about people. You have agency to identify biases and advocate for better systems.',
      },
    ],
  },
  'academic-integrity': {
    title: 'Academic Integrity',
    questions: [
      {
        id: 1,
        question: 'Which of the following is generally an appropriate use of AI in academic work?',
        options: [
          'Having AI write your entire essay',
          'Using AI to brainstorm ideas and then developing them yourself',
          'Submitting AI-generated code as your own work',
          'Having AI answer exam questions for you',
        ],
        correctAnswer: 1,
        explanation:
          'Using AI to brainstorm and generate initial ideas is appropriate, as long as the actual work and intellectual contribution remain your own.',
      },
      {
        id: 2,
        question: 'Why is transparency about AI use important in academic work?',
        options: [
          'It\'s not important—AI is just a tool like any other',
          'It protects your integrity and helps establish healthy norms',
          'It\'s only important if you\'re caught',
          'Transparency is only required for graduate students',
        ],
        correctAnswer: 1,
        explanation:
          'Disclosure protects your integrity and helps establish healthy norms around AI use. When in doubt, disclose and describe your AI use.',
      },
      {
        id: 3,
        question: 'What should you check before using AI for an assignment?',
        options: [
          'The weather forecast',
          'Your institution\'s AI usage policy',
          'How many words the AI can generate',
          'The AI\'s favorite color',
        ],
        correctAnswer: 1,
        explanation:
          'Different institutions have different policies about AI use. Always check your institution\'s guidelines before using AI for academic work.',
      },
      {
        id: 4,
        question:
          'Which question should you ask yourself when deciding whether your AI use is appropriate?',
        options: [
          'Is the AI free to use?',
          'Would I be comfortable if my instructor knew exactly how I used AI?',
          'Did other students use AI too?',
          'Is the AI popular?',
        ],
        correctAnswer: 1,
        explanation:
          'If you would be uncomfortable with your instructor knowing how you used AI, that\'s a sign that your use may cross ethical boundaries.',
      },
      {
        id: 5,
        question: 'What is the key distinction between AI as a tool versus AI as an author?',
        options: [
          'There is no distinction',
          'AI can be listed as a co-author on papers',
          'AI can assist your work, but the intellectual contribution must be yours',
          'AI should write the first draft, then you edit',
        ],
        correctAnswer: 2,
        explanation:
          'When you submit academic work, you represent it as your own intellectual contribution. AI can assist, but the core thinking and effort must be yours.',
      },
    ],
  },
  'privacy-security': {
    title: 'Privacy & Security',
    questions: [
      {
        id: 1,
        question: 'What happened when Samsung employees used ChatGPT with company code?',
        options: [
          'ChatGPT improved the code significantly',
          'The confidential code became part of ChatGPT\'s training data',
          'Nothing—ChatGPT keeps all data private',
          'Samsung won an award for innovation',
        ],
        correctAnswer: 1,
        explanation:
          'Samsung employees accidentally leaked confidential source code by pasting it into ChatGPT. The code became part of the training data, leading Samsung to ban generative AI tools.',
      },
      {
        id: 2,
        question: 'Which of the following should you NEVER share with AI chat systems?',
        options: [
          'Questions about general topics',
          'Passwords, API keys, or credentials',
          'Requests for explanations of concepts',
          'Brainstorming prompts',
        ],
        correctAnswer: 1,
        explanation:
          'Never share passwords, API keys, credentials, or other sensitive security information with AI systems.',
      },
      {
        id: 3,
        question: 'How should you think about AI chat interfaces regarding privacy?',
        options: [
          'As completely private and encrypted',
          'As more secure than email',
          'Like public forums—don\'t share what you wouldn\'t want public',
          'As temporary spaces where data is immediately deleted',
        ],
        correctAnswer: 2,
        explanation:
          'Treat AI chat interfaces like public forums. Don\'t share anything you wouldn\'t want to become public or be used in training data.',
      },
      {
        id: 4,
        question: 'What privacy setting should you look for in AI services?',
        options: [
          'Options to make your conversations public',
          'Options to opt out of training data collection',
          'Options to share your data with more companies',
          'Options to disable all security features',
        ],
        correctAnswer: 1,
        explanation:
          'Look for options to opt out of training data collection, conversation history controls, and data deletion capabilities.',
      },
      {
        id: 5,
        question: 'Why should you be careful about sharing information about OTHER people in AI systems?',
        options: [
          'It costs more to process',
          'The AI will refuse to respond',
          'It may violate their privacy even if you have good intentions',
          'It\'s only a problem if they find out',
        ],
        correctAnswer: 2,
        explanation:
          'Sharing information about other people in AI systems may violate their privacy, even if you have good intentions. Always consider others\' privacy, not just your own.',
      },
    ],
  },
};

export const getQuizByTopic = (topicId) => {
  return quizzes[topicId] || null;
};

export const calculateScore = (topicId, answers) => {
  const quiz = quizzes[topicId];
  if (!quiz) return { score: 0, total: 0, percentage: 0 };

  let correct = 0;
  quiz.questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correct++;
    }
  });

  return {
    score: correct,
    total: quiz.questions.length,
    percentage: Math.round((correct / quiz.questions.length) * 100),
  };
};
