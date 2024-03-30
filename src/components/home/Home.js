import React from 'react';
import Banner from './Banner';
import './home.css'
import { homeimg1, homeimg2 } from '../../images/images';
import { TbPentagonNumber1, TbPentagonNumber2, TbPentagonNumber3, TbPentagonNumber4 } from "react-icons/tb";

function Home() {
  return (
    <>
      <main>
        <Banner />
        <section className='home-what-we-do-con'>
          <div className="container home-1-co">
            <div className="row multiple-row v-align-row">
              <div className="col-lg-12 col-md-12 text-center">
                <div className="col-wrap home-1-con">
                  <div className="block-heading">
                    <h3 className="block-top-heading">WHAT WE DO</h3>
                    <h2 className="block-main-heading">EXPERTS</h2>
                    <span className="block-sub-heading">We build digital solutions.</span>
                    <div className="divider">
                      {/*  <img src={images.divider} alt="images description"/> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-2">
                <div className="col-wrap">
                  <div className="ico-box bg-gray-light has-radius-medium">
                    <div className="icon">
                      <img />
                    </div>
                    <h4 className="content-title"><a href="#">DIGITAL TRANSFORMATION</a></h4>
                    <div className="des">
                      <p>
                        Digital transformation brings a new dimension in the business world with innovation, creativity and strategies that bring prodigious results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-2">
                <div className="col-wrap">
                  <div className="ico-box bg-gray-light has-radius-medium">
                    <div className="icon">
                      <img />
                    </div>
                    <h4 className="content-title"><a href="#">DIGITAL TRANSFORMATION</a></h4>
                    <div className="des">
                      <p>
                        Digital transformation brings a new dimension in the business world with innovation, creativity and strategies that bring prodigious results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mb-2">
                <div className="col-wrap">
                  <div className="ico-box bg-gray-light has-radius-medium">
                    <div className="icon">
                      <img />
                    </div>
                    <h4 className="content-title"><a href="#">DIGITAL TRANSFORMATION</a></h4>
                    <div className="des">
                      <p>
                        Digital transformation brings a new dimension in the business world with innovation, creativity and strategies that bring prodigious results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='row home-sec-2'>
              <div className="col-lg-6 col-md-6">
                <img src={homeimg1} className="img-fluid mt-4" alt="Responsive image" />
              </div>
              <div className='col-lg-6 col-md-6'>
                <h5 className='home-how-it-works-con'>HOW IT WORKS?</h5>
                <h1 className='home-how-h1 mt-2'>Find out everything about creating a business model.</h1>
                <div className='row gy-4'>
                  <div className='col-md-6'>
                    <h4 className='mt-4'>< TbPentagonNumber1 className='home-how-numbers' /> Creative Ideas</h4>
                    <span className='home-how-span'>Nulla vitae elit libero a augue donec id elit non mi porta.</span>
                  </div>
                  <div className='col-md-6'>
                    <h4 className='mt-4'>< TbPentagonNumber2 className='home-how-numbers' /> Magic Touch</h4>
                    <span className='home-how-span'>Nulla vitae elit libero a augue donec id elit non mi porta.</span>
                  </div>
                  <div className='col-md-6'>
                    <h4 className='mt-2'>< TbPentagonNumber3 className='home-how-numbers' />Data Analysis</h4>
                    <span className='home-how-span'>Nulla vitae elit libero a augue donec id elit non mi porta.</span>
                  </div>
                  <div className='col-md-6'>
                    <h4 className='mt-2'>< TbPentagonNumber4 className='home-how-numbers' />Finalize Product</h4>
                    <span className='home-how-span'>Nulla vitae elit libero a augue donec id elit non mi porta.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <h5 className='home-how-it-works-con'>WHY CHOOSE US?</h5>
                <h1 className='home-how-h1 mt-2'>We bring solutions to make life easier for our clients.</h1>
                <div className="accordion accordion-borderless" id="accordionFlushExampleX">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOneX">
                      <button data-mdb-collapse-init className="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseOneX" aria-expanded="true" aria-controls="flush-collapseOneX">
                        <span className='accordian-span'>Professional Design</span>
                      </button>
                    </h2>
                    <div id="flush-collapseOneX" className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingOneX" data-mdb-parent="#accordionFlushExampleX">
                      <div className="accordion-body">
                        <span className='accordian-inner-span'>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwoX">
                      <button data-mdb-collapse-init className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseTwoX" aria-expanded="false" aria-controls="flush-collapseTwoX">
                        <span className='accordian-span'>Professional Design</span>
                      </button>
                    </h2>
                    <div id="flush-collapseTwoX" className="accordion-collapse collapse" aria-labelledby="flush-headingTwoX"
                      data-mdb-parent="#accordionFlushExampleX">
                      <div className="accordion-body">
                        <span className='accordian-inner-span'>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThreeX">
                      <button data-mdb-collapse-init className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#flush-collapseThreeX" aria-expanded="false" aria-controls="flush-collapseThreeX">
                        <span className='accordian-span'>Professional Design</span>
                      </button>
                    </h2>
                    <div id="flush-collapseThreeX" className="accordion-collapse collapse" aria-labelledby="flush-headingThreeX"
                      data-mdb-parent="#accordionFlushExampleX">
                      <div className="accordion-body">
                        <span className='accordian-inner-span'>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <img src={homeimg2} className="img-fluid mt-4" alt="Responsive image" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;