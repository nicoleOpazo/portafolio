import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pc from "../assets/img/8df0491ada67dd8583558a910f76a261-removebg-preview.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tecnologías, Herramientas & Habilidades</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={'https://ionicframework.com/docs/icons/logo-react-icon.png'} alt="Image" />
                                <h5>ReactJS</h5>
                                <p>Node.js <br/> Bootstrap <br/> Material UI</p>
                            </div>
                            <div className="item">
                                <img src={'https://brandslogo.net/wp-content/uploads/2013/03/java-eps-vector-logo.png'} alt="Image" />
                                <h5>Java</h5>
                                <p>JUnit <br/> Spring Boot</p>
                            </div>
                            <div className="item">
                                <img src={'https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png'} alt="Image" />
                                <h5>MySQL</h5>
                                <p>MySQL Workbench </p>
                            </div>
                            <div className="item">
                                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={'https://www.netgen.co.za/wp-content/uploads/2022/03/C-image-for-Netgen-1024x1024.png'} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={'https://cdn-icons-png.flaticon.com/512/5968/5968364.png'} alt="Image" />
                                <h5>SQL Server</h5>
                            </div>
                            
                            <div className="item">
                                <img src={'https://miro.medium.com/v2/resize:fit:400/0*KpzqUReoWU_DEwb5.png'} alt="Image" />
                                <h5>Metodologías Ágiles</h5>
                            </div>
                            <div className="item">
                                <img src={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={'https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png'} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={'https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png'} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={'https://upload.wikimedia.org/wikipedia/commons/6/65/Microsoft_Office_logo_%282013%E2%80%932019%29.png'} alt="Image" />
                                <h5>Microsoft Office</h5>
                                <p>Excel <br/> Word <br/> Power BI <br/> Powerpoint</p>
                            </div>
                            <div className="item">
                                <img src={'https://www.softland.cl/wp-content/uploads/2019/12/Favicon-Softland-New.png'} alt="Image" />
                                <h5>Softland ERP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}