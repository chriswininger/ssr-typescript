import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
import LoadWrapper from '../components/LoadWrapper';

export default function TeamMember() {
  const { member } = useParams() as { member: string };

  const [isLoading, setLoadingState] = useState(true);
  const [userInfo, setUserInfo] = useState({ about: '', userName: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUserInfo();
  }, []);

  if (error !== null) {
    return <div>Looks like someone has a case of the 2020s: {error}</div>
  }

  return (
    <>
      <Helmet>
        <title>{member}</title>
      </Helmet>

      <main>
        <LoadWrapper isLoading={isLoading}>
          <div>
            <h1>Meet {member}</h1>
          </div>

          <div>
            <h2>User Name</h2>
            {userInfo.userName}
          </div>

          <div>
            <h2>About</h2>
            {userInfo.about}
          </div>
        </LoadWrapper>
      </main>
    </>);

  async function loadUserInfo() {
    try {
      setLoadingState(true);

      const userInfoResp = await fetch(`/api/members/${member}`)
      const userInfo = await userInfoResp.json();

      setUserInfo(userInfo);
      setLoadingState(false);
    } catch (ex) {
      setLoadingState(false);

      console.error(ex);
      setError(ex.message);
    }
  }
}
