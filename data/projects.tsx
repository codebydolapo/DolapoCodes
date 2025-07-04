const projects = [
    {
        title: "Updrive",
        image: ["/images/updrive/1.gif", "/images/updrive/2.png", "/images/updrive/3.png", "/images/updrive/4.png", "/images/updrive/5.png", "/images/updrive/6.png"], // Assuming an image for the editor page exists
        description: "A modern platform for car rentals of any kind. Built with Next.js. It comes with the best car rental experience, complete with expandable google maps, search functionality and more.",
        type: "web",
        stack: [
            { icon: "/icons/nextjs.png", technology: "Next.js" },
            { icon: "/icons/typescript.png", technology: "TypeScript" }, // Assuming an icon for TypeScript
            { icon: "/icons/radix.png", technology: "Radix UI" }, // Assuming an icon for Radix UI
            { icon: "/icons/shadcn.png", technology: "Shadcn UI" }, // Assuming an icon for Shadcn UI
            { icon: "/icons/tailwind.jpg", technology: "Tailwind CSS" },
            { icon: "/icons/redux.png", technology: "Redux" }, // Assuming an icon for Redux
        ],
        liveLink: "https://updrive-gamma.vercel.app/", // Placeholder, replace with actual link if available
        gitRepo: "https://github.com/codebydolapo/Updrive" // Placeholder, replace with actual link if available
    },
    {
        title: "TinyWags",
        image: ["/images/tinywags/1.gif", "/images/tinywags/2.png", "/images/tinywags/3.png", "/images/tinywags/4.png", "/images/tinywags/5.png"], // Assuming an image for the editor page exists
        description: "A modern pet adoption platform built with Next.js as the frontend and Graph QL as the backend. It comes with fast data fetching, prt foundation donations and more",
        type: "web",
        stack: [
            { icon: "/icons/nextjs.png", technology: "Next.js" },
            { icon: "/icons/typescript.png", technology: "TypeScript" }, // Assuming an icon for TypeScript
            { icon: "/icons/graph.png", technology: "Graph QL" }, // Assuming an icon for TypeScript
            { icon: "/icons/radix.png", technology: "Radix UI" }, // Assuming an icon for Radix UI
            { icon: "/icons/shadcn.png", technology: "Shadcn UI" }, // Assuming an icon for Shadcn UI
            { icon: "/icons/tailwind.jpg", technology: "Tailwind CSS" },
            { icon: "/icons/redux.png", technology: "Redux" }, // Assuming an icon for Redux
        ],
        liveLink: "/", // Placeholder, replace with actual link if available
        gitRepo: "https://github.com/codebydolapo/TinyWags" // Placeholder, replace with actual link if available
    },
    {
        title: "Verity",
        image: ["/images/verity/1.png", "/images/verity/2.jpg", "/images/verity/3.png", "/images/verity/4.png", "/images/verity/5.png", "/images/verity/6.png"], // Assuming an image for the editor page exists
        description: "A modern and responsive e-commerce product discovery platform built with Next.js. It delivers a seamless shopping experience by enabling users to explore top-selling items, perform product searches, and view detailed product information",
        type: "web",
        stack: [
            { icon: "/icons/nextjs.png", technology: "Next.js" },
            { icon: "/icons/typescript.png", technology: "TypeScript" }, // Assuming an icon for TypeScript
            { icon: "/icons/radix.png", technology: "Radix UI" }, // Assuming an icon for Radix UI
            { icon: "/icons/shadcn.png", technology: "Shadcn UI" }, // Assuming an icon for Shadcn UI
            { icon: "/icons/tailwind.jpg", technology: "Tailwind CSS" },
            { icon: "/icons/redux.png", technology: "Redux" }, // Assuming an icon for Redux
        ],
        liveLink: "https://prelo-kappa.vercel.app/", // Placeholder, replace with actual link if available
        gitRepo: "https://github.com/codebydolapo/Verity" // Placeholder, replace with actual link if available
    },
    {
        title: "Prelo",
        image: ["/images/prelo/1.gif", "/images/prelo/2.gif", "/images/prelo/3.webp", "/images/prelo/4.webp", "/images/prelo/5.gif"], // Assuming an image for the editor page exists
        description: "A real-time collaborative document editor with AI-powered text summary and translation, alongside live chats. It leverages Next.js, Liveblocks, BlockNote, and Firebase for a seamless collaborative experience.",
        type: "web",
        stack: [
            { icon: "/icons/nextjs.png", technology: "Next.js" },
            { icon: "/icons/liveblocks.jpg", technology: "Liveblocks" },
            { icon: "/icons/typescript.png", technology: "TypeScript" }, // Assuming an icon for TypeScript
            { icon: "/icons/blocknote.webp", technology: "BlockNote" }, // Assuming an icon for BlockNote
            { icon: "/icons/yjs.png", technology: "Yjs" }, // Assuming an icon for Yjs
            { icon: "/icons/clerk.png", technology: "Clerk" },
            { icon: "/icons/firebase.webp", technology: "Firebase" },
            { icon: "/icons/radix.png", technology: "Radix UI" }, // Assuming an icon for Radix UI
            { icon: "/icons/shadcn.png", technology: "Shadcn UI" }, // Assuming an icon for Shadcn UI
            { icon: "/icons/tailwind.jpg", technology: "Tailwind CSS" },
            { icon: "/icons/openai.png", technology: "OpenAI API" }, // Assuming an icon for OpenAI
        ],
        liveLink: "https://prelo-kappa.vercel.app/", // Placeholder, replace with actual link if available
        gitRepo: "https://github.com/codebydolapo/Prelo" // Placeholder, replace with actual link if available
    },
    {
        title: "Animax",
        image: ["/images/animax/1.webp",], // Assuming images for sign-in, homepage, watchlist, and shop
        description: "A mobile application for watching and bookmarking anime, as well as purchasing anime-themed merchandise. It features Google Authentication, a watchlist, a shop section with a payment workflow, and Lottie animations.",
        type: "mobile",
        stack: [
            { icon: "/icons/react.png", technology: "React Native" }, // Assuming an icon for React Native
            { icon: "/icons/typescript.png", technology: "TypeScript" }, // Assuming an icon for TypeScript
            { icon: "/icons/redux.png", technology: "Redux" }, // Assuming an icon for Redux
            { icon: "/icons/appwrite.png", technology: "Appwrite" }, // Assuming an icon for Appwrite
            { icon: "/icons/expo.png", technology: "Expo" }, // Assuming an icon for Expo
            { icon: "/icons/lottie.webp", technology: "Lottie Animations" }, // Assuming an icon for Lottie
        ],
        liveLink: "/", // Mobile apps typically don't have live web links; consider a demo video link or leave blank
        gitRepo: "https://github.com/codebydolapo/Animax" // Placeholder, replace with actual link if available
    },
    {
        title: "Homely",
        image: ["/images/homely/1.webp"], // Assuming images for various screens
        description: "A real estate mobile application built with React Native and Expo, offering property listings, purchase capabilities with fingerprint authentication, and engaging UI/UX features including Lottie animations.",
        type: "mobile",
        stack: [
            { icon: "/icons/react.png", technology: "React Native" },
            { icon: "/icons/expo.png", technology: "Expo" },
            { icon: "/icons/appwrite.png", technology: "Appwrite" },
            { icon: "/icons/typescript.png", technology: "TypeScript" },
            { icon: "/icons/lottie.webp", technology: "Lottie Animations" },
            // Add other relevant icons if explicit technologies are mentioned for UI or other functionalities
        ],
        liveLink: "/", // Mobile apps typically don't have live web links; consider a demo video link or leave blank
        gitRepo: "https://github.com/codebydolapo/Homely" // Placeholder, replace with actual link if available
    },
    {
        title: "Subscription Tracker & User Management API",
        image: ["/images/api_project/api_project.png"], // You'll need to create or choose an appropriate icon/image for this
        description: "A robust backend API built with Express.js for secure user authentication (JWT), authorization, and comprehensive subscription management. Integrates Arcjet for advanced request protection (rate limiting, bot detection) and MongoDB with Mongoose for data handling. Features include user and subscription CRUD, password hashing, and email reminders via Upstash Workflow.",
        type: "web",
        stack: [ // Changed from 'technologies' to 'stack'
            { icon: "/icons/express.png", technology: "Express.js" }, // Assuming an icon for Express.js
            { icon: "/icons/node.png", technology: "Node.js" },       // Assuming an icon for Node.js
            { icon: "/icons/mongodb.png", technology: "MongoDB" },     // Assuming an icon for MongoDB
            { icon: "/icons/mongoose.png", technology: "Mongoose" },   // Assuming an icon for Mongoose
            { icon: "/icons/arcjet.png", technology: "Arcjet" },       // Assuming an icon for Arcjet
        ],
        gitRepo: "https://github.com/codebydolapo/Subscription-Tracker-API", // Placeholder: Replace with actual GitHub link
        liveLink: "", // Backend APIs often don't have a direct "live link" unless it's a deployed documentation or testing endpoint
    },
]

export default projects