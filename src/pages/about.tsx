import React from 'react';
import { Helmet } from 'react-helmet';
import faker from 'faker';
import { Link } from 'react-router-dom';

export default function About() {
  return (
      <>
        <Helmet>
          <title>Rect SSR With Typescript -- About</title>
        </Helmet>

        <main>
          <div>
            This page demonstrates the use of Rect Server Side Rendering (SSR) within the context of a react application
            written in typescript.

            The goal is to keep all title and metadata logic within the react application while delivering it dynamically
            from the initial server side render pass.
          </div>

          <div>
            <h2>Here are some very real members</h2>

            <MemberList />
          </div>
        </main>
      </>
  );

  function MemberList() {
    const members = buildRandomTeamList();

    return (
      <ul>
        {members.map(member => <li><Link to={`/team/${member}`}>{member}</Link></li>)}
      </ul>
    );
  }

  function buildRandomTeamList(): string [] {
    const len = faker.datatype.number({ min: 3, max: 10 });

    const members: string [] = [];

    for (let i = 0; i < len; i++) {
      members.push(`${faker.name.firstName()} ${faker.name.lastName()}`)
    }

    return members;
  }
}
