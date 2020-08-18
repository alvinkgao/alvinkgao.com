import React, { Component } from "react";

class About extends Component {
  render() {
    let name,
      profilepic,
      bio,
      bio2,
      city,
      state,
      zip,
      phone,
      email,
      resumeDownload;
    if (this.props.data) {
      name = this.props.data.name;
      profilepic = "images/" + this.props.data.image;
      bio = this.props.data.bio;
      bio2 = this.props.data.bio2;
      city = this.props.data.address.city;
      state = this.props.data.address.state;
      zip = this.props.data.address.zip;
      phone = this.props.data.phone;
      email = this.props.data.email;
      resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Alvin Gao Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <p>{bio2}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}, {state} {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
