<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=6C47FF" alt="clerk" />
    <img src="https://img.shields.io/badge/-Shadcn_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-Zod-black?style=for-the-badge&logoColor=white&logo=zod&color=3E67B1" alt="zod" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  </div>

  <h3 align="center">A full stack Social Media App</h3>

</div>

## <a name="table">Table of Contents</a>

1.  [Introduction](#introduction)
2.  [Tech Stack](#tech-stack)
3.  [Features](#features)
4.  [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

A comprehensive social media app built with Next.js 14+, featuring a revamped design based on a Figma prototype. It includes user interaction and community management tools, with technical implementations such as nested deep comments, notifications, real-time search, and more.

## <a name="tech-stack">Tech Stack</a>

- Next.js
- MongoDB
- Shadcn UI
- TailwindCSS
- Clerk
- Webhooks
- Serverless APIs
- React Hook Form
- Zod
- TypeScript

## <a name="features">Features</a>

➡️ **Authentication**: Authentication using Clerk for email, password, and social logins (Google and GitHub) with a comprehensive profile management system.

➡️ **Visually Appealing Home Page**: A visually appealing home page showcasing the latest posts for an engaging user experience.

➡️ **Create Post Page**: A dedicated page for users to create posts, fostering community engagement

➡️ **Commenting Feature**: A commenting feature to facilitate discussions within posts.

➡️ **Nested Commenting**: Commenting system with nested posts, providing a structured conversation flow.

➡️ **User Search with Pagination**: A user search feature with pagination for easy exploration and discovery of other users.

➡️ **Activity Page**: Display notifications on the activity page when someone comments on a user's post, enhancing user engagement.

➡️ **Profile Page**: User profile pages for showcasing information and enabling modification of profile settings.

➡️ **Create and Invite to Communities**: Allow users to create new communities and invite others using customizable template emails.

➡️ **Community Member Management**: A user-friendly interface to manage community members, allowing role changes and removals.

➡️ **Admin-Specific Community posts**: Enable admins to create posts specifically for their community.

➡️ **Community Search with Pagination**: A community search feature with pagination for exploring different communities.

➡️ **Community Profiles**: Display community profiles showcasing posts and members for a comprehensive overview.

➡️ **Figma Design Implementation**: Transform Figma designs into a fully functional application with pixel-perfect and responsive design.

➡️ **Blazing-Fast Performance**: Optimal performance and instantaneous page switching for a seamless user experience.

➡️ **Server Side Rendering**: Utilize Next.js with Server Side Rendering for enhanced performance and SEO benefits.

➡️ **MongoDB with Complex Schemas**: Handle complex schemas and multiple data populations using MongoDB.

➡️ **File Uploads with UploadThing**: File uploads using UploadThing for a seamless media sharing experience.

➡️ **Real-Time Events Listening**: Real-time events listening with webhooks to keep users updated.

➡️ **Middleware, API Actions, and Authorization**: Utilize middleware, API actions, and authorization for robust application security.

➡️ **Next.js Layout Route Groups**: New Next.js layout route groups for efficient routing

➡️ **Data Validation with Zod**: Data integrity with data validation using Zod

➡️ **Form Management with React Hook Form**: Efficient management of forms with React Hook Form for a streamlined user input experience.

and many more, including code architecture and reusability

## <a name="quick-start"> Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/saadahmad-1/socio.git
cd socio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

NEXT_CLERK_WEBHOOK_SECRET=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up for the corresponding websites on [MongoDB](https://www.mongodb.com/), [Clerk](https://clerk.com/), and [Uploadthing](https://uploadthing.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

#
