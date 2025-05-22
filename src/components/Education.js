import { Container, Row, Col, Card } from 'react-bootstrap';
import snist from '../assets/img/snist-logo.png';
import jsm from '../assets/img/jsm-logo.png';
import gioe from '../assets/img/gioe-logo.jpg';
import education from '../assets/img/education.svg';

export const Education = () => {
    return (
        <section className='education' id='education'>
            <Container>
                <Row>
                    <Col>
                    <div className='education-bx'>
                        <h2 style={{ color: 'white' }}>
                            Education
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                <img src={education} alt="Education-img" style={{ height: '50px', width: '50px' }} />
                            </div>
                        </h2>
                        <p style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                            This section provides an overview of my educational background, highlighting the institutions
                            I have attended, the courses I have pursued, and the qualifications I have earned.
                        </p>
                       
                        <div className="d-flex justify-content-around flex-wrap" style={{ marginTop: '30px' }}>
                            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                                <Card.Img variant="top" src={snist} />
                                <Card.Body>
                                    <Card.Title>Sreenidhi Institute of Science and Technology</Card.Title>
                                    <Card.Text>B.Tech</Card.Text>
                                    <Card.Text>2022-2026</Card.Text>
                                    <Card.Text>CGPA: 8.74</Card.Text>
                                    <Card.Text>Specialization: Electric and Electronics</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', marginBottom: '15px', marginTop: '5px'}}>
                                <Card.Img variant="top" src={gioe} />
                                <Card.Body>
                                    <Card.Title>TSRJC Sarvail</Card.Title>
                                    <Card.Text>Inter</Card.Text>
                                    <Card.Text>2020-2022</Card.Text>
                                    <Card.Text>Percentage: 97.7</Card.Text>
                                    <Card.Text>Specialization: MPC</Card.Text>
                                    
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                                <Card.Img variant="top" src={jsm} />
                                <Card.Body>
                                    <Card.Title>Zilla Parishad High School</Card.Title>
                                    <Card.Text>High School</Card.Text>
                                    <Card.Text>Till 2020</Card.Text>
                                    <Card.Text>CGPA: 10.0</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='bg-img-left'/>
        </section>
    );
};
