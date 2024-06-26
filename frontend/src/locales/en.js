export default {
  translation: {
    languages: {
      title: 'Switch languages',
      ru: 'ru',
      en: 'en',
    },
    theme: {
      title: 'Switch color theme',
      light: 'light',
      dark: 'dark',
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
        first_1_P: 'I\'m a beginner front-end developer. ',
        second_1_p: 'My passion for programming began in 2021, and quite by accident. Thanks to YouTube recommendations, I took a short training course on the basics of Python and decided that ',
        second_2_sp: 'programming ',
        second_3_p: 'would be a great hobby, because it ',
        second_4_sp: 'gives you the opportunity to solve complex problems and constantly develop',
        second_5_p: '. Then, until 2023, I took several more courses on the basics of Python, Java and JavaScript. And after a lot of analysis and thought, I realized that ',
        second_6_sp: 'programming is not just a hobby or a profession, but a whole way of life and something to which I would like to devote my life. ',
        third_1_p: 'And I chose Frontend directly because, in addition to solving complex problems, ',
        third_2_sp: 'I like to work with graphics and UX/UI',
        third_3_p: ', and partly, seeing the fruits of my labor "come to life."',
        fourth_1_p: 'In March of this year ',
        fourth_2_sp: 'I graduated ',
        fourth_3_p: 'from the ',
        fourth_4_sp: '"Hexlet" ',
        fourth_5_p: 'programming school, but I continue to develop as a developer. ',
        fourth_6_sp: 'I also have a higher education in economics. ',
        fifth_1_p: 'My perseverance and diligence help me to completely immerse myself in solving problems and successfully cope with them, despite possible difficulties (',
        fifth_2_sp: 'I successfully completed all exercises 100%',
        fifth_2_p: ', without prompts). In addition, I always strive for an ideal result and perform my work as responsibly as possible. ',
        sixth_1_sp: 'I have extensive experience in managing my own business',
        sixth_1_p: ', and I think this is one of my advantages. Because this experience gave me many useful soft skills that are needed for coordinated and productive work in a team. ',
      },
    },
    skills: {
      title: 'My skills and experience',
      educExp: {
        title: 'MY DEVELOPMENT EXPERIENCE INCLUDES EDUCATIONAL PROJECTS ON "HEXLET"',
        base: {
          title: 'Basic projects',
          desc_bg_a: '"Mind Games" ',
          desc_bg_p: ' - a package of five console games. ',
          desc_dc_a: '"Difference Calculator" ',
          desc_dc_p: ' is a command line utility (cli) that determines the difference between two data structures. ',
          desc_ra_a: '"RSS aggregator" ',
          desc_ra_p: ' - service for aggregating RSS feeds. ',
          ul: 'Within these projects I implemented:',
          li_1: 'layout using Bootstrap and working with DOM;',
          li_2: 'working with JavaScript, using algorithms and working with data structure. And also the use of the MVC design pattern;',
          li_3: 'code linting using Eslint, using the Airbnb standard. Debugging and testing projects using the Jest framework;',
          li_4: 'working with asynchronous http requests using Axios;',
          li_5: 'build using Webpack and deploy the project to Vercel.',
          usedStack: 'Stack used: JavaScript, Node.JS (working with npm), Bootstrap, Eslint + Airbnb, Jest, Yup, i18next, Axios, Webpack, Vercel',
        },
        diploma: {
          title: 'Diploma project',
          desc_sc_a: 'Real-time application',
          desc_sc_p: ', analogue of Slack chat (simplified version).',
          ul: 'As part of the project I implemented',
          li_1: 'layout using functional components React, React-Bootstrap;',
          li_2: 'working with context and providers, for language transfer and authorization, as well as working with storage using the Redux Toolkit;',
          li_3: 'page routing using React-Router-Dom;',
          li_4: 'internationalization, for Russian and English languages, using i18next;',
          li_5: 'working with forms using Formik, including the authorization form. As well as validation (Yup) and filtering (Leo-Profanity) of the entered data;',
          li_6: 'work with the backend using socket.io, Axios, using the REST API;',
          li_7: 'project build (Webpack), deployment (Render.com) and error monitoring in production (Rollbar);',
          usedStack: 'Stack used: JavaScript, Node.JS (working with npm), React, React-Dom, React-Router-Dom, React-Bootstrap, React-Redux, Redux Toolkit, Formik, React-Toastify, Eslint + Airbnb, Yup, i18next, Leo-Profanity, REST API, Axios, Socket.io, Webpack, Render.com, Rollbar',
        },
      },
      examples: {
        promiseExam: 'there will be a component here',
        firstExam_1: 'I can make various useful components',
        firstExam_2: 'using standard methods or third-party libraries',
        firstExam_3: 'For example - login forms with validation ("Formik" and "YUP")',
        secondExam_1: 'I know how to work with providers and context',
        secondExam_2: 'create custom hooks and selectors',
        secondExam_3: 'For example - to change the theme or localize the site',
        thirdExam_1: 'I know how to work with state',
        thirdExam_2: 'using useState or Redux Toolkit',
        thirdExam_3: 'And also how to work with filtering the entered data',
        otherExam: 'This is just a small part, because... I\'m constantly developing my skills',
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
            link: 'Register',
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
          footer: {
            text: 'Have an account? ',
            link: 'Login',
          },
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
        signUp: 'Register',
        logOut: 'LogOut',
        up: 'Up',
        back: 'Back',
        addTodo: 'Фdd task',
        resetTodo: 'Delete tasks',
        prevPage: 'Previous page',
        nextPage: 'Next page',
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
