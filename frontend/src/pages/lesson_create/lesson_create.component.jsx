import React, {useState} from 'react';
import { 
      Button, 
      Col,
      Container,
      Form, 
      FormGroup, 
      Label, 
      Input,
      Row
 } from 'reactstrap';
import { connect } from 'react-redux';
import { lessonCreateStart } from '../../redux/lesson/lesson.actions';
import { compose } from 'redux';
import PrivacyContainer from '../../components/privacy-container/privacy-container.component';
import { Link } from "react-router-dom";

import './lesson_create.styles.scss';

const LessonCreate = ({lessonCreateStart}) => {
      const [lessonParameters, setParameters] = useState({title:'', formula:'', level:''});
      const {title, formula, level} = lessonParameters;
      
      const handleSubmit = async event => {
            event.preventDefault();
            console.log('submitting!');
            console.log(title + formula + level);
            const form = {
                  title,
                  formula,
                  level,
            }
            lessonCreateStart(form);
            //emailSignInStart(email, password);
        }
    
        const handleChange = event => {
            const {value, name} = event.target;
            setParameters({...lessonParameters, [name]: value});
        }

      return (
      <Container>
            <Form onSubmit={handleSubmit} className='lesson-form'>
                  <FormGroup>
                        <Label for="title">Title</Label>
                        <Input 
                              type="text" 
                              name="title" 
                              id="title" 
                              placeholder="Lesson Title" 
                              onChange={handleChange}
                        />
                  </FormGroup>
                  <FormGroup>
                        <Label for="formula">Formula</Label>
                        <Input 
                              type="text" 
                              name="formula" 
                              id="formula" 
                              placeholder="Lesson Formula" 
                              onChange={handleChange}
                        />
                  </FormGroup>
                  <FormGroup>
                        <Label for="level">Level</Label>
                        <Input 
                              type="text" 
                              name="level" 
                              id="level" 
                              placeholder="Grade Level" 
                              onChange={handleChange}
                        />
                  </FormGroup>
                  <Row>
                        <Col sm={{ size: 3 }}>
                              <Button 
                                    color="danger" 
                                    size="sm"
                                    block={true}
                                    tag={Link}
                                    to="."
                              >
                                    Cancel
                              </Button>
                        </Col>
                        <Col sm={{ size: 3, offset: 6 }}>
                              <Button 
                                    color="primary" 
                                    size="sm"
                                    block={true}
                                    type='submit'
                              >
                                    Submit
                              </Button>
                        </Col>
                  </Row>

            </Form>
      </Container>
      )
};

const mapDispatchToProps = dispatch => ({
      lessonCreateStart: (form) => dispatch(lessonCreateStart(form))
  })
  
  
export default compose(
      connect(null, mapDispatchToProps),
      PrivacyContainer
)(LessonCreate)