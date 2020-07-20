/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import resumeData from './resumeData';
// import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        {/* <Contact resumeData={resumeData} /> */}
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
