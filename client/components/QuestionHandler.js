import React from 'react';

const QuestionHandler = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        const questionSelector = this.refs.questionSelector.value;

        this.props.updateQuestion(questionSelector);
        this.props.changeQuestion(questionSelector);
    },
    render() {
        let questions = this.props.questions.map((question, i) => {
           return <option ref={question.title} value={question.title} key={i}>{question.question}</option>
        })
        return (
            <div className="question-handler">
                <form ref="questionForm" className="question-form" onChange={this.handleSubmit} onLoad={this.handleSubmit}>
                    <select ref="questionSelector">{questions}</select>

                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
});

export default QuestionHandler;