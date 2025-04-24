
import { Course } from "../../types";

export const englishCourse: Course = {
  language: "english",
  levels: {
    beginner: {
      name: "Beginner",
      description: "Start your English journey with basic vocabulary and simple sentences",
      lessons: [
        {
          id: "eng-beg-1",
          title: "Greetings and Introductions",
          description: "Learn how to greet people and introduce yourself in English",
          type: "vocabulary",
          duration: 15,
          content: {
            introduction: "In this lesson, you will learn common English greetings and how to introduce yourself. These are essential phrases for starting conversations.",
            activities: [
              {
                id: "eng-beg-1-act1",
                type: "flashcards",
                title: "Common Greetings",
                instructions: "Review these common English greetings",
                content: {
                  cards: [
                    {
                      front: "Hello",
                      back: "A universal greeting used at any time of day"
                    },
                    {
                      front: "Hi",
                      back: "An informal greeting used among friends and acquaintances"
                    },
                    {
                      front: "Good morning",
                      back: "A greeting used before noon"
                    },
                    {
                      front: "Good afternoon",
                      back: "A greeting used from noon until early evening"
                    },
                    {
                      front: "Good evening",
                      back: "A greeting used from early evening onwards"
                    }
                  ]
                }
              },
              {
                id: "eng-beg-1-act2",
                type: "matching",
                title: "Match the Greetings",
                instructions: "Match each greeting with its appropriate response",
                content: {
                  pairs: [
                    {
                      term: "How are you?",
                      match: "I'm fine, thank you."
                    },
                    {
                      term: "Nice to meet you",
                      match: "Nice to meet you too"
                    },
                    {
                      term: "Good morning",
                      match: "Good morning to you"
                    },
                    {
                      term: "What's your name?",
                      match: "My name is..."
                    },
                    {
                      term: "How's it going?",
                      match: "Not bad, thanks."
                    }
                  ]
                }
              },
              {
                id: "eng-beg-1-act3",
                type: "quiz",
                title: "Greetings Quiz",
                instructions: "Test your knowledge of English greetings",
                content: {
                  questions: [
                    {
                      question: "Which greeting is appropriate to use in the morning?",
                      options: ["Good night", "Good evening", "Good morning", "Good afternoon"],
                      correctAnswer: 2,
                      explanation: "Good morning is used as a greeting during morning hours, typically before noon."
                    },
                    {
                      question: "How would you respond to 'How are you?'",
                      options: ["I'm John", "I'm 25 years old", "I'm from London", "I'm fine, thank you"],
                      correctAnswer: 3,
                      explanation: "'I'm fine, thank you' is a standard response to the question 'How are you?'"
                    },
                    {
                      question: "What does 'Nice to meet you' mean?",
                      options: [
                        "I don't want to meet you",
                        "I'm pleased to make your acquaintance",
                        "I'll see you tomorrow",
                        "I've met you before"
                      ],
                      correctAnswer: 1,
                      explanation: "'Nice to meet you' expresses pleasure in making someone's acquaintance for the first time."
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          id: "eng-beg-2",
          title: "Basic Vocabulary",
          description: "Learn essential English words for everyday communication",
          type: "vocabulary",
          duration: 20,
          content: {
            introduction: "Building your vocabulary is crucial for language learning. In this lesson, you'll learn some essential English words grouped by categories.",
            activities: [
              {
                id: "eng-beg-2-act1",
                type: "flashcards",
                title: "Numbers 1-10",
                instructions: "Learn the basic numbers in English",
                content: {
                  cards: [
                    { front: "1", back: "One" },
                    { front: "2", back: "Two" },
                    { front: "3", back: "Three" },
                    { front: "4", back: "Four" },
                    { front: "5", back: "Five" },
                    { front: "6", back: "Six" },
                    { front: "7", back: "Seven" },
                    { front: "8", back: "Eight" },
                    { front: "9", back: "Nine" },
                    { front: "10", back: "Ten" }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    intermediate: {
      name: "Intermediate",
      description: "Expand your English skills with complex sentences and everyday conversations",
      lessons: [
        {
          id: "eng-int-1",
          title: "Past Tense Verbs",
          description: "Learn how to express past actions in English",
          type: "grammar",
          duration: 25,
          content: {
            introduction: "The past tense in English is used to refer to actions that have already happened. In this lesson, you'll learn how to form and use regular and irregular past tense verbs.",
            activities: [
              {
                id: "eng-int-1-act1",
                type: "flashcards",
                title: "Regular Past Tense Verbs",
                instructions: "Study these regular past tense verbs",
                content: {
                  cards: [
                    { front: "walk", back: "walked" },
                    { front: "talk", back: "talked" },
                    { front: "play", back: "played" },
                    { front: "study", back: "studied" },
                    { front: "work", back: "worked" }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    advanced: {
      name: "Advanced",
      description: "Master complex grammatical structures and cultural nuances in English",
      lessons: [
        {
          id: "eng-adv-1",
          title: "Idiomatic Expressions",
          description: "Learn common English idioms and their meanings",
          type: "vocabulary",
          duration: 30,
          content: {
            introduction: "Idiomatic expressions are phrases where the meaning cannot be understood from the individual words. Learning idioms will make your English sound more natural.",
            activities: [
              {
                id: "eng-adv-1-act1",
                type: "flashcards",
                title: "Common Idioms",
                instructions: "Learn these common English idioms",
                content: {
                  cards: [
                    { front: "Break a leg", back: "Good luck" },
                    { front: "It's raining cats and dogs", back: "It's raining heavily" },
                    { front: "Cost an arm and a leg", back: "Very expensive" },
                    { front: "Hit the books", back: "Study hard" },
                    { front: "Piece of cake", back: "Very easy" }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
};
