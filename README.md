React SSR Typescript
=================

This application demonstrates the use of React Server Side rendering to deliver dynamic page titles and metadata in the
initial request response.

The goal is to keep this logic within react. An alternative would simply be to have some logic in the server to deliver
this.

I am taking a bear bones role your own approach as opposed to using nextjs because it may be more suitable to existing
code bases.

## Running

`npm run start-dev`

## Setup

This project uses typescript with webpack for transpilation. There are two webpack builds drivin from the same
webpack.config.js file. One --env.platform=server produces the server bundle and the other --env.platform=web produces
the client bundle.

**Note:** --`end.foo` **does not work in newer versions of webpack-cli. To upgrade this will need be changed**




