# Next.js SaaS Boilerplate

A modern, full-stack SaaS boilerplate built with Next.js 15, featuring authentication, database integration, and a beautiful UI. Perfect for quickly building and deploying SaaS applications.

## ✨ Features

- **🚀 Next.js 15** with App Router and React 19
- **🔐 Authentication** with Clerk (sign-up, sign-in, user management)
- **🗄️ Database** integration with Neon (serverless PostgreSQL) and Drizzle ORM
- **🎨 Modern UI** with Tailwind CSS and Radix UI components
- **📱 Responsive Design** with beautiful dashboard layout
- **🔧 TypeScript** for type safety
- **⚡ API Routes** for backend functionality
- **📊 Task Management** system included as example

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Database**: Neon (PostgreSQL), Drizzle ORM
- **UI Components**: Radix UI, Lucide React
- **Styling**: Tailwind CSS with animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A Clerk account ([clerk.com](https://clerk.com))
- A Neon account ([neon.tech](https://neon.tech))

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd next-boilerplate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local  # If you have an example file, or create manually
```

Add the following environment variables to `.env.local`:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Neon Database
DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```

### 4. Configure Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy your **Publishable Key** from the API Keys section
4. Add it to your `.env.local` file as `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

### 5. Configure Neon Database

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy the connection string from your dashboard
4. Add it to your `.env.local` file as `DATABASE_URL`

### 6. Set up the database

Generate and push the database schema:

```bash
# Generate migration files
npm run db:generate

# Push schema to your database
npm run db:push
```

### 7. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages (sign-in, sign-up)
│   ├── dashboard/         # Protected dashboard pages
│   ├── layout.tsx         # Root layout with Clerk provider
│   └── page.tsx           # Landing page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (shadcn/ui)
│   └── dashboard/        # Dashboard-specific components
├── configs/              # Configuration files
│   ├── schema.ts         # Database schema (Drizzle)
│   └── index.ts          # Database connection
├── lib/                  # Utility functions
├── drizzle/              # Database migrations
├── public/               # Static assets
└── middleware.ts         # Clerk middleware for authentication
```

## 🗄️ Database Schema

The boilerplate includes two main tables:

### Tasks Table
- `id` - Primary key
- `title` - Task title (required)
- `description` - Task description
- `status` - Task status (default: 'pending')
- `created_at` - Creation timestamp
- `updated_at` - Update timestamp

### Users Table
- `id` - Primary key (Clerk user ID)
- `email` - User email (required)
- `is_subscribed` - Subscription status (default: false)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate database migrations
npm run db:push      # Push schema changes to database
```

## 🔐 Authentication Flow

The boilerplate includes a complete authentication flow:

1. **Landing Page** (`/`) - Public landing page
2. **Sign In** (`/auth/sign-in`) - User sign in
3. **Sign Up** (`/auth/sign-up`) - User registration
4. **Dashboard** (`/dashboard`) - Protected dashboard area
5. **Settings** (`/dashboard/settings`) - User settings
6. **Billing** (`/dashboard/billing`) - Billing management

## 🛡️ Middleware Protection

The `middleware.ts` file automatically protects your routes using Clerk. All dashboard routes require authentication.

## 🎨 UI Components

The boilerplate uses shadcn/ui components built on top of Radix UI:

- Pre-configured Tailwind CSS
- Dark/light mode support
- Responsive design
- Accessible components

## 📡 API Routes

Example API routes included:

- `GET/POST /api/tasks` - Task management
- `PUT/DELETE /api/tasks/[taskId]` - Individual task operations
- `POST /api/buyProduct` - Purchase handling

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `DATABASE_URL`
4. Deploy!

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🔧 Customization

1. **Update branding**: Modify `app/layout.tsx` metadata and components
2. **Add features**: Create new pages in `app/` directory
3. **Extend database**: Add tables to `configs/schema.ts`
4. **Style changes**: Modify `tailwind.config.ts` and global styles

## 📝 Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk publishable key for authentication |
| `DATABASE_URL` | Yes | Neon database connection string |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the [Clerk documentation](https://clerk.com/docs)
2. Review [Neon documentation](https://neon.tech/docs)
3. Check [Next.js documentation](https://nextjs.org/docs)
4. Open an issue in this repository

---

**Happy coding! 🚀** Start building your SaaS application with this solid foundation.
