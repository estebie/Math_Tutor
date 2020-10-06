import React from 'react';
import PrivacyContainer from '../../components/privacy-container/privacy-container.component';
import { 
    Button,
    Col,
    Container, 
    Row,  
} from 'reactstrap';

import { Link, useRouteMatch } from "react-router-dom";
import './lesson_index.styles.scss';

const LessonIndexPage = () => {
    let { url } = useRouteMatch();

    return (
        <div>
            <Container className='lesson_container'>
                <Row>
                    <Col sm={{ size: 3, order: 2, offset: 9 }}>
                    <Button 
                        outline 
                        color="success" 
                        block={true}
                        tag={Link}
                        to={`${url}create`}>
                            + Add Lessons
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PrivacyContainer(LessonIndexPage);