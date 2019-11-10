import Collapse from "@kunukn/react-collapse";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import pic_airbnb from "./airbnb.png";
import pic_clf from "./clf.png";
import pic_dataprotec from "./dataprotec.png";
import pic_kidaroo from "./kidaroo.png";
import Links from "../links.jsx";

export const standardPadding = 50;

class Carouselpro extends Component {
  state = {
    openIndex: 1
  };

  handleAClick = index => {
    const { openIndex } = this.state;
    this.setState({ openIndex: openIndex === index ? -1 : index });
  };

  render() {
    const { openIndex } = this.state;
    return (
      <div className="main projects">
        <div onClick={() => this.handleAClick(1)} className="projetcs">
          <h3 id="projects" className="section-title">
            PROJECTS &#10504;
          </h3>
        </div>
        <Collapse isOpen={openIndex === -1}>
          <Carousel>
            <Carousel.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/annamariapl/data-protection-form"
              >
                <img
                  className="d-block w-100"
                  src={pic_dataprotec}
                  alt="Data Protection Form"
                />
              </a>
              <div>
                <h3 className="carousel-title">Data Protection Form</h3>
                <p className="carousel-title">
                  Rails App - Activities for Children
                </p>

                <h4>Collectiing information to help with TOM esstimation</h4>
                <p>
                  TOM: technical and organizational measures. <br />
                </p>

                <p>
                  <strong> What the App does: </strong>
                </p>

                <p>
                  The Data from a
                  <span className="highlight">
                    YAML file lands in a database
                  </span>
                  via seed.rb. <br />
                  The data populates a formular (Simple_From: checkboxes and
                  text fields.
                </p>

                <p>
                  <span className="highlight">Security Check</span>
                  <br />
                  After clicking the button 'Click - check...' the app displayes
                  a "percentage of security" (real logic not implemented,
                  'placeholder logic').
                </p>

                <p>
                  <span className="highlight">Saving to .docx format</span>
                  <br />
                  The collected Data Choices are being saved into a .docx (word
                  document- setup with Caracal Gem). The Data can be manipulated
                  directly in agreeements_controller.rb. The structure of the
                  .docx document is of course not real and definitly not final -
                  due to know-how protecting.
                </p>

                <p>
                  <span className="highlight">
                    Sends an E-Mail with doc Datei
                  </span>
                  <br />
                  The doc is being send to an E-Mail (configured with Postfix).
                  A safety copy of the document is being stored to a folder as
                  well.
                </p>

                <p>
                  Next steps: <br />
                  1) exchange yml for csv to make it excel compatable., <br />
                  2) Add text-field with prefilled, changeable text. It might be
                  cool to use React (easy following changes) - so I am learning
                  React now and will come back to this project very
                  soon(hopefully).
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://kidaroo.club"
              >
                <img
                  className="d-block w-100"
                  src={pic_kidaroo}
                  alt="kidaroo.club"
                />
              </a>
              <div>
                <h3 className="carousel-title">Kidaroo</h3>
                <p className="carousel-title">
                  Rails App - Activities for Children
                </p>

                <h4>Rails App - Activities for Children </h4>
                <p>
                  Find free-time activities for your child, pay with a credit
                  card, log-in, check your dashboard and chat with other users.
                </p>
                <p>
                  The project came to life in just 10 days. It was an effect of
                  a good teamwork and was a byproduct of a coding bootcamp.
                  Though the app was done just for practising purposes, it would
                  be a good base for a fully functioning application.
                </p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://celebrate-life.info/2019/"
              >
                <img
                  className="d-block w-100"
                  src={pic_clf}
                  alt="clf festival"
                />
              </a>
              <div>
                <h3 className="carousel-title">Celebrate Life Festival</h3>
                <p className="carousel-title">Launched WordPress Project</p>
                <h4>Celebrate Life Festival </h4>
                <p>
                  Buy tickets via Event-Brite, watch media stream library and
                  get informed about the Festival. The website is bilingual.
                </p>
                <p>This is a launched project.</p>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://lovelytreebnb.herokuapp.com"
              >
                <img className="d-block w-100" src={pic_airbnb} alt="AirBnb" />
              </a>

              <div>
                <h3 className="carousel-title">Airbnb for squirrels </h3>
                <p className="carousel-title">Rails Fun Project</p>
                <p>Rails App - a fun project</p>
                <p>
                  It doesn't mean that it doesn't work. Offer a tree a host or
                  rent a tree. No need to log-in for testing.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
          {/*      <CustomCards />*/}

          <hr />
          <h4>
            <br />
            More projects:
          </h4>
          <div>
            <Links
              links={[
                { text: "barefoot-yoga.de", link: "http://barefoot-yoga.de" },
                {
                  text: "space-in-between.de",
                  link: "http://space-in-between.de"
                },
                { text: "ai-and-law.com", link: "http://ai-and-law.com" },
                {
                  text: "geheimnisschutz.eu",
                  link: "http://geheimnisschutz.eu"
                },
                {
                  text: "marke-und-domain.de",
                  link: "http://marke-und-domain.de"
                }
              ]}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Carouselpro;
