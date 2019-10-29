import React, {Component} from 'react';
import './Homepage.css';

class Homepage extends Component {

    render() {
        return (
            <div id="home-container" className="Homepage">
                <div className="welcome-area" id="welcome">
                    <div className="header-text">
                        <div className="container">
                            <div className="row">
                                <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                                     data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                    <h1>Simple App that we <em>CREATE</em></h1>
                                    <p>Lava <a href="#s">HTML landing page</a> template is provided by <a
                                        href="#sd">TemplateMo</a>.
                                        You can modify and use it for your commercial websites for free of charge. This
                                        template is last updated on 29 Oct 2019.</p>
                                    <a href="#about" className="main-button-slider">KNOW US BETTER</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="section" id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                                 data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <div class="features-item">
                                    <div class="features-icon">
                                        <h2>01</h2>
                                        <img src="assets/images/features-icon-1.png" alt=""></img>
                                        <h4>Trend Analysis</h4>
                                        <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
                                            consectetur diam.</p>
                                        <a href="#testimonials" class="main-button">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                                 data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                                <div class="features-item">
                                    <div class="features-icon">
                                        <h2>02</h2>
                                        <img src="assets/images/features-icon-2.png" alt=""></img>
                                        <h4>Site Optimization</h4>
                                        <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
                                            consectetur diam.</p>
                                        <a href="#testimonials" class="main-button">
                                            Discover More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                                 data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                <div class="features-item">
                                    <div class="features-icon">
                                        <h2>03</h2>
                                        <img src="assets/images/features-icon-3.png" alt=""></img>
                                        <h4>Email Design</h4>
                                        <p>Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
                                            consectetur diam.</p>
                                        <a href="#testimonials" class="main-button">
                                            More Detail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="left-image-decor"></div>

                <section class="section" id="promotion">
                    <div class="container">
                        <div class="row">
                            <div class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                                 data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <img src="assets/images/left-image.png" class="rounded img-fluid d-block mx-auto"
                                     alt="App"></img>
                            </div>
                            <div class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                                <ul>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                        <img src="assets/images/about-icon-01.png" alt=""></img>
                                        <div class="text">
                                            <h4>Vestibulum pulvinar rhoncus</h4>
                                            <p>Please do not redistribute this template ZIP file for a download purpose.
                                                You may <a
                                                    rel="nofollow" href="https://templatemo.com/contact"
                                                    target="_parent">contact</a> us for
                                                additional licensing of our template or to get a PSD file.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                                        <img src="assets/images/about-icon-02.png" alt=""></img>
                                        <div class="text">
                                            <h4>Sed blandit quam in velit</h4>
                                            <p>You can <a rel="nofollow"
                                                          href="https://templatemo.com/tm-540-lava-landing-page">download
                                                Lava
                                                Template</a> from our website. Duis viverra, ipsum et scelerisque
                                                placerat, orci
                                                magna consequat ligula.</p>
                                        </div>
                                    </li>
                                    <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                                        <img src="assets/images/about-icon-03.png" alt=""></img>
                                        <div class="text">
                                            <h4>Aenean faucibus venenatis</h4>
                                            <p>Phasellus in imperdiet felis, eget vestibulum nulla. Aliquam nec dui nec
                                                augue
                                                maximus porta. Curabitur tristique lacus.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="right-image-decor"></div>

                <section class="section" id="testimonials">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="center-heading">
                                    <h2>What They Think <em>About Us</em></h2>
                                    <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non,
                                        convallis odio.
                                        Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                                </div>
                            </div>
                            <div class="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                                 data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <div class="owl-carousel owl-theme">
                                    <div class="item service-item">
                                        <div class="author">
                                            <i><img src="assets/images/testimonial-author-1.png" alt="Author One"></img></i>
                                        </div>
                                        <div class="testimonial-content">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Jonathan Smart</h4>
                                            <p>“Nullam hendrerit, elit a semper pharetra, ipsum nibh tristique tortor,
                                                in tempus
                                                urna elit in mauris.”</p>
                                            <span>Besta CTO</span>
                                        </div>
                                    </div>
                                    <div class="item service-item">
                                        <div class="author">
                                            <i><img src="assets/images/testimonial-author-1.png"
                                                    alt="Second Author"></img></i>
                                        </div>
                                        <div class="testimonial-content">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Martino Tino</h4>
                                            <p>“Morbi non mi luctus felis molestie scelerisque. In ac libero viverra,
                                                placerat est
                                                interdum, rhoncus leo.”</p>
                                            <span>Web Analyst</span>
                                        </div>
                                    </div>
                                    <div class="item service-item">
                                        <div class="author">
                                            <i><img src="assets/images/testimonial-author-1.png"
                                                    alt="Author Third"></img></i>
                                        </div>
                                        <div class="testimonial-content">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <h4>George Tasa</h4>
                                            <p>“Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec
                                                quam dolor,
                                                congue a fringilla sed, maximus et urna.”</p>
                                            <span>System Admin</span>
                                        </div>
                                    </div>
                                    <div class="item service-item">
                                        <div class="author">
                                            <i><img src="assets/images/testimonial-author-1.png"
                                                    alt="Fourth Author"></img></i>
                                        </div>
                                        <div class="testimonial-content">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Sir James</h4>
                                            <p>"Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec
                                                quam dolor,
                                                congue a fringilla sed, maximus et urna."</p>
                                            <span>New Villager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="contact-us">
                    <div class="container">
                        <div class="footer-content">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12">
                                    <div class="contact-form">
                                        <form id="contact" action="" method="post">
                                            <div class="row">
                                                <div class="col-md-6 col-sm-12">
                                                    <fieldset>
                                                        <input name="name" type="text" id="name" placeholder="Full Name"
                                                               required=""></input>
                                                    </fieldset>
                                                </div>
                                                <div class="col-md-6 col-sm-12">
                                                    <fieldset>
                                                        <input name="email" type="text" id="email"
                                                               placeholder="E-Mail Address"
                                                               required=""></input>
                                                    </fieldset>
                                                </div>
                                                <div class="col-lg-12">
                                                    <fieldset>
                                            <textarea name="message" rows="6" id="message" placeholder="Your Message"
                                                      required=""></textarea>
                                                    </fieldset>
                                                </div>
                                                <div class="col-lg-12">
                                                    <fieldset>
                                                        <button type="submit" id="form-submit" class="main-button">Send
                                                            Message
                                                            Now
                                                        </button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="right-content col-lg-6 col-md-12 col-sm-12">
                                    <h2>More About <em>Lava</em></h2>
                                    <p>Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at
                                        finibus odio.
                                        Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut
                                        elementum.
                                        <br></br>If you need this contact form to send email to your inbox, you may
                                        follow our <a
                                            rel="nofollow" href="https://templatemo.com/contact"
                                            target="_parent">contact</a> page
                                        for more detail.</p>
                                    <ul class="social">
                                        <li><a href="https://fb.com/templatemo"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#top"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#top"><i class="fa fa-linkedin"></i></a></li>
                                        <li><a href="#top"><i class="fa fa-rss"></i></a></li>
                                        <li><a href="#top"><i class="fa fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="sub-footer">
                                    <p>Copyright &copy; 2020 Lava Landing Page

                                        | Designed by <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Homepage;