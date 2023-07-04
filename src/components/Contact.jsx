import { useRef } from "react";
import {Fade, Slide } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

    // if (!this.props.data) return null;

    // const name = this.props.data.name;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    // const message = this.props.data.contactmessage;

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_wpypne2', 'template_zp4dq64',   form.current, 'rwQWct88sdu84DUti')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <div className="lead">Please contact the contact below.</div>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm">
                <fieldset>
                <div>
                    <label htmlFor="contactName">
                    Name <span className="required">*</span>
                    </label>
                    <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="user_name"
                    />
                </div>

                <div>
                    <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                    </label>
                    <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="user_email"
                    />
                </div>

                <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="subject"
                    />
                </div>

                <div>
                    <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                    </label>
                    <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="message"
                    ></textarea>
                </div>
                    <button type="submit" className="submit">Submit</button>

                </fieldset>
              </form>
              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!
                  <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                Muhammad Rizky Amalsyah
                <br />
                {/* {street} <br /> */}
                Palembang, South Sumaterra
                <br />
                <span>(+62) 89644843233</span>
                </p>
            </div>

            {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                <li>
                    <span>
                    Saya bahagia kemarin <br/>
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                    <a href="./">2 Days Ago</a>
                    </b>
                </li>
                <li>
                    <span>
                    semoga kamu baik-baik saja yaa<br/>
                    <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                    <a href="./">3 Days Ago</a>
                    </b>
                </li>
                </ul>
            </div> */}
            </aside>
          </Slide>
        </div>
      </section>
    );
  }

export default Contact;