import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar'; 
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.css';

function Basicexample(){
  return(
    <>
    <div>
        <div>
      
      <Row style={{height:'60px',backgroundColor:'#2d2c26'}} >
      <Col><img  className='header' src='https://cdn.worldvectorlogo.com/logos/envato-market-api.svg' alt='envato' style={{height:'80px',width:'300px',position:'absolute',paddingLeft:'30px',paddingBottom:'20px'}}/></Col>
      <Col><Button style={{marginLeft:'580px',marginTop:'10px',backgroundColor:'#81b441',border:'1px solid green',padding:'5px 5px'}}><b>BUY NOW</b></Button></Col>
      </Row ></div>
      <Row style={{height:'80px',backgroundColor:'plum'}} ><Col md={6}><div style={{paddingTop:'30px',paddingLeft:'50px',display:'flex',flexDirection:'row',flexWrap:'wrap',gridGap:'30px'}}>
      <p>E-mail Address : tutoring@mail.com</p>
      <p>Contact Number : +003457289</p></div></Col><Col md={6}><div style={{paddingTop:'30px',paddingLeft:'500px',display:'flex',flexDirection:'row',flexWrap:'wrap',gridGap:'30px'}}><a href='#Login' class='ctn' style={{textDecoration:'None',color:"purple",size:"7"}}><b>Login</b></a><p>/</p><a class='ctn' href='#Register' style={{textDecoration:'None',color:"purple",size:"5"}}><b>Register</b></a></div></Col></Row>
      </div>
      <Navbar expand="lg" className="custom-navbar" >
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft:'200px'}}><img src='https://www.pngitem.com/pimgs/m/432-4325162_free-to-use-public-domain-paint-palette-clip.png' height="50px" width="80px"/><b><font face="Ink Free" size="6">ArtsZone</font></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Home" id="navbarScrollingDropdown" style={{marginLeft:'100px',marginRight:'20px'}}>
              <NavDropdown.Item href="#Home 01">Home 01</NavDropdown.Item>
              <NavDropdown.Item href="#Home 02">
                Home 02
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#ABOUT" >
              About
            </Nav.Link>
            <Nav.Link href="#COURSES" style={{marginLeft:'30px'}}>
              Courses
            </Nav.Link>
            <Nav.Link href="#EVENT" style={{marginLeft:'30px'}}>
              Event
            </Nav.Link>
            <NavDropdown title="Pages" id="navbarScrollingDropdown" style={{marginLeft:'30px'}}>
              <NavDropdown.Item href="#Gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#Courses List">
                Courses List
              </NavDropdown.Item>
              <NavDropdown.Item href="#Courses-Details">
                Courses-Details
              </NavDropdown.Item>
              <NavDropdown.Item href="#Event">Event-Details</NavDropdown.Item>
              <NavDropdown.Item href="#Login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#Register">
                Register
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="navbarScrollingDropdown" style={{marginLeft:'30px'}}>
              <NavDropdown.Item href="#Sidebar">Blog-Left-Sidebar</NavDropdown.Item>
              <NavDropdown.Item href="#Sidebar">
                Blog-Right-Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#Sidebar">
                Blog-No-Sidebar
              </NavDropdown.Item>
              <NavDropdown.Item href="#Sidebar">Blog-Details</NavDropdown.Item>
              <NavDropdown.Item href="#Sidebar">
                Blog-Details-No-Sidebar
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" style={{marginLeft:'30px'}} >
              Contact
            </Nav.Link>
          </Nav>
          <Nav style={{marginRight:'30px'}}><button className="custom-button">BUY NOW</button></Nav>
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
      <div class="imgep"><img
          className="d-block w-100"
          src="https://rare-gallery.com/thumbs/510269-paint-brush.jpg"
          alt="First slide"
        /></div>
        <div className="carousel-caption">
          <h1 style={{fontWeight:'bolder'}}><font color="black">Bone Of Nation Education</font></h1>
          <p style={{fontSize:'20px'}}><font color="black">This is the content for Slide 1.</font></p>
          <button className="custom-button"><b>START A COURSE</b></button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div class="imgep"><img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/ce/2f/3d/ce2f3df6646a579d8fff9c8893bbc0d2.jpg"
          alt="First slide"
        /></div>
        <div  className="carousel-caption">
          <h1 style={{fontWeight:'bolder'}}><font color="black">Bone Of Nation Education</font></h1>
          <p style={{fontSize:'20px'}}><font color="black">This is the content for Slide 1.</font></p>
          <button className="custom-button" ><b>START A COURSE</b></button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div class="imgep"><img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20230513/original/pngtree-canvas-palette-has-various-watercolors-in-it-picture-image_2504867.jpg"
          alt="First slide"
        /></div>
        <div  className="carousel-caption">
          <h1 style={{fontWeight:'bolder'}}><font color="black">Bone Of Nation Education</font></h1>
          <p style={{fontSize:'20px'}}><font color="black">This is the content for Slide 1.</font></p>
          <button className="custom-button" ><b>START A COURSE</b></button>
        </div>
      </Carousel.Item>
    </Carousel>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <Container>
    <p><font face="Bahnschrift SemiBold" size="5">OUR COURSES</font></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <Row>
      <Col>
        <div class="geeks"><img src="https://img.freepik.com/free-photo/relax-woman-painting-watercolor-art-work-green-garden-forest-nature_1150-17419.jpg?size=626&ext=jpg" height="250px" width="400px"></img></div>
        <p><font face="Bahnschrift SemiBold" size="4"> Still Life sketching</font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <button className="custom-butto" >Apply Now</button>
      
      </Col>
      <Col>
      <div class="geeks"><img src="https://img.freepik.com/free-photo/young-painter-white-shirt-striped-t-shirt-sitting-floor-using-paint-brush-drawing-paper-with-cat-background-cozy-home_574295-3766.jpg?size=626&ext=jpg&ga=GA1.2.631696002.1689826709&semt=ais" height="250px" width="400px"></img></div>
        <p><font face="Bahnschrift SemiBold" size="4">Watercolour Painting</font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <button className="custom-butto" >Apply Now</button>
      
      </Col>
      <Col>
        <div class="geeks"><img src="https://img.freepik.com/free-photo/portrait-girl-painting-with-paper-with-brush_23-2147873769.jpg?size=626&ext=jpg&ga=GA1.1.631696002.1689826709&semt=ais" height="250px" width="400px"></img></div>
        <p><font face="Bahnschrift SemiBold" size="4">Acrylic arts</font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <button className="custom-butto" >Apply Now</button>
    </Col>
    </Row>
    </Container>


    </div>
    <br></br>
    <br></br>
    <br></br>
    <Row >
      <Col style={{backgroundColor:'#0e2f44'}} xs={12} md={6}>
       <h2 style={{marginLeft:'70px',marginTop:'50px',color:'whitesmoke'}}>WHY CHOOSE US</h2>
       <p style={{marginLeft:'70px',color:'whitesmoke',marginBottom:'40px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim veniam,</p>
       <Row>
        <div align="center" style={{backgroundColor:'#25597f',marginLeft:'70px',width:'270px',height:'250px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/5.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>TECHNOLOGY</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
        </div>
        <div align="center" style={{backgroundColor:'#25597f',marginLeft:'60px',width:'270px',height:'250px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/6.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>DESIGN</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
        </div>
       </Row>
       <Row>
       <div align="center" style={{backgroundColor:'#25597f',marginLeft:'70px',width:'270px',height:'250px',marginTop:'100px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/7.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>MUSIC</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
        </div>
        <div align="center" style={{backgroundColor:'#25597f',marginLeft:'60px',width:'270px',height:'250px',marginTop:'100px'}}>
          <img style={{marginTop:'50px',marginBottom:'15px'}} src='https://htmldemo.net/shiksha/shiksha/assets/img/categories/8.png' alt='wifi' roundedCircle/>
          <h4 style={{marginBottom:'15px',color:'whitesmoke'}}>LANGUAGE</h4>
          <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet,<br/> conadipng elit, sed do eiusmod<br/> tempor incidilabore</p>
          <br></br>
        </div>
       </Row>
      </Col>
      <Col xs={12} md={6} style={{backgroundColor:'#3e6676'}} className="remove-padding">
      <div className="image-container" align="center">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src='https://media.istockphoto.com/id/1408391823/photo/multiracial-students-painting-inside-art-room-class-at-university.webp?b=1&s=170667a&w=0&k=20&c=hpLm0FzFc3ZqlsiQozPIBCZQ7YPwPAg3st7oLvJG4P0=' alt='img'/>
      </div>
      </Col>
    </Row>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <Container>
    <p><font face="Bahnschrift SemiBold" size="5">UPCOMING EVENT</font></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <Row>
      <Col>
        <div class="geeks"><img src="https://i.ytimg.com/vi/LYENuV0FmSQ/maxresdefault.jpg" height="250px" width="400px"></img></div>
        <br></br>
        <p><font face="Bahnschrift SemiBold" size="4">Colourful Workshop for All</font></p>
        <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-orange-orange-line-label-sticker-image_1153470.jpg" height="30px" width="30px"></img>
        <p><font size="5"><b>&emsp;16</b></font><font size="2"><b>th</b>&emsp;Oct ,2022</font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBj1PV6SJfgMWIkLzpIyTyg-3H-dW1ijJeBDKqd3g&s" height="15px" width="15px"></img><font size="2"> 9.00 am - 5.00 pm &emsp;<img src="https://i.pinimg.com/originals/07/d1/48/07d148b230037229c5a058ebe5abb9e7.png" height="15px" width="15px"></img>Bosundhora city</font></p>
        
      
      </Col>
      <Col>
      <div class="geeks"><img src="https://i.ytimg.com/vi/4DYPlQwhiTM/maxresdefault.jpg" height="250px" width="400px"></img></div>
      <br></br>
        <p><font face="Bahnschrift SemiBold" size="4">Colourful Workshop for All</font></p>
        <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-orange-orange-line-label-sticker-image_1153470.jpg" height="30px" width="30px"></img>
        <p><font size="5"><b>&emsp;18</b></font><font size="2"><b>th</b>&emsp;Oct ,2022</font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBj1PV6SJfgMWIkLzpIyTyg-3H-dW1ijJeBDKqd3g&s" height="15px" width="15px"></img><font size="2"> 9.00 am - 5.00 pm &emsp;<img src="https://i.pinimg.com/originals/07/d1/48/07d148b230037229c5a058ebe5abb9e7.png" height="15px" width="15px"></img>Bosundhora city</font></p>
        
      
      </Col>
      <Col>
        <div class="geeks"><img src="https://i.pinimg.com/736x/fb/62/fb/fb62fbaa16540261a4a015f95ba5b9b1.jpg" height="250px" width="400px"></img></div>
        <br></br>
        <p><font face="Bahnschrift SemiBold" size="4">Colourful Workshop for All</font></p>
        <img src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-orange-orange-line-label-sticker-image_1153470.jpg" height="30px" width="30px"></img>
        <p><font size="5"><b>&emsp;20</b></font><font size="2"><b>th</b>&emsp;Oct ,2022</font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBj1PV6SJfgMWIkLzpIyTyg-3H-dW1ijJeBDKqd3g&s" height="15px" width="15px"></img><font size="2"> 9.00 am - 5.00 pm &emsp;<img src="https://i.pinimg.com/originals/07/d1/48/07d148b230037229c5a058ebe5abb9e7.png" height="15px" width="15px"></img>Bosundhora city</font></p>
        
    </Col>
    </Row>
    </Container>


    </div>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <Container>
    <p><font face="Bahnschrift SemiBold" size="5">NEWS BLOG</font></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <Row>
      <Col>
        <div class="geeks"><img src="https://i.ytimg.com/vi/AHI8Wenu6nQ/maxresdefault.jpg" height="250px" width="400px"></img></div>
        <br></br>
        <p><font face="Bahnschrift SemiBold" size="4">Landsape Painting</font></p>
        <p><font size="2">By : Halen Alone 16 th Sep, </font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <button className="custom-bttn" >READ MORE</button>
      
      </Col>
      <Col>
      <div class="geeks"><img src="https://i.pinimg.com/originals/a1/f1/fc/a1f1fc907417ef9be613a8c7330e4055.jpg" height="250px" width="400px"></img></div>
      <br></br>
        <p><font face="Bahnschrift SemiBold" size="4">Value of Arts</font></p>
        <p><font size="2">By : Halen Alone 16 th Sep, </font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <button className="custom-bttn" >READ MORE</button>
      
      </Col>
      <Col>
        <div class="geeks"><img src="https://i.ytimg.com/vi/AXpJhkGC5pI/maxresdefault.jpg" height="250px" width="400px"></img></div>
        <br></br>
        <p><font face="Bahnschrift SemiBold" size="4">Bone of Arts</font></p>
        <p><font size="2">By : Halen Alone 16 th Sep, </font></p>
        <p>Lorem ipsum dolor sit adipisicing elit, eiusmod tempor incididunt ut aliqua.</p>
        <button className="custom-bttn" >READ MORE</button>
    </Col>
    </Row>
    </Container>


    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    </>
   
  );
}
 export default Basicexample;