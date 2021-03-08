import React from 'react';
import {SSCQuestions} from '../data/MockQuestion'

const TestComponent = () => {
    return (
        <div className='container'>
            <div className='mcq-wrapper'>
                <p>Who is prime minister of India</p>
                <div className='options'>
                    <div className='option wrong'>
                        <div className='option-number'>A. </div>
                        <div className='option-val'>Narendra Modi</div>
                    </div>
                    <div className='option na'>
                        <div className='option-number'>B. </div>
                        <div className='option-val'>ManMohan</div>
                    </div>
                    <div className='option correct'>
                        <div className='option-number'>C. </div>
                        <div className='option-val'>Rahul Gandhi</div>
                    </div>
                    <div className='option'>
                        <div className='option-number'>D. </div>
                        <div className='option-val'>Arvind</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default TestComponent