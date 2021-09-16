import React from 'react';

export default function Accessibility() {
    return (
        <div className="container d-flex clearfix" id="b-accessibility">
            <div className="b-ministryname">
                <div className="text-right d-inline-block font-weight-bold b-acc-goi pr-sm-2">
                    <span>Government of India</span>
                </div>
                <div className="d-inline-block font-weight-bold b-acc-ministry pl-sm-2">
                    <span>Ministry of Agriculture and Farmers Welfare</span>
                </div>
            </div>


            <div className="ml-auto d-flex b-acc-icons">
                <div className="align-self-center">

                    <div className="d-inline-block h-100 px-3">
                        <img src={"images/icons/ico-site-search.png"} alt="site search icon" title="Site search" className="dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}} />

                        <div className="dropdown-menu p-0 border-0 b-search">
                        <label for="site-search" style={{display:'none'}}>Site search</label>
                        <input type ="text" className="form-control float-left b-site-search" id="site-search" placeholder="Search" style={{width: 150, borderRadius: 0}} />
                        <div className="input-group-btn float-left">
                        <button className="btn" type ="submit" style={{borderRadius: 0, background: '#505050', color: 'white'}}>
                        <span style={{display:'none'}}>Search</span>
                        <span className="fas fa-search"></span>
                        </button>
                        </div>
                        </div>
                    </div>

                    <div className="d-inline-block h-100 px-3 dropdown">
                        <img src={"images/icons/ico-social.png"} alt="social sites links" title="Social links" className="dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}} />

                        <div className="dropdown-menu b-social-dropdown" style={{minWidth: 50, width: 50}}>
                        </div>
                    </div>


                    <div className="d-inline-block h-100 px-3">
                        <a href={"#b-homedb"} className="align-self-center b-skiptomain" title="Skip to main content">
                            <img src={"images/icons/ico-skip.png"} alt="skip to main content icon" />
                        </a>
                    </div>

                    <div className="d-inline-block h-100 px-3">
                        <img src={"images/icons/ico-accessibility.png"} alt="accessibility icon" title="Accessibility Dropdown" className="dropdown-toggle" data-toggle="dropdown" style={{cursor: 'pointer'}} />

                        <div class ="dropdown-menu b-accessibility-dropdown" style={{minWidth: 50, width: 50}}>
                        </div>
                    </div>

                    <div class="d-inline-block h-100 px-3">
                        <a href="site-map.html" title="Sitemap">
                            <img src={"images/icons/ico-sitemap.png"} alt="sitemap icon" />
                        </a>
                    </div>


                </div>

            </div>

        </div>
    );
}
