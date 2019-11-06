import React, { Component } from 'react';
import { Row,Col } from 'reactstrap';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container-fluid">
                        <Row>
                            <Col>
                                {new Date().getFullYear()} © Veltrix <span className="d-none d-sm-inline-block"> - Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</span>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;






