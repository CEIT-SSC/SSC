type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'CE Student Scientific Association',
    fullName: 'CEIT-SSC',
    email: 'ceit.ssc94@gmail.com',
  },
  hero: {
    name: 'Student Scientific Association ',
    p: [
      'organizing extracurricular educational activities',
      'in order to improve the quality of education and student life in the department',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: '',
      h2: 'About Us',
      content: `At the Student Scientific Club of Amirkabir University, our goal is to encourage students to engage in extracurricular events, talks, workshops, and tours in order to help spark interest in various topics in the field as well as create environments for people to build strong connections with those of the same interests. Our network connects undergraduates and graduate students to opportunities in academia and industry. We support and encourage prospective computer science majors and hope to provide direction and assistance to those interested in the field.`,
    },
    experience: {
      h2: 'Timeline',
      p: 'Here you can view a timeline of the events we held in the past year:',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: '',
      h2: 'Our executive board',
      content: ``,
    },
  },
};
