import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import weather from './assets/img/weather.png';




function App() {
  const portfolioLinks = [
    {
      title: 'Digtal Clock',
      caption: 'See the current time in 12hr or 24hr format'
    },

    {
      title: 'Evil Circle',
      caption: 'A simple javascript game'
    },

    {
      title: 'React Restaurant',
      caption: 'A restaurant website using React and API call'
    }
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
        <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading text-uppercase">Eric Sparks</div>
            <div className="intro-lead-in">My web developer journey!</div>
          </div>
        </div>
      </header>




      <section>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Local Weather</h5>
                <p class="card-text">
                  Need to see the local weather? This javascript APP pulls in the local weather for you!
        </p>
              </div>
              <div class="card-footer">
                <small class="text-muted"><a class="btn btn-outline-danger" href="https://github.com/Sparkseric90/weather" role="button">Weather</a></small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Evil Circle</h5>
                <p class="card-text">
                 Simple game of a circle destroying other circles.
        </p>
              </div>
              <div class="card-footer">
                <small class="text-muted"><a class="btn btn-outline-danger" href="https://github.com/Sparkseric90/evilcircleball" role="button">EVIL</a></small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Mind Reader</h5>
                <p class="card-text">
                  Want to play a game? This mind reader can predict your emoji pick.
        </p>
              </div>
              <div class="card-footer">
                <small class="text-muted"><a class="btn btn-outline-danger" href="https://github.com/Sparkseric90/Mind-Reader" role="button">Mind Reader</a></small>
              </div>
            </div>
          </div>
        </div>

      </section>







      <section className="bg-light page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About me!</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" alt="" />
                <h4>Eric Sparks</h4>
                <p className="text-muted">Full Stack Developer/3D Printing Creationist</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://instagram.com/Sparks3DDesigns">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/Sparkseric90">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/ericdsparks/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/sparkseric90">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="page-section" id="contact">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Pre-Work
      </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">

                <h2>Week1</h2>
                <p>Its been a boots on the ground type of week. Monday we had our orientation to get the layout of how our next few weeks will be.
                I started the week like a sponge and tried to soak up as much as I could with the exercises that was provided to us. I've watched many videos, 
                and read a **ton** of articles and tutorials along the way to get a grasp on things. I wasn't nervous starting this journey but knew it would be 
                a tough trying to grasp new things so fast. Im slowly adapting myself to this. It'll take sometime to be completley comfortable, but i'm making my 
                way down this long road slowly but surely.</p>

                <h2>Week2</h2>
                <p>Wow week 2 has been insane! I personally feel like this week went by super quick! I've wrote simple <strong>HTML</strong> lines in the past, but this week 
                was a real treat! Along with <strong>HTML</strong> I got to look at <strong>CSS</strong> for the first time since the MySpace days! Yeah, its been that long. Who am I kidding though? We all 
                wish that simple social media platform would come back so we could show everyone how great we'll be after bootcamp at writing CSS. I've learned alot by using pseudocode 
                to help myself to layout my projects and get an idea of how things are going to work! I look forward to using this process more as my journey in bootcamp progress's.
                My biggest blockers this week has been the simplest mistakes. Between making grammar errors and using single and double quotes on the same code. I'm finally starting to get the hang of making my code look great!
                As i'm coming towards the end of this weeks blog post and I've looked ahead to next week's work. I'm excited to start learning JavaScript. It's been something I've always looked at and wondered to myself "How does that work". 
                Well the beauty is this, i'm finally getting to learn this!</p>

                <h2>Week3</h2>
                <p>**Html** provides us with the structure we need for our webpages. It helps us layout out exactly what we need to make our websites basic functions work. **CSS** takes that structure a step further and helps us size those sites to fit our phones, laptops, or desktops. It also takes and makes our sites look fancy with all the colors and the ability to apply custom backgrounds. **Java** takes and adds all the fancy features that we all love to our sites. It makes our pages easier to interact with. It also makes our sites able to complete complex functions.I've re-wrote this section a few times. At first I had a difficult time trying to understand what the question was 
                "What are some objects that your blog incorporates?" 
                But after making some changes to pseudo code I realized what it was asking of me. I've used pseudo code to plan out this blog. Wither it be for planning for pictures and how to place them, what quotes to include, or what links to post.
                Pseudo code has taught me alot this week. The most important lesson was that not all Pseudo code is the same. Not everyone's will look the same as mine. It's still hard trying to plan something out before I jump into it, but its helping me get a grasp on things as I progress.</p>

                <h2>Week4</h2>
                <p>The **first** week was overwhelming. Learning all the Git commands and Terminal commands. Making notes and repeating things really helped me get a quick grip on this. I've struggled with asking for help on things. I've always been the one to try to help others but never wanted to ask for help myself. Fail, fail, and Fail! Also another personal weakness but i'm getting through that and becoming a better programmer for it!
                The **second** week was the quickest week out of the 4 weeks of pre-work. I had previously worked with HTML and CSS very little so I had a little understanding of how they worked together. It was interesting to learn all the new things I could do with CSS to stylize everything on my HTML pages.
                The **third** week at the time was the hardest for me. I have a hard time planning my stuff out and I'm having to learn to do so. I've found out that if I make a digital drawing of my project and include code I think that would work, really helps myself better. It's just new habit's  and muscle memories that needs to be programmed within myself LOL.
                The **fourth** week. WOW! is all I can say. This was Javascript week. I had never really studied JS or looked into it. I knew it was full of math equations and that really had me worried. I've always thought i've been horrible at math and let it get in my head quite a bit. I let the thinking of me being horrible at math slow me down. I've had to read materials more, and venture out and find more materials to explain things better. My countdown clock project was a slight accomplishment for me being able to convert milliseconds into hours, mins, and seconds.
                I'm really looking forward to the next few months of in person learning. It's were im the most comfortable and in my element I feel. I'm a hands on person and love the social interaction that comes with it. So heres to the next few weeks!</p>

              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Bootcamp
      </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              <h2>Week5</h2>
              <p>I was held back by Bootstrap at first. Trying to get all my columns and rows to line up correctly was hard. It's still hard and im doing my best to work through those heartaches. Also struggling on Javascript. Its been hard. I have a hard time figuring out the right way to type it out, but I can read it and tell you how the piece of code works.
                  I would love to learn more about functions and math equations, But with week 2 of in person coming up, I know that'll we'll hit it hard and heavy this week.
                  I would like to figure out how to make a really simple but super responsive and elegant to the eyes website.</p>

              <h2>Week6</h2>
              <p>What did you learn about that helped you understand the development process?
                  Pseudocode, Pseudocode and more Pseudocode. I found out that, If i draw my program out as a picture first that gives me an idea of exactly what I want or need. Then I use plain english to explain exactly what my program will do. It helps me lay out exactly what I want. My next steps will be using coding language and plain english to get exactly what I want.
                  What does it mean to develop good code?
                  Have a good plan for your code. Pseudocode. Commenting your code as you write it, so you can look back later on and tell exactly what you was thinking at that point of time.
                  What does it mean to be a good developer?
                  Not being afraid to fail. Failing plagues everyone. It's super important to realize to be good at anything, you have to fail, and fail good to become exactly what you want.
                  What is one thing that programmers hate doing?
                  Repitition. Typing the same line of code over and over to acheive one thing.</p>

              <h2>Week7</h2>
              <p>1.) What are three ideas you might want to do for your final project?</p>

                <p>2.)Why do you see Javascript useful or hard to use?</p>

                <p> 3.)What aspects about javaScript are you interested in learning more about?</p>

                <p> 4.)What are your thoughts about the MVC Design pattern?</p>

                <p> 5.)What are some other Design Patterns?</p>

              <h2>Week8</h2>
              <p>1.)Why do you see JavaScript frameworks and Libraries useful or hard to use?</p>
              <p>2.)What Frameworks or Libraries are you interested in learning more about?</p>
              <p>3.)Find one emerging JavaScript tool that you would like to learn more about or use in your final project.</p>


              <h2>Week9</h2>
              <p>1.)Why are CLIs scary?</p>
              <p>2.)What have you learned about CLIs?</p>
              <p>3.)Would you build a CLI? What would it do?</p>
              <p>4.)List some ideas that without a Framework, would take you a longtime to code.</p>
              <p>5.)How do you feel now (week 5) compared to when you started?</p>
              <p>6.)What questions haven't you answered on your blog page yet?</p>
        

              <h2>Week10</h2>
              <p></p>

              <h2>Week11</h2>
              <p></p>

              <h2>Week12</h2>
              <p></p>
      </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Post Bootcamp
      </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Eric Sparks 2021</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
