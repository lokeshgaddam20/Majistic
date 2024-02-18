## MAJISTIC
===============
AI Generations is a Next.js application for AI-powered content generation using OpenAI and Replicate APIs. Users can generate text, code, images, music, and more with the latest AI models.

Features
__Text Generation__: Generate conversational text and prose using models like GPT-3 and Codex.
__Image Generation__: Create images from text descriptions with DALL-E and Stable Diffusion.
__Code Generation__: Get AI-assisted code completion suggestions using GPT-3 and Codex.
__Music & Video Generation__: Generate original music and videos with AI models from Replicate.
__User Accounts__: Built-in authentication with Clerk and Stripe payments.
__PostgreSQL Database__: Data stored in a Supabase PostgreSQL database.
__Responsive Design__: Beautiful responsive design using Tailwind CSS.

#### Tech Stack
Frontend: Next.js, React
AI requests: OpenAI@4, Replicate AI
Styling: Tailwind CSS
Auth: Clerk
Database: Supabase (Postgres)
Deployment: Vercel

#### Getting Started

1. Clone the repo
```
git clone https://github.com/lokeshgaddam20/majistic.git
cd majistic
```
2. Install dependencies
```
npm install
```
3. Add environment variables

...Copy the .env.example file to .env.local and add your API keys.
4. Run the dev server
```
npm run dev
npx prisma studio
```
Open http://localhost:3000 to view the app.
