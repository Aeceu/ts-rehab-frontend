type Users ={
  name:string;
  email:string;
  Graph:any[];
  Post:{
    postId:string;
    title:string;
    description:string;
    date:string;
}[];
}[];

type UsersGraph = {
  name:string;
  total:number;
}[];


export const jose_data:UsersGraph = [
  
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export const john_data:UsersGraph = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export const marie_data:UsersGraph = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]


export const jose_invoices:Users = [
  {
    name:"Fernando Jose C. Acebuche",
    email:"joseacebuche2@gmail.com",
    Graph: jose_data,
    Post:
    [
      {
        postId:"0",
        title: "My first task",
        description : "My first task is to make my life better by not drinking or trying any illegal drugs.",
        date:"January 1, 2023",
      },
      {
        postId:"1",
        title: "My second task",
        description : "My second task is to make and give time to my family",
        date:"February 21, 2023",
      },
      {
        postId:'2',
        title: "My third task",
        description: "My third task is to consistently go to therapy",
        date:"March 03, 2023"
      }
    ],
  },
]

export const john_invoices:Users = [
  {
    name:"John Mark D. Doe",
    email:"johndoe021@gmail.com",
    Graph: john_data,
    Post:
    [
      {
        postId:"0",
        title: "My first task",
        description : "My first task is to make my life better by not drinking or trying any illegal drugs.",
        date:"November 1, 2023",
      },
      {
        postId:"1",
        title: "My second task",
        description : "My second task is to make and give time to my family",
        date:"December 21, 2023",
      },
    ]
  },
]

export const marie_invoices:Users = [
  {
    name:"Marie Ann L. Jull",
    email:"marie.ann123@gmail.com",
    Graph: marie_data,
    Post:
    [
    ],
  },
]