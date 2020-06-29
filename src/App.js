import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import resumeData from './resumeData';
import ContactUs from './components/ContactUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;