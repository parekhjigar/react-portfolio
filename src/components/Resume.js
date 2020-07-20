/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row projects">
          <div className="three columns header-col">
            <h1>
              <span>Projects</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.projects &&
              resumeData.projects.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.projectName}</h3>
                      <p className="info">{item.projectDesc}</p>
                      <p>{item.techStack}</p>
                      <p>
                        <a href={item.url} target="_blank">
                          <Button>View project</Button>
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}
