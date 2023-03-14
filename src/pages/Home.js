import React from 'react';
import background from './images/Background.jpg';

class Home extends React.Component {
  render() {
    return (
<div>
    <main>
		<article>
			<div class="background-image" style={{backgroundImage: `url(${background})`}}>
				<div class="title-box">
					<h1>Choose Your Hobbies</h1>
				</div>
				<h4>
					<strong>Choose Your Hobbies</strong> is a 90’s-style fighter game set in the age of the pandemic. Millennials and Gen Zers are in trouble. These next couple of years were supposed to be their prime. With lockdowns in place - no end to the pandemic in sight - many young adults are starting to question their identity. In an effort to retain her sanity, Crystal is set out on a quest to explore a new hobby.
				</h4>
		    </div>
		</article>

        <div>
            <div class="subheader">
                <h2>Select Your Character:</h2>
            </div>
            <div class="card-container">
                <a href="snowboarder.html">
                    <div class="card-box">
                        <div class="card-box-image">
                            <img src="images/Snowboarder-1.png" alt="Crystal at Snow Summit" width= {'350px'} height= {'350px'}/>
                        </div>
                        <div class="card-box-description">
                            <h3>Snowboarder</h3>
                            <h4>
                            Will full send it down a mountain after watching some Tiktok videos.
                            </h4>
                        </div>
                    </div>
                </a>

                <a href="procreate-artist.html">
                    <div class="card-box">
                        <div class="card-box-image">
                            <img src="images/Procreate-1.png" alt="Screenshot of createdbycry Instagram" width= {'350px'} height= {'350px'}/>
                        </div>
                        <div class="card-box-description">
                            <h3>Procreate Artist</h3>
                            <h4>
                                Is trying to make up for lost time after denying herself of a creative outlet her entire childhood.
                            </h4>
                        </div>
                    </div>
                </a>
                
                <a href="golfer.html">
                    <div class="card-box">
                        <div class="card-box-image">
                            <img src="images/Golfer-1.png" alt="Crystal golfing at Aroma Golf Range" width= {'350px'} height= {'350px'}/>
                        </div>
                        <div class="card-box-description">
                            <h3>Golfer</h3>
                            <h4>
                                Has no hand eye coordination, but thinks athleticism triumphs skills and technique.
                            </h4>
                        </div>
                    </div>
                </a>
            </div>
        </div>
	</main>
</div>
    );
  }
}

export default Home;