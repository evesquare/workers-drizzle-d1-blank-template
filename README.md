# workers-drizzle-d1-blank-template

## Setup

Replace all occurrences of `<YOUR_CLOUDFLARE_D1_DATABASE_ID>` and `<YOUR_DATABASE_NAME>` in the project.  
You can use `⌘+Shift+F` to search and replace these placeholders.

Generate the drizzle-kit configuration with:

```bash
nr db:generate
```

This template already defines a `user` table in `db/schema.ts`.

You can create a D1 database with:

```bash
npx wrangler d1 create <YOUR_DATABASE_NAME>
```

After creating the database, set `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_D1_DATABASE_ID` in your `.env` file.

## Installation

Install the global dependency:

```bash
npm i -g @antfu/ni
```

Install project dependencies:

```bash
ni
```

## Environment Setup

Copy `.env.example` to `.env` and configure the required environment variables:

```bash
cp .env.example .env
```

## Local Development

Run database migrations:

```bash
nr db:migrate:dev
```

Start the development server:

```bash
nr dev
```
