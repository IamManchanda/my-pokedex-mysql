# My Pokedex

A simple Pokedex application built with Next.js, TypeScript, Prisma, and tRPC.

## Tech Stack

- Next.js
- TypeScript
- Prisma
- MySQL
- tRPC
- Material UI

## Features

- Search for individual Pokemon
- Search for multiple Pokemon
- Filter Pokemon by type

## Screenshots

### Home Page

![Home Page](https://github.com/IamManchanda/my-pokedex/assets/4970624/1db618c4-1a75-40c9-926a-2970186d4dae)

### Search for Pokemon

![Search for individual Pokemon](https://github.com/IamManchanda/my-pokedex/assets/4970624/253539f3-5223-4573-83fe-dcf27c0b01aa)

### Search for multiple Pokemon

![Search for multiple Pokemon](https://github.com/IamManchanda/my-pokedex/assets/4970624/75cddbba-e346-4e6c-8285-8cb9f24e06bc)

### Filter Pokemon by type

![Filter Pokemon by type - select input](https://github.com/IamManchanda/my-pokedex/assets/4970624/9eda2ed5-8976-422d-ad47-dc679a9a981a)
![Filter Pokemon by type - Result](https://github.com/IamManchanda/my-pokedex/assets/4970624/30963b00-0fef-41b0-9786-2b674ea40dd3)

## Prerequisites

- Node.js (>=14.0.0)
- npm (>=6.0.0) or yarn (>=1.22.0)
- Docker (>=20.10.0)

## Local Installation

### 1. Clone the Repository and change directory

```bash
git clone https://github.com/your-username/my-pokedex.git
cd my-pokedex
```

### 2. Set Up Environment Variables

Create a .env file in the root directory of the project and add the following variables:

```bash
DATABASE_URL="mysql://root:password@localhost:3306/my-pokedex"
```

> Note: The start-database.sh script will update the DATABASE_URL password if necessary.

### 3. Start the MySQL Database

Execute the start-database.sh script to start a MySQL database using Docker:

```bash
./start-database.sh
```

#### Instructions for Windows Users

- Install WSL (Windows Subsystem for Linux)
- Install Docker Desktop for Windows
- Open WSL
- Run the script - ./start-database.sh

### 4. Install Dependencies

```bash
npm install
# or
yarn install
```

### 5. Apply Prisma Migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 6. Seed the Database

```bash
npm run db:seed
```

### 7. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 8. Prisma Studio (Optional)

You can use Prisma Studio to view data in the database. Start Prisma Studio with the following command:

```bash
npx prisma studio
```

## Deployment

Work in progress...
