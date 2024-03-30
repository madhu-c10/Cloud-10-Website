import React from 'react';
import "./banner.css";
import { bannerimg } from '../../images/images';

function Banner() {
    return (
        <>
             <section className="homeBanner sect-2">
                <div className="bannerOverlay"></div>
                <div className="bannerimg-style">
                    <div className="h-100 h-sty-01"></div>
                </div>
                <div className="h-100 container">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-12">
                            <h3 className="d-inline-block wow fade-in-bottom re-work text-black">GRAPHICS. WEB. DIGITAL.</h3>
                            <br />
                            <h1 className="d-inline-block wow fade-in-bottom re-work banner-text homeBannersize">START-UP</h1>
                            <br />
                            <p className="d-inline-block wow fade-in-bottom re-work text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        </div>
                    </div>
                </div>
            </section> 
            {/* <div className="banner banner-home">
                    <div id="rev_slider_279_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="restaurant-header" style={{margin:"0px auto",backgroundColor:"#000",padding:"0px",marginTop:"0px",marginBottom:"0px"}}>
                        <div id="rev_slider_70_1" className="rev_slider fullscreenabanner" style={{display:"none"}} data-version="5.1.4">
                            <ul>
                                <li className="slider-color-schema-dark" data-index="rs-2" data-transition="fade" data-slotamount="7" data-easein="default" data-easeout="default" data-masterspeed="1000" data-rotate="0" data-saveperformance="off" data-title="Slide" data-description="">
                                    
                                    <img src={bannerimg} alt="image description" data-bgposition="center center" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" class="rev-slidebg" data-bgfit="cover" data-no-retina/>
                                    <div className="slider-sub-title text-white tp-caption tp-resizeme rs-parallaxlevel-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','middle','middle']" data-voffset="['145','100','10','20']" data-width="['1200','960','720','540']" data-textalign="center" data-fontsize="['30','28','24','20']" data-lineheight="['72','62','50','50']" data-letterspacing="5" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:inherit;y:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-paddingright="[25,25,25,25]" data-paddingleft="[25,25,25,25]">
                                        DEFINE. DESIGN. DELIVER.
                                    </div>
                                    <div className="slider-main-title text-white tp-caption tp-resizeme rs-parallaxlevel-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','middle','middle']" data-voffset="['250','150','50','50']" data-width="['1200','960','720','540']" data-textalign="center" data-fontsize="['160','88','64','48']" data-fontweight="900" data-letterspacing="['25','10','5','0']" data-lineheight="['184','100','72','60']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:inherit;y:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-paddingright="[25,25,25,25]" data-paddingleft="[25,25,25,25]">
                                        ROXINE
                                    </div>
                                    <div className="slider-text text-white tp-caption tp-resizeme rs-parallaxlevel-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','middle','middle']" data-voffset="['450','230','110','110']" data-width="['840','555','555','480']" data-textalign="center" data-fontsize="['18','14','14','14']" data-lineheight="['30','30','22','22']" data-fontweight="400" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:inherit;y:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-paddingright="[25,25,25,25]" data-paddingleft="[25,25,25,25]">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    </div>
                                    <div className="tp-caption rev-btn  rs-parallaxlevel-10" id="slide-163-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['320','60','240','220']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeOut;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_out="x:inherit;y:inherit;" data-start="1250" data-splitin="none" data-splitout="none" data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-164","delay":""}]' data-responsive_offset="on" data-paddingtop="[0,0,0,0]" data-paddingright="[25,25,25,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[25,25,25,25]">
                                        <a className="btn btn-primary has-radius-small" href="#">EXPLORE WORK</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
 */}
        </>
    )
}

export default Banner;