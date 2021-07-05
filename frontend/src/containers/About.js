import React from "react";
import { Link } from "react-router-dom";
import aboutus1 from '../assets/images/aboutus1.webp'
import aboutus2 from '../assets/images/aboutus2.webp'

const About = () => {
  return (
    <>
      <section class="about-us" id="aboutdiv">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 aboutdiv my-4">
              <h5>About Us</h5>
              <div class="hl"> </div>
              <div class="line"></div>
              <div class="about-text1">
                <span>
                  I'm a title. Click here to add your own text and edit me.
                </span>
              </div>
              <div class="about-text2">
                <span>
                  I'm a title. Click here to add your own text and edit me. ​
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me and you
                  can start adding your own content and make changes to the
                  font. Feel free to drag and drop me anywhere you like on your
                  page. I’m a great place for you to tell a story and let your
                  users know a little more about you. ​ This is a great space to
                  write long text about your company and your services. You can
                  use this space to go into a little more detail about your
                  company. Talk about your team and what services you provide.
                  Tell your visitors the story of how you came up with the idea
                  for your business and what makes you different from your
                  competitors. Make your company stand out and show your
                  visitors who you are. At Wix we’re passionate about making
                  templates that allow you to build fabulous websites and it’s
                  all thanks to the support and feedback from users like you!
                  Keep up to date with New Releases and what’s Coming Soon in
                  Wixellaneous in Support. Feel free to tell us what you think
                  and give us feedback in the Wix Forum. If you’d like to
                  benefit from a professional designer’s touch, head to the Wix
                  Arena and connect with one of our Wix Pro designers. Or if you
                  need more help you can simply type your questions into the
                  Support Forum and get instant answers. To keep up to date with
                  everything Wix, including tips and things we think are cool,
                  just head to the Wix Blog! Tip: Add your own image by double
                  clicking the image and clicking Change Image. ​ ​
                  Arena and connect with one of our Wix Pro designers. Or if you
                  need more help you can simply type your questions into the
                  Support Forum and get instant answers. To keep up to date with
                  everything Wix, including tips and things we think are cool,
                  just head to the Wix Blog! Tip: Add your own image by double
                  click
                  Arena and connect with one of our Wix Pro designers. Or if you
                  need more help you can simply type your questions into the
                  Support Forum and get instant answers. To keep up to date with
                  everything Wix, including tips and things we think are cool,
                  just head to the Wix Blog! Tip: Add your own image by double
                  click
                  Arena and connect with one of our Wix Pro designers. Or if you
                  need more help you can simply type your questions into the
                  Support Forum and get instant answers. To keep up to date with
                  everything Wix, including tips and things we think are cool,
                  just head to the Wix Blog! Tip: Add your own image by double
                  click
                </span>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <div class=" pic1 image-shodow">
                <img
                  src={aboutus1}
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class=" pic2 image-shodow">
                <img
                  src={aboutus2}
                  alt=""
                  class="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
