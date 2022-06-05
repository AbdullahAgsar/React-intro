import React, {Component} from 'react';
import Main from "./main/Main";
import Header from "./header/Header";
import Navi from "./Navi/Navi";
import Footer from "./footer/Footer";
import { Row, Col } from "reactstrap";

class Layout extends Component {
    render() {

        return (
            <Row className="h-100 mw-100">
                <Col xl={2} lg={3} md={0} className="h-100 p-0">
                    <Navi></Navi>
                </Col>
                <Col xl={10} lg={9} md={12} className="h-100 p-0">
                    <Row>
                        <Header></Header>
                    </Row>
                    <Row>
                        <Main></Main>
                    </Row>
                    <Row>
                        <Footer></Footer>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Layout;