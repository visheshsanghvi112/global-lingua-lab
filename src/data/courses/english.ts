
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
                    },
                    {
                      front: "How are you?",
                      back: "A common question to ask about someone's wellbeing"
                    },
                    {
                      front: "Nice to meet you",
                      back: "Used when meeting someone for the first time"
                    },
                    {
                      front: "How's it going?",
                      back: "An informal way to ask how someone is doing"
                    },
                    {
                      front: "What's up?",
                      back: "A very casual greeting mainly used among friends"
                    },
                    {
                      front: "Hey",
                      back: "A very informal greeting commonly used in casual situations"
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
                    },
                    {
                      term: "Where are you from?",
                      match: "I'm from..."
                    },
                    {
                      term: "See you later",
                      match: "See you soon"
                    },
                    {
                      term: "Have a nice day",
                      match: "You too"
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
                    },
                    {
                      question: "Which of the following is NOT typically used as a greeting?",
                      options: [
                        "Hi there",
                        "How's it going?",
                        "What's your job?",
                        "Hello"
                      ],
                      correctAnswer: 2,
                      explanation: "'What's your job?' is a question about someone's profession, not a greeting."
                    },
                    {
                      question: "When someone says 'What's up?', an appropriate response would be:",
                      options: [
                        "The sky",
                        "Not much, just hanging out",
                        "I'm 30 years old",
                        "I like pizza"
                      ],
                      correctAnswer: 1,
                      explanation: "'Not much, just hanging out' is a typical casual response to 'What's up?'"
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
                title: "Numbers 1-20",
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
                    { front: "10", back: "Ten" },
                    { front: "11", back: "Eleven" },
                    { front: "12", back: "Twelve" },
                    { front: "13", back: "Thirteen" },
                    { front: "14", back: "Fourteen" },
                    { front: "15", back: "Fifteen" },
                    { front: "16", back: "Sixteen" },
                    { front: "17", back: "Seventeen" },
                    { front: "18", back: "Eighteen" },
                    { front: "19", back: "Nineteen" },
                    { front: "20", back: "Twenty" }
                  ]
                }
              },
              {
                id: "eng-beg-2-act2",
                type: "matching",
                title: "Common Objects",
                instructions: "Match these common objects with their English names",
                content: {
                  pairs: [
                    { term: "🚗", match: "Car" },
                    { term: "🏠", match: "House" },
                    { term: "📱", match: "Phone" },
                    { term: "💻", match: "Computer" },
                    { term: "📚", match: "Book" },
                    { term: "🪑", match: "Chair" },
                    { term: "🛏️", match: "Bed" },
                    { term: "🍎", match: "Apple" },
                    { term: "🥖", match: "Bread" },
                    { term: "👕", match: "Shirt" }
                  ]
                }
              },
              {
                id: "eng-beg-2-act3",
                type: "quiz",
                title: "Everyday Items Quiz",
                instructions: "Test your knowledge of common everyday items",
                content: {
                  questions: [
                    {
                      question: "Which of these is a piece of furniture?",
                      options: ["Apple", "Chair", "Car", "Phone"],
                      correctAnswer: 1,
                      explanation: "A chair is a piece of furniture designed for sitting."
                    },
                    {
                      question: "What do you use to make a phone call?",
                      options: ["Book", "Computer", "Phone", "House"],
                      correctAnswer: 2,
                      explanation: "A phone is used to make phone calls and communicate with others."
                    },
                    {
                      question: "Which of these is a food item?",
                      options: ["Book", "Shirt", "Bread", "Chair"],
                      correctAnswer: 2,
                      explanation: "Bread is a food item that people eat."
                    },
                    {
                      question: "What do you wear on your upper body?",
                      options: ["Shirt", "Book", "Car", "Apple"],
                      correctAnswer: 0,
                      explanation: "A shirt is worn on the upper body."
                    },
                    {
                      question: "Which of these do you read?",
                      options: ["Car", "Book", "Bread", "Chair"],
                      correctAnswer: 1,
                      explanation: "A book is something you read that contains written or printed works."
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          id: "eng-beg-3",
          title: "Simple Present Tense",
          description: "Learn how to talk about habits and routines using present tense",
          type: "grammar",
          duration: 25,
          content: {
            introduction: "The simple present tense is used to talk about habits, repeated actions, and general truths. In this lesson, you will learn how to form and use the simple present tense in English.",
            activities: [
              {
                id: "eng-beg-3-act1",
                type: "flashcards",
                title: "Regular Verbs in Present Tense",
                instructions: "Learn how regular verbs change in the present tense",
                content: {
                  cards: [
                    { 
                      front: "I/You/We/They work", 
                      back: "For I, you, we, and they, use the base form of the verb"
                    },
                    { 
                      front: "He/She/It works", 
                      back: "For he, she, and it, add -s to the base form of the verb"
                    },
                    { 
                      front: "study → studies", 
                      back: "For verbs ending in consonant + y, change y to i and add -es"
                    },
                    { 
                      front: "watch → watches", 
                      back: "For verbs ending in ch, sh, ss, x, or z, add -es"
                    },
                    { 
                      front: "go → goes", 
                      back: "For verbs ending in o, add -es"
                    }
                  ]
                }
              },
              {
                id: "eng-beg-3-act2",
                type: "matching",
                title: "Subject-Verb Agreement",
                instructions: "Match the subjects with the correct form of the verbs",
                content: {
                  pairs: [
                    { term: "I", match: "play" },
                    { term: "You", match: "play" },
                    { term: "He", match: "plays" },
                    { term: "She", match: "plays" },
                    { term: "It", match: "plays" },
                    { term: "We", match: "play" },
                    { term: "They", match: "play" }
                  ]
                }
              },
              {
                id: "eng-beg-3-act3",
                type: "quiz",
                title: "Present Tense Quiz",
                instructions: "Choose the correct form of the verb in present tense",
                content: {
                  questions: [
                    {
                      question: "He ___ to school every day.",
                      options: ["go", "goes", "going", "gone"],
                      correctAnswer: 1,
                      explanation: "We use 'goes' with he/she/it subjects in the present tense."
                    },
                    {
                      question: "They ___ in a big house.",
                      options: ["lives", "living", "live", "lived"],
                      correctAnswer: 2,
                      explanation: "We use 'live' with they/we/you/I subjects in the present tense."
                    },
                    {
                      question: "My mother ___ dinner every evening.",
                      options: ["cook", "cooks", "cooking", "cooked"],
                      correctAnswer: 1,
                      explanation: "We use 'cooks' with he/she/it subjects in the present tense."
                    },
                    {
                      question: "We ___ English three times a week.",
                      options: ["studies", "study", "studying", "studied"],
                      correctAnswer: 1,
                      explanation: "We use 'study' with we/they/you/I subjects in the present tense."
                    },
                    {
                      question: "The sun ___ in the east.",
                      options: ["rise", "rises", "rising", "rose"],
                      correctAnswer: 1,
                      explanation: "We use 'rises' with he/she/it subjects in the present tense."
                    }
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
                    { front: "walk → walked", back: "Add -ed to form the past tense" },
                    { front: "play → played", back: "Add -ed to form the past tense" },
                    { front: "study → studied", back: "For verbs ending in consonant + y, change y to i and add -ed" },
                    { front: "stop → stopped", back: "For verbs ending in consonant-vowel-consonant, double the final consonant and add -ed" },
                    { front: "like → liked", back: "Add -d for verbs ending in 'e'" },
                    { front: "watch → watched", back: "Add -ed to form the past tense" },
                    { front: "live → lived", back: "Add -d for verbs ending in 'e'" },
                    { front: "cry → cried", back: "For verbs ending in consonant + y, change y to i and add -ed" }
                  ]
                }
              },
              {
                id: "eng-int-1-act2",
                type: "flashcards",
                title: "Irregular Past Tense Verbs",
                instructions: "Learn these common irregular past tense verbs",
                content: {
                  cards: [
                    { front: "go → went", back: "Irregular past tense form" },
                    { front: "see → saw", back: "Irregular past tense form" },
                    { front: "eat → ate", back: "Irregular past tense form" },
                    { front: "drink → drank", back: "Irregular past tense form" },
                    { front: "run → ran", back: "Irregular past tense form" },
                    { front: "take → took", back: "Irregular past tense form" },
                    { front: "have → had", back: "Irregular past tense form" },
                    { front: "come → came", back: "Irregular past tense form" },
                    { front: "do → did", back: "Irregular past tense form" },
                    { front: "make → made", back: "Irregular past tense form" }
                  ]
                }
              },
              {
                id: "eng-int-1-act3",
                type: "quiz",
                title: "Past Tense Quiz",
                instructions: "Choose the correct past tense form of each verb",
                content: {
                  questions: [
                    {
                      question: "Yesterday, I ___ to the park.",
                      options: ["go", "went", "gone", "going"],
                      correctAnswer: 1,
                      explanation: "The past tense of 'go' is 'went'."
                    },
                    {
                      question: "She ___ her homework last night.",
                      options: ["do", "does", "did", "done"],
                      correctAnswer: 2,
                      explanation: "The past tense of 'do' is 'did'."
                    },
                    {
                      question: "We ___ dinner at a restaurant last weekend.",
                      options: ["eat", "ate", "eaten", "eating"],
                      correctAnswer: 1,
                      explanation: "The past tense of 'eat' is 'ate'."
                    },
                    {
                      question: "They ___ a new car last month.",
                      options: ["buy", "buys", "buyed", "bought"],
                      correctAnswer: 3,
                      explanation: "The past tense of 'buy' is 'bought'."
                    },
                    {
                      question: "I ___ my keys this morning.",
                      options: ["lose", "losed", "lost", "losing"],
                      correctAnswer: 2,
                      explanation: "The past tense of 'lose' is 'lost'."
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          id: "eng-int-2",
          title: "Describing People and Places",
          description: "Learn adjectives and expressions to describe people and places in detail",
          type: "vocabulary",
          duration: 30,
          content: {
            introduction: "Being able to describe people and places in detail is an important skill in English. This lesson will teach you common adjectives and expressions used for descriptions.",
            activities: [
              {
                id: "eng-int-2-act1",
                type: "flashcards",
                title: "Adjectives for Describing People",
                instructions: "Learn these useful adjectives for describing people",
                content: {
                  cards: [
                    { front: "tall", back: "Having a height that is above average" },
                    { front: "short", back: "Having a height that is below average" },
                    { front: "slim", back: "Having a thin body type" },
                    { front: "overweight", back: "Having more body weight than is considered normal" },
                    { front: "young", back: "Having lived for a relatively short time" },
                    { front: "elderly", back: "Old or aging (more polite than 'old')" },
                    { front: "attractive", back: "Pleasing in appearance" },
                    { front: "handsome", back: "Good-looking (typically used for men)" },
                    { front: "beautiful", back: "Very attractive (typically used for women)" },
                    { front: "bald", back: "Having little or no hair on the head" }
                  ]
                }
              },
              {
                id: "eng-int-2-act2",
                type: "matching",
                title: "Describing Places",
                instructions: "Match these adjectives with their appropriate places",
                content: {
                  pairs: [
                    { term: "bustling", match: "city center" },
                    { term: "tranquil", match: "countryside" },
                    { term: "picturesque", match: "village" },
                    { term: "sandy", match: "beach" },
                    { term: "cozy", match: "cottage" },
                    { term: "magnificent", match: "palace" },
                    { term: "modern", match: "skyscraper" },
                    { term: "ancient", match: "ruins" }
                  ]
                }
              },
              {
                id: "eng-int-2-act3",
                type: "quiz",
                title: "Descriptions Quiz",
                instructions: "Choose the best word to complete each description",
                content: {
                  questions: [
                    {
                      question: "The ___ mountains were covered with snow.",
                      options: ["tall", "wide", "flat", "deep"],
                      correctAnswer: 0,
                      explanation: "Mountains are typically described as 'tall'."
                    },
                    {
                      question: "The beach was ___ with soft, white sand.",
                      options: ["beautiful", "handsome", "bald", "elderly"],
                      correctAnswer: 0,
                      explanation: "A beach can be described as 'beautiful', not the other options which are used for people."
                    },
                    {
                      question: "The city was ___ with people shopping and working.",
                      options: ["empty", "bustling", "quiet", "tranquil"],
                      correctAnswer: 1,
                      explanation: "'Bustling' means full of activity and energy, which describes a busy city."
                    },
                    {
                      question: "My grandmother is an ___ woman with gray hair.",
                      options: ["young", "overweight", "elderly", "attractive"],
                      correctAnswer: 2,
                      explanation: "'Elderly' is a polite way to describe an old person."
                    },
                    {
                      question: "The ___ cottage in the woods was perfect for our weekend getaway.",
                      options: ["cozy", "bustling", "magnificent", "modern"],
                      correctAnswer: 0,
                      explanation: "'Cozy' means small, warm, and comfortable, which often describes cottages."
                    }
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
                    { front: "Piece of cake", back: "Very easy" },
                    { front: "Once in a blue moon", back: "Very rarely" },
                    { front: "Under the weather", back: "Feeling ill" },
                    { front: "Bite the bullet", back: "Face a difficult situation bravely" },
                    { front: "Cut corners", back: "Do something in the easiest or cheapest way" },
                    { front: "Pull yourself together", back: "Calm down and behave normally" }
                  ]
                }
              },
              {
                id: "eng-adv-1-act2",
                type: "matching",
                title: "Match the Idioms to Situations",
                instructions: "Match each idiom with a situation where it might be used",
                content: {
                  pairs: [
                    { term: "Break a leg", match: "Before a performance or interview" },
                    { term: "It's raining cats and dogs", match: "During a heavy storm" },
                    { term: "Cost an arm and a leg", match: "When buying an expensive car" },
                    { term: "Hit the books", match: "Before an important exam" },
                    { term: "Piece of cake", match: "After easily completing a task" },
                    { term: "Once in a blue moon", match: "Describing how often you eat at expensive restaurants" },
                    { term: "Under the weather", match: "Explaining why you're not going to work" },
                    { term: "Bite the bullet", match: "Finally making a difficult decision" }
                  ]
                }
              },
              {
                id: "eng-adv-1-act3",
                type: "quiz",
                title: "Idioms Quiz",
                instructions: "Choose the idiom that best fits each situation",
                content: {
                  questions: [
                    {
                      question: "My new smartphone was so expensive! It really __________.",
                      options: [
                        "broke a leg",
                        "cost an arm and a leg",
                        "was a piece of cake",
                        "was once in a blue moon"
                      ],
                      correctAnswer: 1,
                      explanation: "'Cost an arm and a leg' means something is very expensive."
                    },
                    {
                      question: "I need to study for my final exams, so I'm going to __________ all weekend.",
                      options: [
                        "hit the books",
                        "break a leg",
                        "bite the bullet",
                        "pull myself together"
                      ],
                      correctAnswer: 0,
                      explanation: "'Hit the books' means to study hard."
                    },
                    {
                      question: "I don't feel well today. I'm a bit __________.",
                      options: [
                        "once in a blue moon",
                        "piece of cake",
                        "under the weather",
                        "cutting corners"
                      ],
                      correctAnswer: 2,
                      explanation: "'Under the weather' means feeling ill or unwell."
                    },
                    {
                      question: "Don't worry about the presentation tomorrow. You'll do great! __________!",
                      options: [
                        "Break a leg",
                        "Hit the books",
                        "It's raining cats and dogs",
                        "Pull yourself together"
                      ],
                      correctAnswer: 0,
                      explanation: "'Break a leg' is a way to wish someone good luck, especially before a performance."
                    },
                    {
                      question: "We only go to that expensive restaurant __________.",
                      options: [
                        "under the weather",
                        "break a leg",
                        "once in a blue moon",
                        "cost an arm and a leg"
                      ],
                      correctAnswer: 2,
                      explanation: "'Once in a blue moon' means very rarely or almost never."
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          id: "eng-adv-2",
          title: "Cultural References in English",
          description: "Learn about cultural references commonly used in English conversations",
          type: "conversation",
          duration: 35,
          content: {
            introduction: "Understanding cultural references is essential for feeling comfortable in conversations with native English speakers. This lesson covers common cultural references from literature, movies, history, and popular expressions.",
            activities: [
              {
                id: "eng-adv-2-act1",
                type: "flashcards",
                title: "Literary and Historical References",
                instructions: "Learn these common cultural references from literature and history",
                content: {
                  cards: [
                    { 
                      front: "Achilles' heel", 
                      back: "A weakness or vulnerable point (from Greek mythology)" 
                    },
                    { 
                      front: "Big Brother", 
                      back: "Government or organization monitoring people (from George Orwell's novel '1984')" 
                    },
                    { 
                      front: "Catch-22", 
                      back: "A paradoxical situation from which there is no escape (from Joseph Heller's novel)" 
                    },
                    { 
                      front: "Jekyll and Hyde", 
                      back: "Someone with two very different sides to their personality (from R.L. Stevenson's novel)" 
                    },
                    { 
                      front: "Pandora's box", 
                      back: "Something that creates many problems when interfered with (from Greek mythology)" 
                    },
                    { 
                      front: "The American Dream", 
                      back: "The ideal that every US citizen should have equal opportunity to achieve success" 
                    },
                    { 
                      front: "Watergate", 
                      back: "Political scandal; adding '-gate' to a word implies a scandal" 
                    },
                    { 
                      front: "Renaissance man", 
                      back: "Someone with expertise in many different areas" 
                    }
                  ]
                }
              },
              {
                id: "eng-adv-2-act2",
                type: "matching",
                title: "Movie and Pop Culture References",
                instructions: "Match these popular movie quotes and references with their meanings",
                content: {
                  pairs: [
                    { 
                      term: "May the Force be with you", 
                      match: "Good luck (from Star Wars)" 
                    },
                    { 
                      term: "Houston, we have a problem", 
                      match: "We're in trouble (from Apollo 13)" 
                    },
                    { 
                      term: "I'll be back", 
                      match: "A threat to return (from The Terminator)" 
                    },
                    { 
                      term: "Groundhog Day", 
                      match: "A situation that repeats over and over (from the movie)" 
                    },
                    { 
                      term: "Fifteen minutes of fame", 
                      match: "Brief period of celebrity (coined by Andy Warhol)" 
                    },
                    { 
                      term: "The elephant in the room", 
                      match: "An obvious problem nobody wants to discuss" 
                    },
                    { 
                      term: "Couch potato", 
                      match: "A lazy person who watches a lot of TV" 
                    },
                    { 
                      term: "Gone viral", 
                      match: "Spread rapidly on the internet" 
                    }
                  ]
                }
              },
              {
                id: "eng-adv-2-act3",
                type: "quiz",
                title: "Cultural References Quiz",
                instructions: "Test your understanding of English cultural references",
                content: {
                  questions: [
                    {
                      question: "If someone says a task is their 'Achilles' heel', they mean it is:",
                      options: [
                        "Their favorite thing to do",
                        "Something they're very good at",
                        "A weakness or difficulty for them",
                        "Something they invented"
                      ],
                      correctAnswer: 2,
                      explanation: "An 'Achilles' heel' refers to a weakness or vulnerability, based on the Greek myth where Achilles' heel was his only vulnerable spot."
                    },
                    {
                      question: "When someone says 'It's like Groundhog Day', they mean:",
                      options: [
                        "It's a special celebration",
                        "The same thing keeps happening repeatedly",
                        "It's the beginning of spring",
                        "It's an unpredictable situation"
                      ],
                      correctAnswer: 1,
                      explanation: "'Groundhog Day' refers to the movie where the main character lives the same day over and over, so it means a repetitive situation."
                    },
                    {
                      question: "If someone is described as a 'Renaissance man', they:",
                      options: [
                        "Dress in period costumes",
                        "Study history",
                        "Are knowledgeable in many different subjects",
                        "Are old-fashioned"
                      ],
                      correctAnswer: 2,
                      explanation: "A 'Renaissance man' is someone with expertise in many different areas, like Leonardo da Vinci who was skilled in art, science, and other fields."
                    },
                    {
                      question: "The phrase 'the elephant in the room' refers to:",
                      options: [
                        "A large piece of furniture",
                        "An obvious problem nobody mentions",
                        "An unwelcome guest",
                        "A rare occurrence"
                      ],
                      correctAnswer: 1,
                      explanation: "'The elephant in the room' refers to an obvious problem or difficult situation that people do not want to talk about."
                    },
                    {
                      question: "If something has 'gone viral', it has:",
                      options: [
                        "Become infected",
                        "Disappeared completely",
                        "Spread rapidly online",
                        "Been forgotten"
                      ],
                      correctAnswer: 2,
                      explanation: "When something has 'gone viral', it means it has spread quickly on the internet and been viewed by many people."
                    }
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
