import React from 'react';
import "./banner.css";

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

        </>
    )
}

export default Banner;