// import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Content from './content/content';
import useScrollSpy from './hooks/useScrollSpy';
import Header from './content/Header';
import DebugScreenSize from './DebugScreenSize';
function App() {
  const sectionIds = ['about', 'skills', 'education', 'subscribe', 'services', 'portfolio', 'contact'];
  const activeSection = useScrollSpy(sectionIds);
  return (
    <>
          <Header activeSection={activeSection} /> {/* 👈 Add here */}

    <div className="wrapper">
     <Sidebar activeSection={activeSection}/>
     <Content/>
     <DebugScreenSize/>
    </div>
    </>
  );
}

export default App;
