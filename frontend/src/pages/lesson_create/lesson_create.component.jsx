import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import {lessonCreateStart} from '../../redux/lesson/lesson.actions';
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
            <Form className="text-center text-md-left" onSubmit={handleSubmit}>
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
                  <Button color="primary" size="sm">Submit</Button>
            </Form>
      </Container>
      )
};

const mapDispatchToProps = dispatch => ({
      lessonCreateStart: (form) => dispatch(lessonCreateStart(form))
  })
  
  
export default connect(null, mapDispatchToProps)(LessonCreate);