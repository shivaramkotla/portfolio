import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import profile from "../images/profile2.jpeg";

// Importing the font using a CDN
const FontImport = () => (
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
);

export const Banner = () => {
    const [text, setText] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300);
    const toRotate = ["Electric Engineer", "Programmer", "Tech Enthusiast"];
    const period = 2000;

    useEffect(() => {
        const tick = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];
            const updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updateText);

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2);
            }

            if (!isDeleting && updateText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updateText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(200);
            }
        };

        const ticker = setInterval(tick, delta);

        return () => clearInterval(ticker);
    }, [text, loopNum, isDeleting, delta]);

    return (
        <section className="banner" id="home">
            <FontImport />
            <Container>
                <Row className="align-items-centre">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1 style={{ fontFamily: 'Bebas Neue, cursive', color: 'rgb(37, 150, 190)'}}>{`Hi, I'm Shivaram `}<span className="wrap"> <br />{text}</span></h1>
                        <p>Welcome to my Portfolio! I'm enthusiastic about connecting with professionals like you and sharing experiences 🤝.
                        My expertise lies in web development and various programming languages, where I've successfully delivered projects ✌️. 
             I'm open to new opportunities and collaborations, feel free to reach out. I'm eager to explore how we can work together😊.
                        </p>
                        <a href="https://www.linkedin.com/in/shivaramkotla/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <button onClick={() => console.log('connect')}>
                                Let's Connect
                                <ArrowRight size={25} style={{ marginLeft: '5px' }} />
                            </button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profile} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
