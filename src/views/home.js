import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import AppContact from '../components/home/contact';
import Skills from '../components/home/skills';
function AppHome() {
    return(
        <div className="main">
            <AppHero />
            <AppAbout />
            <Skills/>
            <AppFeature />
            <AppContact />
        </div>
    );
}

export default AppHome;