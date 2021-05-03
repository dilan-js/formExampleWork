"use strict";

const questions = [
  // {
  //   id: 1,
  //   questionTitle: "Where are you moving to?",
  //   name: "movingTo",
  //   type: "radio",
  //   options: [
  //     {
  //       questionId: 1,
  //       label: "San Francisco",
  //       value: "SanFrancisco",
  //     },
  //     {
  //       questionId: 1,
  //       label: "Los Angeles",
  //       value: "LosAngeles",
  //     },
  //     {
  //       questionId: 1,
  //       label: "New York City",
  //       value: "NewYorkCity",
  //     },
  //   ],
  //   sort_order: 0,
  // },
  // {
  //   id: 2,
  //   questionTitle: "When are you moving?",
  //   name: "movingStartDate",
  //   type: "text",
  //   options: [
  //     {
  //       label: "Move In Date: ",
  //       value: "",
  //       name: "moveInDate",
  //     },
  //   ],
  //   sort_order: 10,
  // },
  {
    id: 3,
    questionTitle:
      "Which, out of this list, best characterize your interests? (select 3 to 6 )",
    name: "interests",
    type: "checkbox",
    options: [
      {
        questionId: 3,
        optionId: 1,
        label: "Programming",
        value: "Programming",
        name: "Programming",
      },
      {
        questionId: 3,
        optionId: 2,
        label: "Hiking/Camping",
        value: "HikingCamping",
        name: "HikingCamping",
      },
      {
        questionId: 3,
        optionId: 3,
        label: "Designing",
        value: "Designing",
        name: "Designing",
      },
      {
        questionId: 3,
        optionId: 4,
        label: "Playing board games",
        value: "BoardGames",
        name: "BoardGames",
      },
      {
        questionId: 3,
        optionId: 5,
        label: "Exercising",
        value: "Exercising",
        name: "Exercising",
      },
      {
        questionId: 3,
        optionId: 6,
        label: "Cooking/Baking",
        value: "CookingBaking",
        name: "CookingBaking",
      },

      {
        questionId: 3,
        optionId: 7,
        label: "Learning Languages",
        value: "LearningLanguages",
        name: "LearningLanguages",
      },
      {
        questionId: 3,
        optionId: 8,
        label: "Shopping",
        value: "Shopping",
        name: "Shopping",
      },
      {
        questionId: 3,
        optionId: 9,
        label: "Playing Instruments",
        value: "PlayingInstruments",
        name: "PlayingInstruments",
      },
      {
        questionId: 3,
        optionId: 10,
        label: "Performing",
        value: "Performing",
        name: "Performing",
      },
      {
        questionId: 3,
        optionId: 11,
        label: "DIY/Building",
        value: "DIYBuilding",
        name: "DIYBuilding",
      },
      {
        questionId: 3,
        optionId: 12,
        label: "Video Games",
        value: "VideoGames",
        name: "VideoGames",
      },
      {
        questionId: 3,
        optionId: 13,
        label: "Dancing",
        value: "Dancing",
        name: "Dancing",
      },
      {
        questionId: 3,
        optionId: 14,
        label: "Writing",
        value: "Writing",
        name: "Writing",
      },
      {
        questionId: 3,
        optionId: 15,
        label: "Partying",
        value: "Partying",
        name: "Partying",
      },
      {
        questionId: 3,
        optionId: 16,
        label: "Adventuring",
        value: "Adventuring",
        name: "Adventuring",
      },
      {
        questionId: 3,
        optionId: 17,
        label: "Playing Sports",
        value: "PlayingSports",
        name: "PlayingSports",
      },
      {
        questionId: 3,
        optionId: 18,
        label: "Watching Sports",
        value: "WatchingSports",
        name: "WatchingSports",
      },
      {
        questionId: 3,
        optionId: 19,
        label: "Vlogging/Blogging",
        value: "VloggingBlogging",
        name: "VloggingBlogging",
      },
      {
        questionId: 3,
        optionId: 20,
        label: "Listening to music",
        value: "ListeningMusic",
        name: "ListeningMusic",
      },
      {
        questionId: 3,
        optionId: 21,
        label: "Producing music",
        value: "ProducingMusic",
        name: "ProducingMusic",
      },
      {
        questionId: 3,
        optionId: 22,
        label: "Going to concerts",
        value: "GoingConcerts",
        name: "GoingConcerts",
      },
      {
        questionId: 3,
        optionId: 23,
        label: "Watching YouTube",
        value: "WatchingYoutube",
        name: "WatchingYoutube",
      },

      {
        questionId: 3,
        optionId: 24,
        label: "Being a foodie",
        value: "BeingFoodie",
        name: "BeingFoodie",
      },
    ],
    sort_order: 320,
  },
  //   {
  //     name: "How long are you moving for?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "3 months ",
  //         value: "3mo",
  //         name: "movingDuration",
  //       },
  //       {
  //         label: "6 months ",
  //         value: "6mo",
  //         name: "movingDuration",
  //       },
  //       {
  //         label: "9 months ",
  //         value: "9mo",
  //         name: "movingDuration",
  //       },
  //       {
  //         label: "1 year ",
  //         value: "1yr",
  //         name: "movingDuration",
  //       },
  //       {
  //         label: "N/A ",
  //         value: "NA",
  //         name: "movingDuration",
  //       },
  //     ],
  //     sort_order: 20,
  //   },
  //   {
  //     name: "What is your current age-range?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "17-20 ",
  //         value: "17-19",
  //         name: "ageRange",
  //       },
  //       {
  //         label: "21-23 ",
  //         value: "21-23",
  //         name: "ageRange",
  //       },
  //       {
  //         label: "24-26 ",
  //         value: "24-26",
  //         name: "ageRange",
  //       },
  //       {
  //         label: "27-29 ",
  //         value: "27-29",
  //         name: "ageRange",
  //       },
  //       {
  //         label: ">30 ",
  //         value: ">30",
  //         name: "ageRange",
  //       },
  //     ],
  //     sort_order: 30,
  //   },
  //   {
  //     name: "What university/college do you attend?",
  //     type: "select",
  //     options: [
  //       {
  //         label: "Stanford University ",
  //         value: "StanfordU",
  //         name: "college",
  //       },
  //       {
  //         label: "UC Berkeley ",
  //         value: "UCBerkeley",
  //         name: "college",
  //       },
  //       {
  //         label: "UCLA ",
  //         value: "UCLA",
  //         name: "college",
  //       },
  //       {
  //         label: "UT Austin ",
  //         value: "UTAustin",
  //         name: "college",
  //       },
  //       {
  //         label: "Harvard University",
  //         value: "HarvardU",
  //         name: "college",
  //       },
  //       {
  //         label: "Columbia University",
  //         value: "ColumbiaU",
  //         name: "college",
  //       },
  //       {
  //         label: "Yale University",
  //         value: "YaleU",
  //         name: "college",
  //       },
  //       {
  //         label: "Princeton University",
  //         value: "PrincetonU",
  //         name: "college",
  //       },
  //       {
  //         label: "MIT",
  //         value: "MIT",
  //         name: "college",
  //       },
  //     ],
  //     sort_order: 40,
  //   },
  //   {
  //     name: "What is your major?",
  //     type: "text",
  //     placeholder: "Computer Science",
  //     sort_order: 50,
  //   },
  //   {
  //     name: "Would you be open to sharing a room?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - not a chance ",
  //         value: "1",
  //         name: "sharingRoom",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "sharingRoom",
  //       },

  //       {
  //         label: "3",
  //         value: "3",
  //         name: "sharingRoom",
  //       },

  //       {
  //         label: "4",
  //         value: "4",
  //         name: "sharingRoom",
  //       },
  //       {
  //         label: "5 - sure!",
  //         value: "5",
  //         name: "sharingRoom",
  //       },
  //     ],
  //     sort_order: 60,
  //   },
  //   {
  //     name: "What is your monthly maximum budget for rent (including utilities)?",
  //     type: "slider",
  //     displayFormat: "currency",
  //     min: 0,
  //     max: 8000,
  //     step: 100,
  //     isRequired: true,
  //     sort_order: 70,
  //   },
  //   {
  //     name:
  //       "What is your gender identity? (*note: we never share any data from this form without your consent)",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "Man",
  //         value: "Man",
  //         name: "genderIdentity",
  //       },

  //       {
  //         label: "Woman",
  //         value: "Woman",
  //         name: "genderIdentity",
  //       },

  //       {
  //         label: "Non-Binary",
  //         value: "NB",
  //         name: "genderIdentity",
  //       },
  //       {
  //         label: "Other",
  //         value: "Other",
  //         name: "genderIdentity",
  //       },

  //       {
  //         label: "Prefer not to say",
  //         value: "PNTS",
  //         name: "sharingRoom",
  //       },
  //     ],
  //     sort_order: 80,
  //   },
  //   {
  //     name: "What type of housing do you prefer?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "Single-sex",
  //         value: "singleSex",
  //         name: "housingSex",
  //       },

  //       {
  //         label: "Coed",
  //         value: "Coed",
  //         name: "housingSex",
  //       },

  //       {
  //         label: "No preference",
  //         value: "NoPreference",
  //         name: "housingSex",
  //       },
  //     ],
  //     sort_order: 90,
  //   },
  //   {
  //     name: "Do you identify as LGBTQ+?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "Yes",
  //         value: "Yes",
  //         name: "lgbtqAffiliation",
  //       },

  //       {
  //         label: "No",
  //         value: "No",
  //         name: "lgbtqAffiliation",
  //       },

  //       {
  //         label: "Prefer not to say",
  //         value: "Other",
  //         name: "lgbtqAffiliation",
  //       },
  //     ],
  //     sort_order: 100,
  //   },
  //   {
  //     name:
  //       "If you answered 'yes' to the previous question, how important is it for your roommate to also be LGBTQ+?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - no preference",
  //         value: "1",
  //         name: "lgbtqPreference",
  //       },

  //       {
  //         label: "No",
  //         value: "2",
  //         name: "lgbtqPreference",
  //       },
  //       {
  //         label: "No",
  //         value: "3",
  //         name: "lgbtqPreference",
  //       },
  //       {
  //         label: "No",
  //         value: "4",
  //         name: "lgbtqPreference",
  //       },
  //       {
  //         label: "5 - very important!",
  //         value: "5",
  //         name: "lgbtqPreference",
  //       },
  //     ],
  //     sort_order: 110,
  //   },
  //   {
  //     name: "How religious are you?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - not religious at all",
  //         value: "1",
  //         name: "religiousLevel",
  //       },

  //       {
  //         label: "No",
  //         value: "2",
  //         name: "religiousLevel",
  //       },
  //       {
  //         label: "No",
  //         value: "3",
  //         name: "religiousLevel",
  //       },
  //       {
  //         label: "No",
  //         value: "4",
  //         name: "religiousLevel",
  //       },
  //       {
  //         label: "5 - very religious!",
  //         value: "5",
  //         name: "religiousLevel",
  //       },
  //     ],
  //     sort_order: 120,
  //   },
  //   {
  //     name: "What is your preference for your roommate's religiosity?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - no preference",
  //         value: "1",
  //         name: "religiousPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "religiousPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "religiousPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "religiousPreference",
  //       },
  //       {
  //         label: "5 - prefer same as me",
  //         value: "5",
  //         name: "religiousPreference",
  //       },
  //     ],
  //     sort_order: 130,
  //   },
  //   {
  //     name: "Where do you lie on the political spectrum?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "Liberal",
  //         value: "Liberal",
  //         name: "politicalAffiliation",
  //       },

  //       {
  //         label: "Moderate",
  //         value: "Moderate",
  //         name: "politicalAffiliation",
  //       },
  //       {
  //         label: "Conservative",
  //         value: "Conservative",
  //         name: "politicalAffiliation",
  //       },
  //       {
  //         label: "Libertarian",
  //         value: "Libertarian",
  //         name: "politicalAffiliation",
  //       },
  //       {
  //         label: "Other",
  //         value: "Other",
  //         name: "politicalAffiliation",
  //       },
  //     ],
  //     sort_order: 140,
  //   },
  //   {
  //     name: "How political are you?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - not political ",
  //         value: "1",
  //         name: "politicalLevel",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "politicalLevel",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "politicalLevel",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "politicalLevel",
  //       },
  //       {
  //         label: "5 - very political",
  //         value: "5",
  //         name: "politicalLevel",
  //       },
  //     ],
  //     sort_order: 150,
  //   },
  //   {
  //     name: "What is your preference for your roommate's political beliefs?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - no preference ",
  //         value: "1",
  //         name: "politicalPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "politicalPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "politicalPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "politicalPreference",
  //       },
  //       {
  //         label: "5 - prefer same affiliation to me",
  //         value: "5",
  //         name: "politicalPreference",
  //       },
  //     ],
  //     sort_order: 160,
  //   },
  //   {
  //     name: "How neat/tidy are you (in shared spaces specifically)?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - I am not particularly neat",
  //         value: "1",
  //         name: "neatnessLevel",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "neatnessLevel",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "neatnessLevel",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "neatnessLevel",
  //       },
  //       {
  //         label: "5 - extremely neat",
  //         value: "5",
  //         name: "neatnessLevel",
  //       },
  //     ],
  //     sort_order: 170,
  //   },
  //   {
  //     name:
  //       "What is your preference for your roommate’s cleanliness? (in shared spaces specifically)?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - no preference",
  //         value: "1",
  //         name: "neatnessPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "neatnessPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "neatnessPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "neatnessPreference",
  //       },
  //       {
  //         label: "5 - prefer same as me",
  //         value: "5",
  //         name: "neatnessPreference",
  //       },
  //     ],
  //     sort_order: 180,
  //   },
  //   {
  //     name:
  //       "How often do you drink alcohol? (* this will be private unless you indicate otherwise)",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - never",
  //         value: "1",
  //         name: "drinkingLevel",
  //       },

  //       {
  //         label: "2 - sometimes",
  //         value: "2",
  //         name: "drinkingLevel",
  //       },
  //       {
  //         label: "3 - most weekends",
  //         value: "3",
  //         name: "drinkingLevel",
  //       },
  //       {
  //         label: "4 - every weekend",
  //         value: "4",
  //         name: "drinkingLevel",
  //       },
  //       {
  //         label: "5 - every day",
  //         value: "5",
  //         name: "drinkingLevel",
  //       },
  //     ],
  //     sort_order: 190,
  //   },
  //   {
  //     name: "What is your preference on your roommate's drinking?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - no preference",
  //         value: "1",
  //         name: "drinkingPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "drinkingPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "drinkingPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "drinkingPreference",
  //       },
  //       {
  //         label: "5 - prefer same behavior as me",
  //         value: "5",
  //         name: "drinkingPreference",
  //       },
  //     ],
  //     sort_order: 200,
  //   },
  //   {
  //     name: "How often do you smoke marijuana?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - never",
  //         value: "1",
  //         name: "potLevel",
  //       },

  //       {
  //         label: "2 - sometimes",
  //         value: "2",
  //         name: "potLevel",
  //       },
  //       {
  //         label: "3 - most weekends",
  //         value: "3",
  //         name: "potLevel",
  //       },
  //       {
  //         label: "4 - every weekend",
  //         value: "4",
  //         name: "potLevel",
  //       },
  //       {
  //         label: "5 - every day",
  //         value: "5",
  //         name: "potLevel",
  //       },
  //     ],
  //     sort_order: 210,
  //   },
  //   {
  //     name:
  //       "What is your preference on your roommate's marijuana smoking habits?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - no preference",
  //         value: "1",
  //         name: "potPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "potPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "potPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "potPreference",
  //       },
  //       {
  //         label: "5",
  //         value: "5",
  //         name: "potPreference",
  //       },
  //     ],
  //     sort_order: 220,
  //   },
  //   {
  //     name: "How often do you smoke cigarettes?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - never",
  //         value: "1",
  //         name: "smokingLevel",
  //       },

  //       {
  //         label: "2 - sometimes",
  //         value: "2",
  //         name: "smokingLevel",
  //       },
  //       {
  //         label: "3 - most weekends",
  //         value: "3",
  //         name: "smokingLevel",
  //       },
  //       {
  //         label: "4 - every weekend",
  //         value: "4",
  //         name: "smokingLevel",
  //       },
  //       {
  //         label: "5 - every day",
  //         value: "5",
  //         name: "smokingLevel",
  //       },
  //     ],
  //     sort_order: 230,
  //   },
  //   {
  //     name:
  //       "What is your preference on your roommate's cigarette smoking habits?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - no preference",
  //         value: "1",
  //         name: "smokingPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "smokingPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "smokingPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "smokingPreference",
  //       },
  //       {
  //         label: "5 - prefer same as me",
  //         value: "5",
  //         name: "smokingPreference",
  //       },
  //     ],
  //     sort_order: 240,
  //   },
  //   {
  //     name:
  //       "What is your preference on your roommate's cigarette smoking habits?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - never",
  //         value: "1",
  //         name: "bringingFriendsLevel",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "bringingFriendsLevel",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "bringingFriendsLevel",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "bringingFriendsLevel",
  //       },
  //       {
  //         label: "5 - all the time",
  //         value: "5",
  //         name: "bringingFriendsLevel",
  //       },
  //     ],
  //     sort_order: 250,
  //   },
  //   {
  //     name: "How do you feel about your roommate bringing friends over?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - the less frequent, the better",
  //         value: "1",
  //         name: "bringingFriendsPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "bringingFriendsPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "bringingFriendsPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "bringingFriendsPreference",
  //       },
  //       {
  //         label: "5 - the more, the merrier",
  //         value: "5",
  //         name: "bringingFriendsPreference",
  //       },
  //     ],
  //     sort_order: 260,
  //   },
  //   {
  //     name: "What type of relationship do you want with your roommate?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1 - just need a roommate",
  //         value: "1",
  //         name: "roommateDesiredRelationship",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "roommateDesiredRelationship",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "roommateDesiredRelationship",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "roommateDesiredRelationship",
  //       },
  //       {
  //         label: "5 - I want to be best friends",
  //         value: "5",
  //         name: "roommateDesiredRelationship",
  //       },
  //     ],
  //     sort_order: 270,
  //   },
  //   {
  //     name: "What is your relationship status? ",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "Single and not looking",
  //         value: "1",
  //         name: "roommateDesiredRelationship",
  //       },

  //       {
  //         label: "Single and looking ",
  //         value: "2",
  //         name: "roommateDesiredRelationship",
  //       },
  //       {
  //         label: "In a relationship",
  //         value: "3",
  //         name: "roommateDesiredRelationship",
  //       },
  //       {
  //         label: "It's complicated",
  //         value: "4",
  //         name: "roommateDesiredRelationship",
  //       },
  //       {
  //         label: "Prefer not to say",
  //         value: "5",
  //         name: "roommateDesiredRelationship",
  //       },
  //     ],
  //     sort_order: 280,
  //   },

  //   {
  //     name: "What is your preference on your roommate’s relationship status?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1- no preference",
  //         value: "1",
  //         name: "relationshipStatusPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "5 - prefer same as me",
  //         value: "5",
  //         name: "relationshipStatusPreference",
  //       },
  //     ],
  //     sort_order: 290,
  //   },
  //   {
  //     name: "How would you describe your spending habits?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1- very frugal",
  //         value: "1",
  //         name: "relationshipStatusPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "5 - not frugal at all",
  //         value: "5",
  //         name: "relationshipStatusPreference",
  //       },
  //     ],
  //     sort_order: 300,
  //   },

  //   {
  //     name: "What is your preference on your roommate's spending habits?",
  //     type: "radio",
  //     options: [
  //       {
  //         label: "1- no preference",
  //         value: "1",
  //         name: "relationshipStatusPreference",
  //       },

  //       {
  //         label: "2",
  //         value: "2",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "3",
  //         value: "3",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "4",
  //         value: "4",
  //         name: "relationshipStatusPreference",
  //       },
  //       {
  //         label: "5 - prefer same as me",
  //         value: "5",
  //         name: "relationshipStatusPreference",
  //       },
  //     ],
  //     sort_order: 310,
  //   },
];

module.exports = {
  questions,
};
