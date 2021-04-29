import React from 'react';
import faker from 'faker';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';

export default function Team() {
  const { member } = useParams() as { member: string };

  const about = faker.lorem.paragraph();

  return (
    <>
      <Helmet>
        <title>{member}</title>
      </Helmet>

      <main>
        <div>
          <h1>Meet {member}</h1>
        </div>

        <div>
          {about}
        </div>
      </main>
    </>);
}
