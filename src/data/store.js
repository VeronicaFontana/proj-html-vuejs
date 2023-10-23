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
  ]
})