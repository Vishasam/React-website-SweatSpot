import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "Legs, shoulders, and abs",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "Chest and back",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "Arms and abs",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "Full body",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Living in Balance: Physically, Intellectually, Emotionally, Socially, and Spiritually"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Promotion of Healthy Living Principles"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Valuing the Difference of Experiences and Abilities"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "A Healthy Campus Community"
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "It could be 30 minutes a day, 5 days a week. You can spread your activity out during the week and break it up into smaller chunks of time. It can make life better. "
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "working out at 7 a.m., compared to later in the afternoon or evening, may help individuals get more quality sleep at night. One more argument making the case for a workout first thing in the morning is that exercising on an empty stomach could burn more fat."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "A 45-minute workout is enough for most people to warm up, do some lifting or cardio, and cool down. Forty-five minutes is also well within the recommended range of 150-200 minutes of physical activity recommended by most experts for both weight loss and overall health"
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Warm up properly before exercising to prevent injury and make your workouts more effective. This warm-up routine should take at least 6 minutes. Warm up for longer if you feel the need."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "If your main goal is weight loss, you want to burn calories and build muscle mass. So, for optimal benefits, you should incorporate both cardio and strength training into your exercise routine"
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Weight training is an excellent way to build muscle mass and make your muscles stronger. It can also keep your metabolism chugging, strengthen your bones and joints, improve your muscle tone, help you burn more calories, and keep you healthier as you age."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "YOUR EXTENSIVE DIVERSITY OF EQUIPMENT TYPES, THOUGH WISH YOU HAD A SEATED CALF PRESS",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "YOU HAVE GREAT FITNESS CLASSES LIKE ZUMBA AND BODY FLOW AND PUMP. I LOVE THE INSTRUCTORS TOO. THEY HAVE SUCH PASSION AND ENERGY FOR WHAT THEY DO!",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "INSTRUCTORS FOR THE VARIOUS CLASSES ARE GOOD. MANY CARDIO MACHINES AVAILABLE GOOD WEIGHT ROOM",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "BABYSITTING, CLASSES, WOMEN’S ROOM, AND THE CULTURE OF THE CLIENTS AND STAFF. SUCH A FUN FRIENDLY BUT STRONG WORKOUT ENVIRONMENT",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "JENNA WAS REALLY GREAT AS A TRAINER. VERY UPBEAT. NOT OVERCROWDED AND GOOD MACHINES.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]