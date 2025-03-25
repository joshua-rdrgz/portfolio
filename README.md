This is a portfolio website built using NextJS and Sanity as a CMS. To use it, configure a Sanity application and insert the following ENV variables into `.env.local`:

```
# Used to connect to Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID="project-id-here"
NEXT_PUBLIC_SANITY_DATASET="project-dataset-here"

# Used for sending emails
MY_EMAIL="email-here"
MY_PASSWORD="password-here"

# Used for Sanity webhook to revalidate pages
NEXT_PUBLIC_SANITY_HOOK_SECRET="sanity-hook-secret-here"
```

You will need to generate a GROQ-powered webhook in the project mapped to the `/api/revalidate` API route. This will allow changes to the Sanity Studio content to automatically reflect in the NextJS application.

You will also need to provide your email and password set up to configure emails being sent via the contact form.

# General NextJS Documentation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
