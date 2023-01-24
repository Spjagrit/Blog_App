import Header from "../components/Header";
 
const AuthorPage = () => {
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
            <h1 className="page-title">About the Author: spjagrit</h1>
            <img src="./img/profile_pic.jpg" className="profile" alt="" />
            <p className="p1">Web development is a fast-paced, challenging career centered on creative problem-solving and continuous innovation. As a web developer you'll work with a multidisciplinary team of designers, other developers, and marketers to realize your projects.Solution
            driven web developer adept at contributing to highly collaborative working environment and finding solutions.Proven experience developing consumer-focused websites using HTML,CSS, and Javascript.Good knowledge of the best practices for Web design, user experience and speed.</p>
        </div>
        {/* <img src="./img/profile_pic.jpg" className="hero-image" alt="" /> */}

        
      </div>
    </div>
  );
}
 
export default AuthorPage;