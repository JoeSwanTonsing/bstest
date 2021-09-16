import React from 'react';

export default function Maincontent() {
    return (
        <>
            <div className="b-bg-image py-5" style={{paddingBottom: 200}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex b-heading-sec">
                            <div className="align-self-center pr-5 b-head-in">
                                <h1 className="text-right mt-5 b-left-head">FARMERS' PORTAL <br/> (One Stop Shop for Farmers)</h1>
                            </div>
                        </div>


                        <div className="col-lg-6 b-login-sec">
                            <div className="d-block px-5 pt-5 pb-4 border-bottom-0">
                                <h2 className="b-login-head">Log In</h2>
                            </div>

                            <div className="">
                                <form action="dashboard.html" autocomplete="off" method="POST" class="px-5">
                                    <div className="form-group ">
                                        <label for="login-email-1" className="text-white">Email:</label>
                                        <input type="email" class="form-control" id="login-email-1" placeholder="Enter email" name="login-email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="login-pwd-1" className="text-white">Password:</label>
                                        <input type="password" className="form-control" id="login-pwd-1" placeholder="Enter password" name="login-pwd" />
                                    </div>
                                    <div className="form-group custom-control custom-checkbox">
                                        <input className="custom-control-input" id="login-rem-1" type="checkbox" name="remember" />
                                        <label className ="custom-control-label text-white" for="login-rem-1">Remember me</label>
                                    </div>

                                    <div className="text-center py-4">
                                        <button type="submit" className="btn btn-primary b-btn">Log In</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
