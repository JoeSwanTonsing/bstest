import React from 'react';

export default function Footer() {
    return (
        <div className="footer-bs">
            <footer className="container">
                <div className="row">
                    <div className="row col-md-7 col-sm-12 footer-nav">
                        <p className="col-md-12">Quick Links —</p>
                        <div className="col-sm-6">
                            <ul className="list">
                                <li><a href={"inner.html"}>Policies</a></li>
                                <li><a href={"contactus.html"}>Contact Us</a></li>
                                <li><a href={"inner.html"}>Guidelines</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list">
                                <li data-toggle="modal" data-target="#feedback-modal"><a href={"javascript:void(0)"}>Feedback</a></li>
                                <li><a href={"inner.html"}>Help Centre</a></li>
                                <li><a href={"javascript:void(0);"}>About Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-8 footer-social d-flex">
                        <div className="d-inline-block align-self-center">
                            <p className="bg-light"><img src={"images/NIC.png"} alt="NIC logo" /></p>
                            <p className="bg-light mb-0"><img src={"images/digital-india.png"} alt="digital india logo" /></p>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-4 footer-ns d-flex">
                        <a className="backtotop align-self-center d-flex text-center text-decoration-none text-white" title="Back to top" href="#b-accessibility">
                            <span style={{display:'none'}}>Back to top</span>
                            <span style={{fontSize: 24}} className="fas fa-angle-up align-self-center mx-auto"></span>
                        </a>
                    </div>
                </div>
                <div className="text-center mt-5 b-footer-credit" style={{color: '#000!important'}}>
                    This website belongs to Department of <a className="font-weight-bold" href={"http://agricoop.nic.in/"}>Agriculture &amp; Cooperation and Farmers Welfare</a>, <a className="font-weight-bold" href={"http://agriculture.gov.in/"}>Ministry of Agriculture and Farmers Welfare</a>, <a className="font-weight-bold" href={"https://www.india.gov.in/"}>Govt. of India.</a>
                </div>
            </footer>
        </div>
    );
}
