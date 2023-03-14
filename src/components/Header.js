import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <header>
        <div class="site-header-right">
            <div class="site-header">
                <nav>
                    <a href="snowboarder.html">Snowboarder</a>
                    </nav>
                    <nav>
                    <a href="procreate-artist.html">Procreate Artist</a>
                    </nav>
                    <nav>
                    <a href="golfer.html">Golfer</a>
                    </nav>
            </div>
        </div>
    </header>
    );
  }
}

export default Header;