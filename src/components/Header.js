import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <header>
          <div class="site-header-right">
            <div class="site-header">
                <nav>
                <NavLink to="/">Home</NavLink>
                </nav>
                <nav>
                <NavLink to="/snowboarder">Snowboarder</NavLink>
                </nav>
                <nav>
                <NavLink to="/artist">Procreate Artist</NavLink>
                </nav>
                <nav>
                <NavLink to="/golfer">Golfer</NavLink>
                </nav>
            </div>
          </div>
    </header>
    );
  }
}

export default Header;