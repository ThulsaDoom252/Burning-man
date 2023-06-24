import React from 'react';
import photo1 from './img1.jpg'
import photo2 from './img2.jpg'
import photo3 from './img3.jpg'

const Section = () => {
    return (
        <section className={'container section'}>
            <h1 className={'section-title'}>About the Event</h1>
            <div className={'section-text-main-block'}>
                <div className="section-text-left-block section-text-block">
                    <h2 className={'section-text-block-title'}>Rebuilding society</h2>
                    <div className={'section-text'}>
                        Burning Man is a network of people inspired by the values reflected in the Ten Principles and
                        united in the pursuit of a more creative and connected existence in the world. Throughout the
                        year we work to build Black Rock City, home of the largest annual Burning Man gathering, and
                        nurture the distinctive culture emerging from that experience.
                    </div>
                </div>
                <div className="section-text-right-block section-text-block">
                    <h2 className={'section-text-block-title'}>This driven us</h2>
                    <div className={'section-text'}>
                        Burning Man Project will bring experiences to people in grand, awe-inspiring and joyful ways
                        that lift the human spirit, address social problems, and inspire a sense of culture, community,
                        and civic engagement. Burning Man provides infrastructural tools and frameworks to support local
                        communities in applying the Ten Principles through six interconnected program areas, including
                        Arts, Civic Involvement, Culture, Education, Philosophical Center, and Social Enterprise.
                    </div>
                </div>
            </div>
            <div className={'section-photos-block'}>
                <div className='section-photo-narrow-item'>
                    <img className={'section-photo'} src={photo1} alt="photo-1"/>
                </div>
                <div className="section-photo-narrow-item section-second-photo">
                    <img className={'section-photo'} src={photo2} alt="photo-2"/>
                </div>
                <div className="section-photo-wide-item">
                    <img className={'section-photo'} src={photo3} alt="photo-3"/>
                </div>
            </div>
        </section>
    );
};

export default Section;