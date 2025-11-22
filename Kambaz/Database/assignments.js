const assignments = [
  { 
    "_id": "A101", 
    "title": "Introduction Assignment", 
    "course": "CS101", 
    "description": "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.",
    "points": 100,
    "dueDate": "09-22-2024",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-09-29"
  },
  { 
    "_id": "A102", 
    "title": "UI Prototype Project", 
    "course": "CS101",
    "description": "Create a responsive UI prototype using modern design principles. Your prototype should demonstrate understanding of user interface design patterns, accessibility standards, and mobile-first development approaches.",
    "points": 150,
    "dueDate": "2024-10-06",
    "availableFrom": "2024-09-22",
    "availableUntil": "2024-10-13"
  },
  { 
    "_id": "A103", 
    "title": "CSS Styling Assignment", 
    "course": "CS101",
    "description": "Apply advanced CSS techniques including Flexbox, Grid, animations, and responsive design. Create a visually appealing and functional stylesheet that demonstrates mastery of modern CSS features.",
    "points": 100,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-06",
    "availableUntil": "2024-10-27"
  },

  { 
    "_id": "A201", 
    "title": "Data Wrangling Assignment", 
    "course": "CS102",
    "description": "Clean and transform raw data using Python and pandas. Handle missing values, perform data type conversions, and prepare datasets for analysis. Document your data cleaning process thoroughly.",
    "points": 100,
    "dueDate": "2024-09-22",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-09-29"
  },
  { 
    "_id": "A202", 
    "title": "Data Visualization Project", 
    "course": "CS102",
    "description": "Create interactive visualizations using libraries like D3.js or Plotly. Your visualizations should tell a compelling story with data and include multiple chart types, filters, and responsive design.",
    "points": 150,
    "dueDate": "2024-10-06",
    "availableFrom": "2024-09-22",
    "availableUntil": "2024-10-13"
  },
  { 
    "_id": "A203", 
    "title": "Interactive Dashboard Task", 
    "course": "CS102",
    "description": "Build a full-featured interactive dashboard that displays real-time data analytics. Include user controls, multiple visualization types, and data filtering capabilities.",
    "points": 200,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-06",
    "availableUntil": "2024-10-27"
  },

  { 
    "_id": "A301", 
    "title": "Deploy Cloud App Assignment", 
    "course": "CS103",
    "description": "Deploy a web application to a cloud platform (AWS, Azure, or GCP). Configure proper scaling, security settings, and monitoring. Document the deployment process and architecture decisions.",
    "points": 100,
    "dueDate": "2024-09-22",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-09-29"
  },
  { 
    "_id": "A302", 
    "title": "Cloud Scaling Task", 
    "course": "CS103",
    "description": "Implement auto-scaling and load balancing for your cloud application. Test performance under various load conditions and optimize resource allocation.",
    "points": 150,
    "dueDate": "2024-10-06",
    "availableFrom": "2024-09-22",
    "availableUntil": "2024-10-13"
  },
  { 
    "_id": "A303", 
    "title": "Cloud Security Project", 
    "course": "CS103",
    "description": "Implement security best practices for cloud applications including encryption, authentication, authorization, and security monitoring. Conduct a security audit of your deployment.",
    "points": 150,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-06",
    "availableUntil": "2024-10-27"
  },

  { 
    "_id": "A401", 
    "title": "OOP Design Assignment", 
    "course": "CS104",
    "description": "Design and implement a complex system using object-oriented principles. Focus on encapsulation, inheritance, polymorphism, and SOLID principles. Include UML diagrams.",
    "points": 100,
    "dueDate": "2024-09-22",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-09-29"
  },
  { 
    "_id": "A402", 
    "title": "Functional Programming Task", 
    "course": "CS104",
    "description": "Solve programming challenges using functional programming paradigms. Implement higher-order functions, pure functions, and immutable data structures.",
    "points": 100,
    "dueDate": "2024-10-06",
    "availableFrom": "2024-09-22",
    "availableUntil": "2024-10-13"
  },
  { 
    "_id": "A403", 
    "title": "Design Patterns Exercise", 
    "course": "CS104",
    "description": "Implement common design patterns including Singleton, Factory, Observer, and Strategy patterns. Demonstrate when and why each pattern should be used.",
    "points": 150,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-06",
    "availableUntil": "2024-10-27"
  },

  { 
    "_id": "A501", 
    "title": "Algorithm Implementation", 
    "course": "CS105",
    "description": "Implement classic algorithms including graph traversal, dynamic programming solutions, and greedy algorithms. Analyze time and space complexity.",
    "points": 100,
    "dueDate": "2024-09-22",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-09-29"
  },
  { 
    "_id": "A502", 
    "title": "Sorting & Searching Assignment", 
    "course": "CS105",
    "description": "Implement and compare various sorting and searching algorithms. Conduct performance analysis and discuss trade-offs between different approaches.",
    "points": 100,
    "dueDate": "2024-10-06",
    "availableFrom": "2024-09-22",
    "availableUntil": "2024-10-13"
  },
  { 
    "_id": "A503", 
    "title": "Problem Solving Task", 
    "course": "CS105",
    "description": "Solve complex algorithmic problems using appropriate data structures and algorithms. Focus on optimization and efficient solutions.",
    "points": 150,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-06",
    "availableUntil": "2024-10-27"
  },

  { 
    "_id": "A601", 
    "title": "AI Basics Assignment", 
    "course": "CS106",
    "description": "Implement basic AI concepts including search algorithms, knowledge representation, and simple machine learning models. Document your approach and results.",
    "points": 100,
    "dueDate": "2024-09-22",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-09-29"
  },
  { 
    "_id": "A602", 
    "title": "Search & Logic Task", 
    "course": "CS106",
    "description": "Implement intelligent search algorithms (A*, hill climbing) and logic-based reasoning systems. Apply these to solve real-world problems.",
    "points": 150,
    "dueDate": "2024-10-06",
    "availableFrom": "2024-09-22",
    "availableUntil": "2024-10-13"
  },
  { 
    "_id": "A603", 
    "title": "Learning Algorithms Project", 
    "course": "CS106",
    "description": "Build a machine learning model from scratch. Implement training, validation, and testing phases. Analyze model performance and tune hyperparameters.",
    "points": 200,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-06",
    "availableUntil": "2024-10-27"
  },

  { 
    "_id": "A701", 
    "title": "Graphics Basics Assignment", 
    "course": "CS107",
    "description": "Implement fundamental computer graphics concepts including 2D transformations, color models, and basic rendering techniques.",
    "points": 100,
    "dueDate": "2024-09-22",
    "availableFrom": "2024-09-15",
    "availableUntil": "2024-09-29"
  },
  { 
    "_id": "A702", 
    "title": "Rendering & Animation Task", 
    "course": "CS107",
    "description": "Create 3D graphics with proper lighting, shading, and texture mapping. Implement smooth animations using keyframes and interpolation.",
    "points": 150,
    "dueDate": "2024-10-06",
    "availableFrom": "2024-09-22",
    "availableUntil": "2024-10-13"
  },
  { 
    "_id": "A703", 
    "title": "Interactive Visuals Project", 
    "course": "CS107",
    "description": "Develop an interactive graphics application with user controls, real-time rendering, and visual effects. Demonstrate advanced graphics programming techniques.",
    "points": 200,
    "dueDate": "2024-10-20",
    "availableFrom": "2024-10-06",
    "availableUntil": "2024-10-27"
  }
]
export default assignments;