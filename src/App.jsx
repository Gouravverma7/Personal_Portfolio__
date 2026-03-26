// import './App.css'

import AboutMeMain from './components/Aboutme/AboutMeMain';
import ContactMeMain from './components/ContactMeSection/ContactMeMain';
import HelperSection from './components/HelperSection';
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import SubHeroSection from './components/heroSection/SubHeroSection';
import NavbarMain from './components/navbar/NavbarMain';
import ProjectsMain from './components/projects/ProjectsMain';
import SkillsMain from './components/SkillSection/SkillsMain';
import SubSkills from './components/SkillSection/SubSkills';
import FooterMain from './components/footer/footerMain';


function App() {

  return (
  <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <HelperSection/>
    <SkillsMain/>
    <SubSkills/>
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain />
  </main>
  );
}

export default App;
