/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line prefer-const
let resumeData = {
  imagebaseurl: 'https://parekhjigar.com',
  name: 'Jigar Parekh',
  role: 'Frontend Developer',
  linkedinId: 'LinkedIn Id',
  roleDescription:
    'Pursuing Master of Information Technology, specialized in Deep Learning, Machine Learning and Computer Vision along with Web-development and Cloud solutions. Take a look at my work and if you like it I would love to hear from you!',
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jigar-parekh-9988b499/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'https://github.com/parekhjigar',
      className: 'fa fa-github',
    },
  ],
  aboutme: 'I am currently pursuing Master of Information Technology from RMIT University.',
  address: 'Melbourne, Australia',
  email: 'hello@parekhjigar.com',
  education: [
    {
      UniversityName: 'RMIT University',
      specialization: 'Master of Information Technology',
      MonthOfPassing: 'Dec',
      YearOfPassing: '2020',
    },
    {
      UniversityName: 'Mumbai University',
      specialization: 'Bachelor of Computer Engineering',
      MonthOfPassing: 'July',
      YearOfPassing: '2018',
    },
  ],
  projects: [
    {
      projectName: 'Head-pose-estimation-cnn',
      projectDesc:
        'CNN model capable of estimating Head Pose of a person from monocular face images which is quantified by Tilt: Vertical angle of the head and Pan: Horizontal angle of the head.',
      techStack: 'Python, Convolutional Neural Network',
    },
    {
      projectName: 'E-commerce Webapp',
      projectDesc: 'A React based e-commerce webapp with integration of PayPal',
      techStack: 'MERN (MongoDB, Express, React & Node)',
      url: 'https://github.com/parekhjigar/MERN-Stack',
    },
    {
      projectName: 'React Dashboard',
      projectDesc: 'A KPI dashboard to visualise sales data',
      techStack: 'React, Fusion Charts',
      url: 'https://github.com/parekhjigar/react-dashboard',
    },
    {
      projectName: 'Course Garage',
      projectDesc: 'A serverless webapp built with React and hosted on AWS',
      techStack: 'React, AWS S3, DynamoDB, SageMaker, Lambda, API Gateway, CloudFront',
      url: 'https://github.com/parekhjigar/course-garage',
    },
    {
      projectName: 'Employee Management Webapp',
      projectDesc:
        'A functional CRUD web-app using Flask to add, list, edit and delete roles and departments',
      techStack: 'Python, Flask, SQLAlchemy',
      url: 'https://github.com/parekhjigar/Employee-management-flask',
    },
    {
      projectName: 'Traffic Sign CNN',
      projectDesc: 'A convolutional neural network to classify traffic sign and shape',
      techStack: 'Python, Convolutional Neural Network',
      url: 'https://github.com/parekhjigar/Traffic-sign-classifier-cnn',
    },
    {
      projectName: 'Covid Chest Xray CNN',
      projectDesc: 'A convolutional neural network to classify between Covid-19 and Normal Xray',
      techStack: 'Python, Convolutional Neural Network',
      url: 'https://github.com/parekhjigar/covid-chestxray-cnn',
    },
    {
      projectName: 'Sign Language Interpreter',
      projectDesc:
        'Detecting and Recognizing hand gestures of Indian Hand Sign Language. Blender 3D Models to Teach Language',
      techStack: 'Python, Computer Vision, Convolutional Neural Network',
      url: 'http://sign-language-tool.herokuapp.com',
    },
    {
      projectName: 'Planogram Detection',
      projectDesc:
        'Detecting logo of the products placed in the shelf and give a report for the Brand Share of Shelf Space which can be further used for Products Placement to improve the sales.',
      techStack: 'Python, Computer Vision, Convolutional Neural Network',
    },
  ],
};

export default resumeData;
