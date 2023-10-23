import {reactive} from "vue";

export const store = reactive({
  texts:[
    {
      section:"Everything in MaxCoach",
      title:"Learn about our Work Culture at MaxCoach",
      text:"Spend some time to visit our website or head office and discover our current courses, enrollment procedures, and registration deadline. We're opening new classes every beginning of each month",
      link:"Have questions? Get Free Guide"
    },
    {
      section:"How we work",
      title:"Upgrade Your Skills Upgrade Your Life",
      text:"Opening up moreopportunities in front of you to get the ticket to more enjoyable door in life. Gettin equipped with new skills for new sets of insights into your career. MaxCoach acompany learners in every stage of learning.",
      link:"Download free guidebook"
    },
    {
      section:"Testimonials",
      title:"Why Do People *Hearts* Us?",
      text:"Seeking for verbals of our service quality? Find them here. Everything is transparent and straightforward for your sense of justification.",
      link:"View all"
    },
    {
      section:"Everything in MaxCoach",
      title:"We're Here To Transform You!",
      text:"As learners, people can enjoy great companionship from MaxCoach mentors and educators. We can help you develop and grow at your best.",
      link:"Get Free Guide"
    }
  ],
  blogs:[
    {
      role:"ARTIST",
      name:"Brush Strokes Energize Trees in Paintings",
      date:"May 15, 2020",
      views:"688 views",
      image: "/artist-blog-03-480x325.jpeg"
    },
    {
      role:"ARTIST",
      name:"Pocket-Sized Notebooks Hold Miniature Paintings",
      date:"May 15, 2020",
      views:"603 views",
      image: "/artist-blog-01-480x325.jpg"
    },
    {
      role:"ARTIST",
      name:"Connection Between Self-Portraits and Identity",
      date:"May 15, 2020",
      views:"397 views",
      image: "/artist-blog-02-480x325.jpg"
    }
  ],
  courses:[
    {
      price: "$40.00",
      name:"Learning to Write as a Professiona Author",
      lessonNum: 20,
      studentNum: 50,
      image:"/course-02-480x298.jpg"
    },
    {
      price: "$0.00",
      name:"Customer-centric Info-Tech Strategies",
      lessonNum: 24,
      studentNum: 769,
      image:"/stock-full-hd-03-480x298.jpg"
    },
    {
      price: "$19.00",
      name:"Open Programming Courses for Everyone: Python",
      lessonNum: 17,
      studentNum: 62,
      image:"/stock-full-hd-04-480x298.jpg"
    },
    {
      price: "$26.00",
      name:"Academic Listening and Note-taking",
      lessonNum: 14,
      studentNum: 68,
      image:"/public/stock-full-hd-06-480x298.jpg"
    },
    {
      price: "$0.00",
      name:"Personal Finance: Financial Security Thinking & Principles",
      lessonNum: 2,
      studentNum: 283,
      image:"/public/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
    }
  ]
})