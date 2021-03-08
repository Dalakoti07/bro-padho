import React, { useState } from 'react';
import {SSCQuestions} from '../data/MockQuestion'
import QuestionComponent from './QuestionComponent';

const TestComponent = () => {
    const EACH_QUESTION_MARKS=5;
    const totalMarks=SSCQuestions.length*EACH_QUESTION_MARKS;
    const [questions,setQuestions]=useState(SSCQuestions);

    const cardHandler=(quesId,selectedOption)=>{
        setQuestions(questions.map((ques)=>{
            if(ques.id===quesId && ques.answered===false){
                ques.selected=selectedOption;
                ques.answered=true;
                return ques;
            }else
                return ques;
        }))
    }
    const calculateMarks=()=>{
        let marks=0;
        questions.forEach(element => {
            if(element.answered){
                if(element.selected===element.correct)
                    marks+=EACH_QUESTION_MARKS;
            }
        });
        return marks;
    }

    return (
        <div className='container'>
            <h3 className='center-text'>SSC Mock Test</h3>
            <div className='underline'></div>
            <div className='score-div'>
                <p>{calculateMarks()}</p>
                <p>/{totalMarks}</p>
            </div>
            {SSCQuestions.map((ques)=>{
                const {id}=ques;
                return <QuestionComponent key={id} question={ques} listener={cardHandler}/>
            })}
        </div>
    )
  }
  
export default TestComponent