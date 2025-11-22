const modules = [
  {
    "_id": "M101",
    "name": "Objectives",
    "description": "Basic introduction to the course and its objectives.",
    "course": "CS101",
    "lessons": [
      {
        "_id": "L101",
        "name": "Introduction to Course",
        "description": "Overview of the course structure and goals.",
        "module": "M101"
      },
      {
        "_id": "L102",
        "name": "What is Web Development?",
        "description": "Introduction to web development and technologies used.",
        "module": "M101"
      },
      {
        "_id": "L103",
        "name": "Setting Up the Environment",
        "description": "Setting up the development environment for full stack projects.",
        "module": "M101"
      }
    ]
  },
  {
    "_id": "M102",
    "name": "Prototyping the React Kambaz UI with HTML",
    "description": "Learn to create UI prototypes using HTML and React components.",
    "course": "CS101",
    "lessons": [
      {
        "_id": "L201",
        "name": "Learn to Create User Interface",
        "description": "Building the initial UI structure using HTML.",
        "module": "M102"
      },
      {
        "_id": "L202",
        "name": "Keep Working on the Assignment",
        "description": "Incrementally develop the course assignment.",
        "module": "M102"
      },
      {
        "_id": "L203",
        "name": "Deploy the Assignment",
        "description": "Deploy your first React assignment online.",
        "module": "M102"
      }
    ]
  },
  {
    "_id": "M103",
    "name": "Styling Web Pages with CSS and Bootstrap",
    "description": "Learn CSS fundamentals and Bootstrap styling for responsive design.",
    "course": "CS101",
    "lessons": [
      {
        "_id": "L301",
        "name": "Introduction to CSS",
        "description": "Basics of CSS for styling web pages.",
        "module": "M103"
      },
      {
        "_id": "L302",
        "name": "Selectors by Tag and ID",
        "description": "Understanding CSS selectors for targeting elements.",
        "module": "M103"
      },
      {
        "_id": "L303",
        "name": "Color and Background Color",
        "description": "Applying colors, backgrounds, and themes to pages.",
        "module": "M103"
      }
    ]
  },
  {
    "_id": "M201",
    "name": "Introduction to Data Science",
    "description": "Overview of data science concepts and tools.",
    "course": "CS102",
    "lessons": [
      {
        "_id": "L401",
        "name": "Data Science Basics",
        "description": "Understanding what data science is and its applications.",
        "module": "M201"
      },
      {
        "_id": "L402",
        "name": "Data Wrangling",
        "description": "Techniques to clean and prepare datasets.",
        "module": "M201"
      },
      {
        "_id": "L403",
        "name": "Data Visualization",
        "description": "Visualizing data using charts and graphs.",
        "module": "M201"
      }
    ]
  },
  {
    "_id": "M202",
    "name": "Working with Real Datasets",
    "description": "Hands-on exercises with real-world datasets.",
    "course": "CS102",
    "lessons": [
      {
        "_id": "L404",
        "name": "Loading Datasets",
        "description": "Learn to load datasets into your environment.",
        "module": "M202"
      },
      {
        "_id": "L405",
        "name": "Analyzing Data",
        "description": "Perform basic data analysis and insights.",
        "module": "M202"
      },
      {
        "_id": "L406",
        "name": "Creating Dashboards",
        "description": "Build interactive dashboards to display data insights.",
        "module": "M202"
      }
    ]
  },
  {
    "_id": "M301",
    "name": "Introduction to Cloud Computing",
    "description": "Learn the basics of cloud computing concepts.",
    "course": "CS103",
    "lessons": [
      {
        "_id": "L501",
        "name": "Cloud Basics",
        "description": "Understand IaaS, PaaS, SaaS and cloud principles.",
        "module": "M301"
      },
      {
        "_id": "L502",
        "name": "Deploying a Cloud App",
        "description": "Deploy a simple application on a cloud provider.",
        "module": "M301"
      },
      {
        "_id": "L503",
        "name": "Managing Cloud Resources",
        "description": "Learn how to manage and monitor cloud resources.",
        "module": "M301"
      }
    ]
  },
  {
    "_id": "M302",
    "name": "Advanced Cloud Concepts",
    "description": "Deep dive into cloud services and architecture.",
    "course": "CS103",
    "lessons": [
      {
        "_id": "L504",
        "name": "Scaling Applications",
        "description": "Techniques to scale cloud applications efficiently.",
        "module": "M302"
      },
      {
        "_id": "L505",
        "name": "Security in the Cloud",
        "description": "Learn best practices for securing cloud apps.",
        "module": "M302"
      },
      {
        "_id": "L506",
        "name": "Monitoring and Logging",
        "description": "Implement monitoring and logging for cloud systems.",
        "module": "M302"
      }
    ]
  },
  {
    "_id": "M401",
    "name": "Programming Design Principles",
    "description": "Learn design paradigms including OOP and functional programming.",
    "course": "CS104",
    "lessons": [
      {
        "_id": "L601",
        "name": "Object-Oriented Programming",
        "description": "Introduction to OOP concepts and design.",
        "module": "M401"
      },
      {
        "_id": "L602",
        "name": "Functional Programming Basics",
        "description": "Learn functional programming concepts.",
        "module": "M401"
      },
      {
        "_id": "L603",
        "name": "Design Patterns",
        "description": "Introduction to common software design patterns.",
        "module": "M401"
      }
    ]
  },
  {
    "_id": "M501",
    "name": "Algorithms and Problem Solving",
    "description": "Study of algorithms, data structures, and problem solving.",
    "course": "CS105",
    "lessons": [
      {
        "_id": "L701",
        "name": "Introduction to Algorithms",
        "description": "Basic concepts and analysis of algorithms.",
        "module": "M501"
      },
      {
        "_id": "L702",
        "name": "Sorting and Searching",
        "description": "Learn common sorting and searching algorithms.",
        "module": "M501"
      },
      {
        "_id": "L703",
        "name": "Problem Solving Techniques",
        "description": "Practice problem solving using algorithms.",
        "module": "M501"
      }
    ]
  },
  {
    "_id": "M601",
    "name": "Foundations of Artificial Intelligence",
    "description": "Introduction to AI concepts and techniques.",
    "course": "CS106",
    "lessons": [
      {
        "_id": "L801",
        "name": "AI Basics",
        "description": "Understanding AI principles and applications.",
        "module": "M601"
      },
      {
        "_id": "L802",
        "name": "Search and Logic",
        "description": "Introduction to search algorithms and logic reasoning.",
        "module": "M601"
      },
      {
        "_id": "L803",
        "name": "Learning Algorithms",
        "description": "Basics of machine learning algorithms.",
        "module": "M601"
      }
    ]
  },
  {
    "_id": "M701",
    "name": "Introduction to Computer Graphics",
    "description": "Learn 2D and 3D graphics programming fundamentals.",
    "course": "CS107",
    "lessons": [
      {
        "_id": "L901",
        "name": "Graphics Basics",
        "description": "Understand 2D and 3D graphics principles.",
        "module": "M701"
      },
      {
        "_id": "L902",
        "name": "Rendering and Animation",
        "description": "Learn how to render and animate graphics.",
        "module": "M701"
      },
      {
        "_id": "L903",
        "name": "Interactive Visuals",
        "description": "Create interactive visual elements using WebGL and React.",
        "module": "M701"
      }
    ]
  }
]
export default modules;