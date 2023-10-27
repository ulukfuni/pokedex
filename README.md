## Pokedex

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Also used are Redux ToolKit, Styled Components, and TailwindCSS.

## Getting Started
First install npm packages:
```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Next, run the development server:

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

## Notes:

- Would have liked to set up the evolution chains for each pokemon. Already set up both the `evolution-chain` and `pokemon-species` endpoints to get the evolution chain id from the species endpoint and use that id in the GET for the evolution chain. After that, there would need to be some mechanism to traverse through the response object and it somewhat resembles a linked list.

- Would have also liked to use the `moves` and `abilities` endpoints on hover after a pokemon is searched and displayed. Endpoints are already set up and would need some sort of tooltip component to accompany the hover action that will display the move/ability details.

- Reason for TailwindCSS and Styled Components implementation is due to having default set up from create-next-app already have Tailwind by default and then seeing Styled Components in the technical requirements afterwards. It is my belief that even though there is some overlap in functionality with both, they can coexist in a small project such as this. If this app were to scale in complexity and have more people work on it, using one styling approach would be of more benefit.

- For automated tests, I would consider Cypress or Playwright to run the e2e tests, Jest to run unit tests and React Testing library to test components. 

## Additional changes to run app in a Concurrent Environment

To run this application in a concurrent environment, follow these steps:

1. Setup app as a docker container
2. Add Auth (user sign up and log in) and have authenticated requests to server to prevent malicious use of endpoints.
3. Set up a cache on frontend for duplicate requests. RTK somewhat does this already but would like to build a more robust store that can also be extended with moves, abilities, evolution chains, etc. 


