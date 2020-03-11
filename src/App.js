import React from 'react';
import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import Services from './components/Services';


function App() {
  const serviceList = [
    {
      title: 'E-Commerce',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      icon: 'fa-shopping-cart'
    },
    {
      title: 'Responsive Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      icon: 'fa-laptop'
    },
    {
      title: 'Web Security',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.',
      icon: 'fa-lock'
    }
  ]
  const portfolioLinks = [
    {
      title: 'Test1',
      caption: 'React'
    },
    {
      title: 'Javascript',
      caption: 'Python'
    },
    {
      title: 'Java',
      caption: 'Programming Language'
    },
    {
      title: 'Oracle',
      caption: 'Database'
    },
    {
      title: 'Java',
      caption: 'Programming Language'
    },
    {
      title: 'Oracle',
      caption: 'Database'
    }
  ]
  return (
    <div className="App">
      <div>
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
      </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
        <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">
                    Services
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">
                    Portfolio
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Team
            </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
            </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header */}
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Our Studio!</div>
              <div className="intro-heading text-uppercase">
                It's Nice To Meet You
        </div>
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="#services"
              >
                Tell Me More
        </a>
            </div>
          </div>
        </header>
        {/* Services */}
        <Services serviceList={serviceList} />
        {/* Portfolio Grid */}
        <Portfolio portfolioLinks={portfolioLinks} />

        {/* About */}
        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
          </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={process.env.PUBLIC_URL + "/assets/img/about/1.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 className="subheading">Our Humble Beginnings</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Sunt ut voluptatum eius sapiente, totam reiciendis
                          temporibus qui quibusdam, recusandae sit vero unde, sed,
                          incidunt et ea quo dolore laudantium consectetur!
                  </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={process.env.PUBLIC_URL + "/assets/img/about/2.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 className="subheading">An Agency is Born</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Sunt ut voluptatum eius sapiente, totam reiciendis
                          temporibus qui quibusdam, recusandae sit vero unde, sed,
                          incidunt et ea quo dolore laudantium consectetur!
                  </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={process.env.PUBLIC_URL + "/assets/img/about/3.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>December 2012</h4>
                        <h4 className="subheading">Transition to Full Service</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Sunt ut voluptatum eius sapiente, totam reiciendis
                          temporibus qui quibusdam, recusandae sit vero unde, sed,
                          incidunt et ea quo dolore laudantium consectetur!
                  </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={process.env.PUBLIC_URL + "/assets/img/about/4.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>July 2014</h4>
                        <h4 className="subheading">Phase Two Expansion</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Sunt ut voluptatum eius sapiente, totam reiciendis
                          temporibus qui quibusdam, recusandae sit vero unde, sed,
                          incidunt et ea quo dolore laudantium consectetur!
                  </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>
                        Be Part
                  <br />
                        Of Our
                  <br />
                        Story!
                </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Team */}
        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
          </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={process.env.PUBLIC_URL + "/assets/img/team/1.jpg"} alt="" />
                  <h4>Kay Garland</h4>
                  <p className="text-muted">Lead Designer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={process.env.PUBLIC_URL + "/assets/img/team/2.jpg"} alt="" />
                  <h4>Larry Parker</h4>
                  <p className="text-muted">Lead Marketer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={process.env.PUBLIC_URL + "/assets/img/team/3.jpg"} alt="" />
                  <h4>Diana Pertersen</h4>
                  <p className="text-muted">Lead Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
                  laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
                  ea, alias ut unde.
          </p>
              </div>
            </div>
          </div>
        </section>
        {/* Clients */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={process.env.PUBLIC_URL + "/assets/img/logos/envato.jpg"}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={process.env.PUBLIC_URL + "/assets/img/logos/designmodo.jpg"}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={process.env.PUBLIC_URL + "/assets/img/logos/themeforest.jpg"}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src={process.env.PUBLIC_URL + "/assets/img/logos/creative-market.jpg"}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
          </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Your Name *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email *"
                          required="required"
                          data-validation-required-message="Please enter your email address."
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder="Your Phone *"
                          required="required"
                          data-validation-required-message="Please enter your phone number."
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message *"
                          required="required"
                          data-validation-required-message="Please enter a message."
                          defaultValue={""}
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-12 text-center">
                      <div id="success" />
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright © Your Website 2019</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
