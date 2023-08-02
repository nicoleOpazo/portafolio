import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, EnvelopeFill, ChatDots } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import pointer from "../assets/img/pointer.png"
import Modal from 'react-bootstrap/Modal';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [""];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmailButtonClick = () => {
    const email = "nicoole@gmail.com";
    const subject = "Contacto";
    const body = "Hola Nicole! Vi tu portafolio y me gustaría contactarte!";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };

  const handleWhatsAppButtonClick = () => {
    const phoneNumber = "+56992319139";
    const message = "Hola Nicole! Vi tu portafolio y me gustaría contactarte!";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
          <div className="banner-wrapper">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""} id="banner-container">
                    <h1>{`Nicole Opazo Aranda`}
                      <span className="txt-rotate" dataPeriod="1000" data-rotate='[ ""]'>
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <span className="tagline">Desarrolladora Fullstack</span>
                    <p>
                      Desarrollo de proyectos web bajo metodologías ágiles. <br /> Habilidades: Front & Back End, manejo de bases de datos relacionales, pruebas unitarias y herramientas de versionamiento de código.
                    </p>
                    <button onClick={handleShow}>
                      Contáctame <ArrowRightCircle size={25} />
                    </button>
                    <Modal show={show} onHide={handleClose} centered>
                      <Modal.Header style={{ color: '#49494e' }} closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ color: '#49494e' }}>
                        <button onClick={handleEmailButtonClick} style={{ marginBottom: '10px' }}>
                          <EnvelopeFill style={{ marginRight: '10px', marginLeft: '25px' }} size={25} />
                          nicoole.opazo@gmail.com
                        </button>
                        <br />
                        <button onClick={handleWhatsAppButtonClick}>
                          <ChatDots style={{ marginRight: '10px', marginLeft: '25px' }} size={24} />
                          +569 2319139
                        </button>
                      </Modal.Body>
                    </Modal>
                  </div>}
              </TrackVisibility>
          </div>
            </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={pointer} alt="Header Img" style={{ width: '100px', marginLeft: '30%', marginTop: '7%' }} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>

  )
}