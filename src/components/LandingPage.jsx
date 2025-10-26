import React from "react";
import "./LandingPage.css";
import emailjs from "emailjs-com";

export default function LandingPage() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6qyclzd",    
        "template_sd8p5de",    
        e.target,
        "dtGns1XLCoo_GMDkb"     
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="lp-root">
      <header className="lp-header">
        <nav className="lp-nav">
          <a href="#introduction">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main>
        <section id="introduction" className="lp-intro">
          <video
            className="lp-video"
            src="/images/first.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="lp-video-overlay" aria-hidden="true" />
          <div className="lp-intro-content">
            <h1>Mahima Singavarapu</h1>
            <p className="lp-subtitle">Data Scientist</p>  
          </div>
        </section>

        <section id="about" className="lp-section">
          <div className="lp-container">
            <div className="lp-about">
              <h2>ABOUT</h2>
              <p>
                A zealous data science graduate with prior experience in web
                development and software engineering, anxious to apply the
                knowledge and skills gained to solve real-world problems using
                analytical and creative skills. Also, proficient in python
                programming, machine learning algorithms, data wrangling, data
                visualizations, databases, predictive modelling and cloud
                computing. I eagerly await to apply my skills to uncover
                valuable insights from the data to propel business growth and
                advancement and hence aspiring for a propitious opportunity
                which can help me enhance my skills and mentor my path
                professionally.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="lp-section lp-alt">
          <div className="lp-container">
            <h2>SKILLS</h2>
            <div className="lp-table-wrapper">
              <table className="lp-skill-table">
                <tbody>
                  <tr>
                    <th>Programming Languages</th>
                    <td>Python, Java, C++, C, AS400-RPG (ILE RPG, RPGLE), CL, CLLE</td>
                  </tr>
                  <tr>
                    <th>Data Visualization</th>
                    <td>Matplotlib, Seaborn, Tableau, Altair, Plotly, Folium</td>
                  </tr>
                  <tr>
                    <th>Machine Learning</th>
                    <td>MATLAB, Scikit-Learn, TensorFlow, PyTorch, Keras, NumPy, Pandas</td>
                  </tr>
                  <tr>
                    <th>Big Data & Cloud</th>
                    <td>PySpark, AWS, Google Cloud Platform, Azure, IBM Cloud</td>
                  </tr>
                  <tr>
                    <th>Databases</th>
                    <td>MySQL, PostgreSQL, MongoDB, IBM DB2</td>
                  </tr>
                  <tr>
                    <th>Version Control & Deployment</th>
                    <td>Git, Docker, Kubernetes, Jenkins</td>
                  </tr>
                  <tr>
                    <th>Web Development</th>
                    <td>Django, Flask, MERN</td>
                  </tr>
                  <tr>
                    <th>Front-End Development</th>
                    <td>JavaScript, React.js, HTML/CSS, Bootstrap, Node.js, Three.js, Typescript</td>
                  </tr>
                  <tr>
                    <th>IDEs and Package managers</th>
                    <td>Anaconda, PyCharm, Jupyter Notebook, Visual Studio</td>
                  </tr>
                  <tr>
                    <th>Computer Vision & NLP</th>
                    <td>NLTK, TextBlob, Transformers, SpaCy, Gensim, OpenCV, Scikit-image</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="projects" className="lp-section">
          <div className="lp-container">
            <h2>PROJECTS</h2>
            <div className="lp-project-grid">
              <article className="lp-card">
                <img src="/images/port1.png" alt="Project One" />
                <p>Market Analysis using Visualizations for a UK Online Retail Store Specializing in Unique Gifts</p>
              </article>
              <article className="lp-card">
                <img src="/images/port2.png" alt="Project Two" />
                <p>Life with Polycystic Ovary Syndrome (PCOS) comments - Analysis</p>
              </article>
              <article className="lp-card">
                <img src="/images/port3.png" alt="Project Three" />
                <p>Sentiment Analysis of Tweets dataset with Emojis replaced with their Descriptions</p>
              </article>
              <article className="lp-card">
                <img src="/images/port4.png" alt="Project Four" />
                <p>Performance of K-Means Clustering and Gaussian Mixture Models Clustering is compared on Travel review ratings data</p>
              </article>
              <article className="lp-card">
                <img src="/images/port5.png" alt="Project Five" />
                <p>PYTHON’s and MATLAB’s performance on Breast Cancer Wisconsin Dataset</p>
              </article>
              <article className="lp-card">
                <img src="/images/port6.png" alt="Project Six" />
                <p>Comparison Of MULTI-LAYERED PERCEPTRON And SUPPORT VECTOR MACHINES on Breast Cancer Wisconsin Dataset</p>
              </article>
              <article className="lp-card">
                <img src="/images/port7.png" alt="Project Seven" />
                <p>Training and Comparison Of Resnet18, Color_Histogram and SVM, and HOG and SVM on Face Mask detection images</p>
              </article>
              <article className="lp-card">
                <img src="/images/port8.png" alt="Project Eight" />
                <p>Olive – a Recipe Generation and Ingredient Substitution App using NLP Techniques</p>
              </article>
            </div>
          </div>
        </section>

        <section id="connect" className="lp-section lp-alt">
          <div className="lp-container lp-center">
            <h2>CONNECT</h2>
            <p>Want to work together or say hi? Drop a message.</p>
            <form className="lp-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                aria-label="Your name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="user_email"
                aria-label="Your email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                aria-label="Message"
                placeholder="Message"
                rows={4}
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="lp-footer">© {new Date().getFullYear()} Mahima Singavarapu</footer>
    </div>
  );
}