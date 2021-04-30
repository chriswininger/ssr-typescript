React SSR Typescript
=================

This application demonstrates the use of React Server Side rendering to deliver dynamic page titles and metadata in the
initial request response.

The goal is to keep this logic within react. An alternative would simply be to have some logic in the server to deliver
this.

I am taking a bear bones roll your own approach as opposed to using nextjs because it may be more suitable to existing
code bases.

I am also using typescript. This is important as many of my applications are written in tyescript and I want to solve for this problem within the context of a typescript build.

## Running

`npm run start-dev`

## Background

Here are some tutorials by other great folks out there.

* [React Server Side Rendering Introduction For Beginners - ReactJS ssr with Expressjs](https://youtu.be/NwyQONeqRXA)
 
* [Server Side Rendering With React And Typescript](https://medium.com/atticus-engineering/server-side-rendering-with-react-and-typescript-8cebb4400b3c)

* [How to Configure meta tags in React Apps Dynamically with a NodeJS Server](https://dillionmegida.com/p/how-to-configure-meta-tags-in-react-app-dynamically/) 
 
## Build Process (Additional Info)

This project uses typescript and webpack. There are two webpack builds drivin from the same
webpack.config.js file. One --env.platform=server produces the server bundle and the other --env.platform=web produces
the client bundle.

**Note:** --`end.foo` **does not work in newer versions of webpack-cli. To upgrade this will need be changed**

## TBD

* Show how to integrate with authentication providers such as keycloak or auth0
* Improve the build/dev process
* Create a docker container for deployment




