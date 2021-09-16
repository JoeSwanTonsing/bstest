import React from 'react';

export default function Navigathor() {
    return (
        <>
            <div className="container clearfix" id="b-header">
                <div className="float-left d-flex h-100">
                    <img src={"images/emblem-dark.png"} className="align-self-center b-emblem-image" title="National Emblem of India" alt="emblem of india logo" />
                </div>

                <div className="float-left d-flex h-100">
                    <h2 className="align-self-center pl-3 b-appname"><span className="font-weight-bold">FARMERS' PORTAL</span> <br/><span className="b-appfullname"> ONE STOP SHOP FOR FARMERS</span></h2>
                </div>
            </div>
            
            <div className="globalnav-bg">
		<div className="container">
			<nav className="navbar navbar-expand-sm navbar-dark px-0">
				<div className="d-flex w-100 b-nav-mobile">
					<button className="navbar-toggler align-self-center b-btn-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick="myFunction(this)">
						<span style={{display:'none'}}>Menu</span>
						<div>
						  <div className="bar1"></div>
						  <div className="bar2"></div>
						  <div className="bar3"></div>
						</div>
					</button>
				</div>
				
				<div className="collapse navbar-collapse" id="collapsibleNavbar">
					<ul className="navbar-nav main-menu d-flex">
						<li className="nav-item d-block"> <a href={"index.html"} className="nav-link active">Home</a> </li>
						<li className="nav-item d-block"> <a href={"inner.html"} className="nav-link">Schemes</a></li>
						<li className="nav-item d-block"> <a href={"inner.html"} className="nav-link">Major Crops</a></li>
						<li className="nav-item d-block"> <a href={"contactus.html"} className="nav-link">Contact Us</a></li>
					</ul>
				</div>

			</nav>
		</div>
	</div>
        </>
    );
}
