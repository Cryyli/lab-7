import React from 'react';


class Artist extends React.Component {
    render() {
        return (
            <main>
                <article>
                    <div class="container">
                        <div class="box">
                            <img src="images/Procreate-2.png" alt="Screenshot of createdbycry Instagram revealed" width= {'600px'} height= {'700px'}/>
                        </div>
                        <div class="box-description">
                            <h2>Procreate Artist</h2>
                            <p>
                                All her life Crystal was told that pursuing the arts led to a meaningless life. She came to realize her life became meaningless the more she distanced herself from her creative needs. In high school, she selected Art as her third high-level course on a whim to meet the requirements of the IB curriculum. The course gave her a great sense of liberty despite her lack of foundational skills in traditional arts. Fast forward to her undergraduate studies, Crystal branched into marketing which result in the introduction to graphic design. Pairing traditional art and technology together, Crystal discovered Procreate as a medium for her to unleash her creative outlet on her days off.
                            </p>
                            <br />
                            <p>Traits:</p>
                            <ul>
                                <li>Has an eye for design</li>
                                <li>Patience to sit for hours</li>
                                <li>Intermediate skill level with Procreate</li>
                                <li>Irregularly posts on social media</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
        );
    }
}

export default Artist;