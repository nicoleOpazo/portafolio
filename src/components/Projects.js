import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import image1 from "../assets/imgsProject1/msr1.png"
import image2 from "../assets/imgsProject1/msr2.png"
import image3 from "../assets/imgsProject1/msr3.png"
import image4 from "../assets/imgsProject1/msr4.png"
import image5 from "../assets/imgsProject1/msr5.png"
import image6 from "../assets/imgsProject1/msr6.png"

import image7 from "../assets/imgsProject2/1.png"
import image8 from "../assets/imgsProject2/2.png"

import image9 from "../assets/imgsProject3/home.jpeg"
import image10 from "../assets/imgsProject3/table.jpeg"
import image11 from "../assets/imgsProject3/create.jpeg"

export const Projects = () => {

  const project1 = [
    {
      title: "My Study Room",
      description: "Bienvenid@ a la mesa de estudio",
      imgUrl: image1,
    },
    {
      title: "My Study Room",
      description: "Selección de música chill",
      imgUrl: image3,
    },
    {
      title: "My Study Room",
      description: "Temporizador Pomodoro",
      imgUrl: image2,
    },
    {
      title: "My Study Room",
      description: "Blog consejos",
      imgUrl: image4,
    },
    {
      title: "My Study Room",
      description: "Tips de estudio",
      imgUrl: image5,
    },
    {
      title: "My Study Room",
      description: "Lista de tareas",
      imgUrl: image6,
    },
  ];

  const project2 = [
    {
      title: "Wander",
      description: "Inicio con slider de imagenes",
      imgUrl: image7,
    },
    {
      title: "Wander",
      description: "Pestaña nosotros",
      imgUrl: image8,
    },
  ];

  const project3 = [
    {
      title: "Home",
      description: "Bienvenido al sistema de usuarios",
      imgUrl: image9,
    },
    {
      title: "Crear un usuario",
      description: "Crear un usuario con Nombre, Fecha de nacimiento y Contraseña",
      imgUrl: image11,
    },
    {
      title: "Todos los usuarios",
      description: "Lista  de todos los usuarios a mostrar, con opciones para poder editar, eliminar y ver más detalles sobre el usuario",
      imgUrl: image10,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Study Room</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Gestión de usuarios</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Wander</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>
                          My Study Room es una aplicación web creada para ayudar a crear el ambiente perfecto para estudiar. Personalización de tu mesa de estudio, listas de tareas, selección de música relajante y optimización de sesiones de estudio con gracias a tips y consejos del blog.
                        </p>
                        <Row>
                          {
                            project1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Sistema de gestión de usuarios CRUD utilizando C#, ASP.Net Core y Entity Framework conectado a una base de datos relacional SQL Server en SQL Management Studio.
                        </p>
                        <Row>
                          {
                            project3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Ejemplo de Landing page. Slider de imagenes o videos, pestañas de productos, servicios, sobre nosotros y contacto.
                        </p>
                        <Row>
                          {
                            project2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}