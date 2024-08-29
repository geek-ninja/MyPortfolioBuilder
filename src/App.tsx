import AOS from 'aos'
import 'aos/dist/aos.css';
import { createContext, useState } from 'react';
import './App.css';
import DotPattern from './components/DotPattern';
import Meteors from './components/Meteors';
import NavBar from './components/NavBar';
import './index.css'
import Experience from './modules/experience/Experience';
import Banner from './modules/header/Banner';
import Skills from './modules/skills/Skills';
import { cn } from './utils';
import Projects from './modules/projects/Projects';
import Footer from './modules/footer/Footer';

export const ThemeContext = createContext<any>(true);

document.body.classList.toggle("dark");

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

function App() {
  const [dark, setDark] = useState(true);
  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <div className="relative overflow-hidden bg-white dark:bg-black">
        <Meteors number={45} />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] ",
          )}
        />
        <NavBar isDark={dark} />
        <Banner />
        <Experience />
        <Skills isDark={dark} />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
