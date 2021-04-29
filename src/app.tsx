import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import { Link, Route } from 'react-router-dom';
import TeamMember from './pages/TeamMember';

export default function App() {
  return (
    <div className="ssr-page">
      <header>
        <nav>
          <Link to={'/'}>Home</Link>

          <Link to={'/about'}>About</Link>
        </nav>
      </header>

      <switch>
        <Route path='/about' exact={true} component={About} />

        <Route path='/team/:member' exact={true} component={TeamMember} />

        <Route path='/' exact={true} component={Home} />
      </switch>
    </div>);
}
