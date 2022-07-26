const index = () => {
  return (
    <div className="w3-black">
    <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
      {/* <img src="/images/profile.jpg" style={{"width":"100%"}} /> */}
      <h3>Portfolio</h3>
      <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
        <i className="fa fa-home w3-xxlarge"></i>
        <p>HOME</p>
      </a>
      <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i className="fa fa-user w3-xxlarge"></i>
        <p>ABOUT</p>
      </a>
      <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i className="fa fa-tasks w3-xxlarge"></i>
        <p>Projects</p>
      </a>
      <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
        <i className="fa fa-envelope w3-xxlarge"></i>
        <p>CONTACT</p>
      </a>
    </nav>

    <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
      <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
        <a href="#" className="w3-bar-item w3-button" style={{"width":"25% !important"}}>HOME</a>
        <a href="#about" className="w3-bar-item w3-button" style={{"width":"25% !important"}}>ABOUT</a>
        <a href="#photos" className="w3-bar-item w3-button" style={{"width":"25% !important"}}>PHOTOS</a>
        <a href="#contact" className="w3-bar-item w3-button" style={{"width":"25% !important"}}>CONTACT</a>
      </div>
    </div>

    <div className="w3-padding-large" id="main">
      <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
        <h1 className="w3-jumbo"><span className="w3-hide-small">I&apos;m</span> Ahmad Hassan Khan.</h1>
        <p>Full Stack Web Developer</p>
        <img src="/images/profile.jpg" alt="boy" className="w3-image" style={{"width":"40%","borderRadius":"100%"}} />
      </header>
      <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
        <h2 className="w3-text-light-grey">Ahmad Hassan Khan</h2>
        <hr style={{"width":"200px"}} className="w3-opacity" />
        <p>Hi, I am Ahmad Hassan Khan, a full stack web designer and developer. I have worked in an IT company so I am have professional experience of web development. I have experience of more than two years. I have done full stack development using core PHP and it&apos;s frameworks as Wordpress and Codeigniter. Also I have great experience with MERN technology and NEXT js Applications. If you are looking for professional collaboration in web applications Contact me.
        </p>
        <h3 className="w3-padding-16 w3-text-light-grey">My Expertise</h3>
        <p className="w3-wide">HTML</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{"height":"28px","width":"90%"}}></div>
        </div>
        <p className="w3-wide">CSS & BOOTSTRAP</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{"height":"28px","width":"90%"}}></div>
        </div>
        <p className="w3-wide">NODE & EXPRESS & MONGODB</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{"height":"28px","width":"90%"}}></div>
        </div>
        <p className="w3-wide">PHP & CODEIGNITER</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{"height":"28px","width":"90%"}}></div>
        </div>
        <p className="w3-wide">JAVASCRIPT & REACT & NEXT JS</p>
        <div className="w3-white">
          <div className="w3-dark-grey" style={{"height":"28px","width":"90%"}}></div>
        </div><br />
        
        <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">11+</span><br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span><br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span><br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span><br />
            Meetings
          </div>
        </div>
        
        <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
        <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
          <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">1-3 Pages Web Design</li>
              <li className="w3-padding-16">3-5 Pages Web Design</li>
              <li className="w3-padding-16">5-7 Pages Web Design</li>
              <li className="w3-padding-16">
                <h2>$ 50</h2>
                <span className="w3-opacity">for 1-3 Pages Web Design</span>
              </li>
              <li className="w3-padding-16">
                <h2>$ 100</h2>
                <span className="w3-opacity">for 3-5 Pages Web Design</span>
              </li>
              <li className="w3-padding-16">
                <h2>$ 150</h2>
                <span className="w3-opacity">for 5-7 Pages Web Design</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <a href="#contact" className="w3-button w3-white w3-padding-large w3-hover-black">Contact</a>
              </li>
            </ul>
          </div>

          <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">1-3 Pages Fully functional Web Design</li>
              <li className="w3-padding-16">3-5 Pages Fully functional Web Design</li>
              <li className="w3-padding-16">5-7 Pages Fully functional Web Design</li>
              <li className="w3-padding-16">
                <h2>$ 100</h2>
                <span className="w3-opacity">for 1-3 Pages Fully functional Web Applications</span>
              </li>
              <li className="w3-padding-16">
                <h2>$ 150</h2>
                <span className="w3-opacity">for 3-5 Pages Fully functional Web Applications</span>
              </li>
              <li className="w3-padding-16">
                <h2>$ 200</h2>
                <span className="w3-opacity">for 5-7 Pages Fully functional Web Applications</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
              <a href="#contact" className="w3-button w3-white w3-padding-large w3-hover-black">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>  
        <img src="/images/cf.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{"width":"80px"}} />
        <p><span className="w3-large w3-margin-right">Kailavadiya</span> Top Buyer at Fiverr.</p>
        <p>Great Experience. Very Cooperative</p><br />
        
        <img src="/images/cf.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{"width":"80px"}} />
        <p><span className="w3-large w3-margin-right">Radical Movement</span> Top Buyer at Fiverr.</p>
        <p>Professional and worked on each detail.</p>
      </div>
      
      <div className="w3-padding-50 w3-content" id="photos">
        <h2 className="w3-text-light-grey">Projects on Github</h2>
        <hr style={{"width":"200px"}} className="w3-opacity" />

        <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/stripe_paypal" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/stripe_paypal</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/sports_management_site" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/sports_management_site</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/time_schedule_app" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/time_schedule_app</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/password_generator" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/password_generator</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/next_client_server" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/next_client_server</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/codeigniter_dashboard" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/codeigniter_dashboard</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/deploy_digital_ocean" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/deploy_digital_ocean</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/first_react_site" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/first_react_site</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/kaijas" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/kaijas</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/qasim-dashboard-client" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/qasim-dashboard-client</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/hostel_app" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/hostel_app</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/my_shopify" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/my_shopify</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/insta_downloder" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/insta_downloder</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/wordpress_plugin" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/wordpress_plugin</a>
          </div>
          <div className="my-4">
          <a href="https://github.com/Ahmadlohani/Background_Generator" target={"_blank"} rel="noreferrer" className="w3-white w3-padding-large w3-hover-black">https://github.com/Ahmadlohani/Background_Generator</a>
          </div>
        </div>
      </div>

      <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
        <h2 className="w3-text-light-grey">Contact Me</h2>
        <hr style={{"width":"200px"}} className="w3-opacity" />

        <div className="w3-section">
          <p><i className="fa fa-user fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Ahmad Hassan Khan</p>
          <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Lahore, Pakistan</p>
          <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: ah203076@gmail.com</p>
        </div><br />
        <p>Let's get in touch. Send me a message:</p>

        <form action="/action_page.php" target="_blank">
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" disabled name="Name" /></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" disabled name="Email" /></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" disabled name="Subject" /></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" disabled name="Message" /></p>
          <p>
            <button className="w3-button w3-light-grey w3-padding-large" type="submit" disabled>
              <i className="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </p>
        </form>
      </div>
      
      <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
        <a href="https://www.facebook.com/profile.php?id=100022825365715" target={"_blank"}><i className="fa fa-facebook-official w3-hover-opacity p-2"></i></a>
        <i className="fa fa-instagram w3-hover-opacity p-2"></i>
        <i className="fa fa-snapchat w3-hover-opacity p-2"></i>
        <i className="fa fa-pinterest-p w3-hover-opacity p-2"></i>
        <i className="fa fa-twitter w3-hover-opacity p-2"></i>
        <a href="https://www.linkedin.com/in/ahmad-hassan-62a65a240/" target={"_blank"}><i className="fa fa-linkedin w3-hover-opacity p-2"></i></a>
      </footer>
      
    </div>
    </div>
  )
}

export default index