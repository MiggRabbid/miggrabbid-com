export default {
  translation: {
    languages: {
      ru: 'ru',
      en: 'en',
    },
    header: {
      title: 'Hi there! My name is Anatoliy',
      links: {
        git: 'My GitHub',
        tg: 'My Telegram',
        habr: 'My Habr',
        in: 'My LinkedIn',
        em: 'My Email',
      },
    },
    main: {
      title: 'I`m frontend developer',
      menu: {
        stack: 'Stack',
        about: 'About',
        skills: 'Skills',
      },
      dev: 'THIS SITE IS UNDER DEVELOPMENT',
    },
    stack: {
      title: 'My stack',
    },
    aboutMe: {
      title: 'About me',
      description: {
        first_1_P: 'I\'m a beginner Frontend developer. ',
        second_1_p: 'My journey in programming began in 2021. Thanks to recommendations from YouTube, I took a short tutorial on the basics of Python, and since ',
        second_2_sp: 'I love solving difficult problems ',
        second_3_p: 'and flexing my brain, I really enjoyed it. ',
        third_1_p: 'Until 2023, I took several more courses on the basics of "Python", "Java" and "JavaScript". After much analysis and deliberation, I decided to devote my life to development. I chose Frontend because, in addition to solving complex problems, ',
        third_2_sp: 'I like working with graphics and UX/UI. ',
        fourth_1_p: 'In March of this year ',
        fourth_2_sp: 'I graduated ',
        fourth_3_p: 'from the ',
        fourth_4_sp: '"Hexlet" ',
        fourth_5_p: 'programming school, but I continue to develop as a developer. And ',
        fourth_6_sp: 'I have a university degree in economics. ',
        fifth_1_p: 'Perseverance and diligence allow me to focus on tasks and solve them successfully, even if it requires significant effort (',
        fifth_2_sp: 'on Hexlet all problems are solved 100% ',
        fifth_2_p: ', without prompts). Perfectionism and responsibility help me bring my work to Pixel Perfect. ',
        sixth_1_sp: 'I have extensive experience in managing my own business. ',
        sixth_1_p: 'This taught me to effectively communicate and interact with employees and colleagues, take their opinions into account and share my own, as well as jointly solve any tasks and problems. ',
      },
    },
    skills: {
      title: 'My skills and experience',
      educExp: {
        title: 'MY DEVELOPMENT EXPERIENCE INCLUDES EDUCATIONAL PROJECTS ON "HEXLET"',
        base: {
          title: 'Basic projects',
          desc_bg_a: '"Brain Games" ',
          desc_bg_p: '- five console game pack, ',
          desc_dc_a: '"Difference Calculator" ',
          desc_dc_p: '- command line utility (cli), ',
          desc_ra_a: '"RSS aggregatorр" ',
          desc_ra_p: '- service for aggregation of RSS feeds. ',
          ul: 'As part of these projects, I implemented:',
          li_1: 'working with Ubuntu within WSL, working with Node.js (within the command line and NPM);',
          li_2: 'working with JavaScript, using algorithms and working with data structure. And also applying the MVC design pattern;',
          li_3: 'code linting using Eslint, using the Airbnb standard. Debug and test projects using the Jest framework;',
          li_4: 'layout using Bootstrap and working with DOM;',
          li_5: 'working with asynchronous HTTP requests using Axios;',
          li_6: 'build using Webpack and deploy the project to Vercel.',
          usedStack: 'Stack used: JavaScript, Node.JS (working with npm), Bootstrap, Eslint + Airbnb, Jest, Yup, i18next, Axios, Webpack, Vercel.',
        },
        diploma: {
          title: 'Diploma project',
          desc_sc_a: ' Real-time app',
          desc_sc_p: ' , analogue of Slack chat (simplified version).',
          ul: 'As part of the project, I implemented',
          li_1: 'layout using functional components React, React-Bootstrap;',
          li_2: 'working with context and providers, for language transfer and authorization, as well as working with storage using the Redux Toolkit;',
          li_3: 'routing across pages using React-Router-Dom;',
          li_4: 'internationalization, for Russian and English languages, using i18next;',
          li_5: 'working with forms, including: authorization, creating/changing channels and sending messages. As well as validation (Yup) and filtering (Leo-Profanity) of entered data;',
          li_6: 'working with the backend using socket.io, Axios. Using REST API;',
          li_7: 'project assembly (Webpack), deployment (Render.com) and error monitoring in production (Rollbar);',
          usedStack: 'Stack used: JavaScript, Node.JS (working with npm), React, React-Dom, React-Router-Dom, React-Bootstrap, React-Redux, Redux Toolkit, Formik, React-Toastify, Eslint + Airbnb, Yup, i18next , Leo-Profanity, REST API, Axios, Socket.io, Webpack, Render.com, Rollbar.',
        },
      },
      examples: {
        title: 'My skills',
        promiseExam: 'here will be a component',
        firstExam: 'I can create various forms for data entry, both using standard methods and using third-party libraries, such as Formik. For example, registration/authorization forms, with validation and filtering of input data',
        secondExam: 'I can work with providers and contexts. For example, to switch themes or localize a site',
        fourthExam: 'I can work with state, both standard useState and using Redux Toolkit',
        fifthExam: 'I can work with modal windows',
        otherExam: 'And this is just a small part. Plus I continue to develop my skills.',
      },
    },
    notFound: {
      errorNumber: 404,
      exclamation: 'Oops!',
      notFound: 'Page not found',
      goOut: 'But you can go to the main page',
      button: 'Return',
    },
    templates: {
      authorization: {
        logIn: {
          title: 'LogIn',
          footer: {
            text: 'No account? ',
            link: 'SignUp',
          },
          inputName: {
            label: 'Username',
            placeholder: 'Username',
          },
          inputPass: {
            label: 'Password',
            placeholder: 'Password',
          },

        },
        signUp: {
          title: 'Registration',
          inputName: {
            label: 'Username',
            placeholder: 'Username - 3 to 20 symbols',
          },
          inputPass: {
            label: 'Password',
            placeholder: 'Password - at least 6 symbols',
          },
          inputConfirmPass: {
            label: 'Confirm password',
            placeholder: 'Passwords must match',
          },
        },
        userEntered: {
          title: ', welcome',
          LogIn: 'Authorization',
          SignUp: 'Registration',
          text: 'completed successfully',
        },
      },
      buttons: {
        logIn: 'LogIn',
        signUp: 'SignUp',
        logOut: 'LogOut',
      },
      modal: {
        success: 'Everything is fine',
      },
    },
    errors: {
      invalidNameOrPass: 'Неверные имя пользователя или пароль',
      unknownErr: 'Неизвестная ошибка',
      networkErr: 'Ошибка соединения',
    },
    validationError: {
      unknownErr: 'Unknown error',
      networkErr: 'Connection error',
      thisUserExists: 'This user already exists',
      thisUserDoesNotExists: 'This user does not exist',
      wronglengthName: 'from 3 to 20 characters',
      wronglengthPass: 'At least 6 characters',
      invalidPassConfirm: 'Passwords should match',
      requiredField: 'Required field',
    },
  },
};
