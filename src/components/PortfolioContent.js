import React, { Component } from 'react'

class PortfolioContent extends Component{
  render(){
    return (
      <div class="portfolio-content">
        <header>
          <h2>Portfolio</h2>
        </header>
        <section>
          <h4>Summary</h4>
          <p>I am a designer and full stack developer with a primary focus on the front-end. I have worked on all layers of a project from implementing designer mockups, custom animations, and building APIs.</p>
        </section>
        <section>
          <div class="contactinfo">
            <a class="contactinfo__single" target="_blank">
              <i class="ion-ios-location-outline contactinfo__icon"></i>
              <span class="contactinfo__title">Austin, TX USA</span>
            </a>
            <a href="#" class="contactinfo__single" target="_blank">
              <i class="ion-ios-email-outline contactinfo__icon"></i>
              <span class="contactinfo__title">mariasantiago1989@gmail.com</span>
            </a>
            <a href="#" class="contactinfo__single" target="_blank">
              <i class="ion-social-github-outline contactinfo__icon"></i>
              <span class="contactinfo__title">devmaria</span>
            </a>
            <a href="#" class="contactinfo__single" target="_blank">
              <i class="ion-social-linkedin-outline contactinfo__icon"></i>
              <span class="contactinfo__title">maria-x-santi</span>
            </a>
          </div>
        </section>
      </div>
    )
  }


}

export default PortfolioContent;
