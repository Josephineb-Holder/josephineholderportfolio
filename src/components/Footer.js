import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return (
        <footer className="fixed-bottom">
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* {column1} */}
                    <div className="col-md-3 col-sm-6">
                    <h4>Address</h4>
                        <ul className="list-unstyled">
                            <li>North,road</li>
                            <li>Caldwell,Montserrado</li>
                            <li>Liberia</li>
                            <li>West Africa</li>
                        </ul>
                    </div>

                    {/* {column2} */}
                    <div className="col-md-3 col-sm-6">
                    <h4>Contacts</h4>

                        <ul className="list-unstyled">
                            <li><i class="fa fa-whatsapp" aria-hidden="true"></i> +231777255586</li>
                            <li><i class="fa fa-whatsapp" aria-hidden="true"></i> +231886990381</li>
                            <li><i class="fa fa-envelope" aria-hidden="true"></i> nyenpandijosebropholder@gmail.com</li>
                            <li><i class="fa fa-envelope" aria-hidden="true"></i> nyenpandijosebropholder2@gmail.com</li>

                        </ul>
                        
                    </div>

                    {/* {column3} */}
                    <div className="col-md-3 col-sm-6 fa-ul">
                    <h4>Social Media</h4>
                        <ul className="list-unstyled">
                            <li><i class="fa fa-linkedin" aria-hidden="true"></i> Linkin</li>
                            <li><i class="fa fa-facebook-official" aria-hidden="true"> Facebook</i></li>
                            <li><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</li>
                            <li><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</li>
                            </ul>
                    </div>



                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Nyenpandi Josephine Bropleh Holder | All right reserved | Terms of services | Privacy
                    </p>
                    
                </div>

            </div>
            
        </div>
        </footer>
    )
}


export default Footer
