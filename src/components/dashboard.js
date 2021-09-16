import React from 'react';

export default function Dashboard() {
    return(
        <>
            <div className="mt-5" id="b-homedb" style={{position: 'relative', top: -170, marginBottom: -110}}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-4 p-4">
                            <div className="bg-light py-4 b-dbcard">
                                <p><span className="fa fa-wheat" style={{fontSize: 40}}></span></p>
                                <h3 style={{fontSize: 16}}><strong>Food grain production</strong></h3>
                                <div className="text-left ">
                                    <p className="px-5">Last year  <span className="float-right">28.337 Cr tonnes</span></p>
                                    <p className="px-5">Current year <span className="float-right">29.110 Cr tonnes</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 p-4">
                            <div className="bg-light py-4 b-dbcard">
                                <p><span className="fas fa-vial" style={{fontSize:40}}></span></p>
                                <h3 style={{fontSize: 16}}><strong>Soil testing laboratory</strong></h3>
                                <div className="text-left ">
                                    <p className="px-5">Last year  <span className="float-right">3732</span></p>
                                    <p className="px-5">Current year <span className="float-right">3887</span></p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 p-4">
                            <div className="bg-light py-4 b-dbcard">
                                <p><span className="fas fa-tractor" style={{fontSize:40}}></span></p>
                                <h3 style={{fontSize: 16}}><strong>Agricultural land</strong></h3>
                                <div className="text-left ">
                                    <p className="px-5">Last year  <span className="float-right">39.46 Cr acres</span></p>
                                    <p className="px-5">Current year <span className="float-right">38.24 Cr acres</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}