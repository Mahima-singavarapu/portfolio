import React from "react";
import "./LandingPage.css";
import emailjs from "emailjs-com";
import vid from '../assets/images/first.mp4';
import port1 from '../assets/images/port1.png';
import port2 from '../assets/images/port2.png';
import port3 from '../assets/images/port3.png';
import port4 from '../assets/images/port4.png';
import port5 from '../assets/images/port5.png';
import port6 from '../assets/images/port6.png';
import port7 from '../assets/images/port7.png';
import port8 from '../assets/images/port8.png';

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
          <a href="#exp">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main>
        <section id="introduction" className="lp-intro">
          <video
            className="lp-video"
            src={vid}
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
                A highly motivated Data Science graduate with a strong foundation in Python for Analytics, Machine Learning and Advanced SQL, and prior experience as Data Analyst, Skilled at solving complex data challenges through a blend of analytical, programming and creative skills. Proficient in Data Wrangling, Visualization, ETL processes and statistical analysis. Experienced in machine learning techniques such as classification, regression, clustering, customer segmentation and feature engineering, along with model evaluation, model training and database management both SQL and NoSQL. Demonstrated expertise in data pipeline development, predictive modeling, Cloud Analytics using Snowflake and BigQuery and dashboard creation using PowerBI and Looker, also accomplished in Tableau and Azure DataBricks for advanced analytics and visualization. Passionate about transforming data into meaningful insights and propel impactful business decisions with strong presentation skills while continuously learning and contributing to the evolving world of AI and analytics.  
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
                    <td>Basic Python, Python for analytics, Advanced SQL, AS400-RPG (ILE RPG, RPGLE), CL, CLLE</td>
                  </tr>
                  <tr>
                    <th>Data Visualization</th>
                    <td>PowerBI, Tableau, Azure Databricks, Streamlit, Using Python - Matplotlib, Seaborn, Altair, Plotly, Folium</td>
                  </tr>
                  <tr>
                    <th>Machine Learning</th>
                    <td>NumPy, Pandas, Scikit-Learn, Pytorch, Tensorflow, StatsModels, SciPy, MATLAB</td>
                  </tr>
                  <tr>
                    <th>Big Data & Cloud</th>
                    <td>PySpark, AWS, Google Cloud Platform (GCP), Azure Databricks, Google BigQuery, Snowflake</td>
                  </tr>
                  <tr>
                    <th>Databases</th>
                    <td>MySQL, PostgreSQL, MongoDB, IBM DB2</td>
                  </tr>
                  <tr>
                    <th>Version Control & Deployment</th>
                    <td>Git, GitHub Actions, GitLab CI/CD, Docker</td>
                  </tr>
                  <tr>
                    <th>Web Development</th>
                    <td>Django, Flask, FastAPI</td>
                  </tr>
                  <tr>
                    <th>Front-End Development</th>
                    <td>JavaScript, React.js, HTML/CSS, Bootstrap, TailwindCSS</td>
                  </tr>
                  <tr>
                    <th>IDEs and Package managers</th>
                    <td>Anaconda, PyCharm, Jupyter Notebook, VS Code, Google Colab, Kaggle Notebook</td>
                  </tr>
                  <tr>
                    <th>Computer Vision & NLP</th>
                    <td>NLTK, TextBlob, Transformers, HuggingFace Transformers, SpaCy, Gensim, OpenCV, Scikit-image</td>
                  </tr>
                   <tr>
                    <th>Others</th>
                    <td>Excel (Advanced), Google Sheets, PowerPoint, Microsoft Teams, slack, Jira, ServiceDesk, Google Workspace, Zoom, SharePoint, Postman and Canva</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      <section id="exp" className="lp-section lp-alt">
  <div className="lp-container">
    <h2>EXPERIENCE</h2>

    <div className="lp-exp-snap">

      <div className="lp-exp-slide">
        <div className="lp-exp-card">
          <h3>Data Analyst</h3>
          <p className="lp-exp-company">KCSNOW Solutions UK · July 2023 - August 2024</p>
          <p className="lp-exp-desc">
            Designed and developed interactive Power BI dashboards by integrating data from Snowflake. Used Python for data cleaning and automation tasks. Automated ETL workflows improving data reliability, accessibility and insight delivery.
          </p>
        </div>
      </div>

      <div className="lp-exp-slide">
        <div className="lp-exp-card">
          <h3>Junior Data Analyst</h3>
          <p className="lp-exp-company">Tech Encryptors India · Feb 2022 - Jan 2023</p>
          <p className="lp-exp-desc">
            Developed ETL pipelines and dashboards using Python, SQL and Power BI to analyze and visualize real estate data efficiently.
          </p>
        </div>
      </div>
      
      <div className="lp-exp-slide">
        <div className="lp-exp-card">
          <h3>Associate Developer</h3>
          <p className="lp-exp-company">IBM India · June 2019 - Dec 2021</p>
          <p className="lp-exp-desc">
            Worked on RPG400, RPGLE, CL, CLLE, DB2, SQL, SQLRPGLE, embedded SQL, free format RPG coding with strong knowledge on how to manage Database using SQL.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</section>

        <section id="projects" className="lp-section">
          <div className="lp-container">
            <h2>PERSONAL PROJECTS</h2>
            <div className="lp-project-grid">
              <article className="lp-card">
                <img src={port1} alt="Project One" />
                <p>Market Analysis using Visualizations for a UK Online Retail Store Specializing in Unique Gifts</p>
              </article>
              <article className="lp-card">
                <img src={port2} alt="Project Two" />
                <p>Life with Polycystic Ovary Syndrome (PCOS) comments - Analysis</p>
              </article>
              <article className="lp-card">
                <img src={port3} alt="Project Three" />
                <p>Sentiment Analysis of Tweets dataset with Emojis replaced with their Descriptions</p>
              </article>
              <article className="lp-card">
                <img src={port4} alt="Project Four" />
                <p>Performance of K-Means Clustering and Gaussian Mixture Models Clustering is compared on Travel review ratings data</p>
              </article>
              <article className="lp-card">
                <img src={port5} alt="Project Five" />
                <p>PYTHON's and MATLAB's performance on Breast Cancer Wisconsin Dataset</p>
              </article>
              <article className="lp-card">
                <img src={port6} alt="Project Six" />
                <p>Comparison Of MULTI-LAYERED PERCEPTRON And SUPPORT VECTOR MACHINES on Breast Cancer Wisconsin Dataset</p>
              </article>
              <article className="lp-card">
                <img src={port7} alt="Project Seven" />
                <p>Training and Comparison Of Resnet18, Color_Histogram and SVM, and HOG and SVM on Face Mask detection Video</p>
              </article>
              <article className="lp-card">
                <img src={port8} alt="Project Eight" />
                <p>Olive - a Recipe Generation and Ingredient Substitution App using NLP Techniques</p>
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