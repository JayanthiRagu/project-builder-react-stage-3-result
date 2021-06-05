import React, { Component } from 'react';
import './QuizComponent.css'
import questions from '../resources/questions.json';
import ResultComponent from './ResultComponent.jsx';
import {Link,BrowserRouter as Router,
    Switch,
    Route,Redirect} from 'react-router-dom';

class QuizComponent extends Component {
    constructor(){
        super();
        this.state={
            currentQues:0,
            right:0,
            attempted:0,
            answer:"wrong"
        }
        this.checkAnswer=this.checkAnswer.bind(this);
    }

    //previous button for question
    previousbutton(){
        var curr_ques=this.state.currentQues;
        if(curr_ques>0)
        {
            this.setState({currentQues:curr_ques-1});
        }
    }

    nextbutton(){
        var curr_ques=this.state.currentQues;
        if(curr_ques<10)
        {
            this.setState({currentQues:curr_ques+1});
        }
    }

    checkAnswer(e){
        if(e.target.outerText===questions[this.state.currentQues].answer)
        {
            document.getElementById("answer").style.display="block";
            document.getElementById("answer").style.backgroundColor="green";
            this.props.result(this.state.right+1,this.state.attempted+1);
            this.setState({right:this.state.right+1,
                attempted:this.state.attempted+1,
                currentQues:this.state.currentQues+1,
            answer:"correct"});
        }
        else{
            document.getElementById("answer").style.display="block";
            document.getElementById("answer").style.backgroundColor="red";
            this.props.result(this.state.right,this.state.attempted+1);
            this.setState({currentQues:this.state.currentQues+1,
                attempted:this.state.attempted+1,
                answer:"wrong"});
        } 
        document.getElementById(e.target.id).style.backgroundColor="#2a3deb";
    }

    render() {
        return (
            <div className="container1">
                
                {
                        this.state.currentQues==10&&
                            <Redirect to="/result"/>

                }
                {this.state.currentQues<10&&
                <div className="quiz">
                    <div>
                    <span className="outof">{this.state.currentQues+1} out of 10</span>
                    <span className="title">Questions</span>
                    <button className="button6" id="answer">{this.state.answer}</button>
                    </div>
                    <div className="question">
                        <span>{questions[this.state.currentQues].question}</span>
                    </div>
                    <div>
                        <button className="button" id="optionA" onClick={this.checkAnswer} value={questions[this.state.currentQues].optionA}>{questions[this.state.currentQues].optionA}</button>
                        <button className="button" id="optionB" onClick={this.checkAnswer} value={questions[this.state.currentQues].optionB}>{questions[this.state.currentQues].optionB}</button>
                    </div>
                    <div>
                        <button className="button" id="optionC" onClick={this.checkAnswer} value={questions[this.state.currentQues].optionC}>{questions[this.state.currentQues].optionC}</button>
                        <button className="button" id="optionD" onClick={this.checkAnswer} value={questions[this.state.currentQues].optionD}>{questions[this.state.currentQues].optionD}</button>
                    </div>
                    <div>
                        <button className="button1" onClick={()=>this.previousbutton()}>Previous</button>
                        <button className="button2" onClick={()=>this.nextbutton()}>Next</button>
                        <Link to="/result">
                            <button className="button3">Quit</button>
                        </Link>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default QuizComponent;