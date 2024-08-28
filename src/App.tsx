import './App.css';
import DotPattern from './components/DotPattern';
import Meteors from './components/Meteors';
import NavBar from './components/NavBar';
import './index.css'
import Experience from './modules/experience/Experience';
import Banner from './modules/header/Banner';
import { cn } from './utils';

function App() {
  document.documentElement.classList.add('dark')
  return (
    <div className="relative overflow-hidden bg-white dark:bg-black">
      <Meteors number={30} />
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
      <NavBar />
      <Banner />
      <Experience />
    </div>
  );
}

export default App;
