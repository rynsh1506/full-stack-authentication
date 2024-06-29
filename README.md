# Full-Stack Authentication Project Setup

## Backend

### Install

1. Navigate to the `back-end` directory and run:

   ```bash
   yarn install
   ```

   or

   ```bash
   npm install
   ```

   (yarn is recommended).

### Setup .env

1. Copy the keys from `.env.example` to `.env`.

### Database

1. Run the command to start Docker for the database:

   ```bash
   yarn docker
   ```

   or

   ```bash
   npm run docker
   ```

2. Start the database with:

   ```bash
   yarn start:db
   ```

   or

   ```bash
   npm run start:db
   ```

### Run

1. Build the project by running:

   ```bash
   yarn build
   ```

   or

   ```bash
   npm run build
   ```

2. Start the server:

   ```bash
   yarn start
   ```

   or

   ```bash
   npm run start
   ```

   Add `:dev` to run in watch mode without building first.
