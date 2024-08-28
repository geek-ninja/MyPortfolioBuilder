import './App.css';
import NavBar from './components/NavBar';
import './index.css'
import Experience from './modules/experience/Experience';
import Banner from './modules/header/Banner';

function App() {
  document.documentElement.classList.add('dark')
  return (
    <div className="bg-white dark:bg-black">
      {/* <NavBar /> */}
      <Banner />
      <Experience/>
    </div>
  );
}

export default App;
