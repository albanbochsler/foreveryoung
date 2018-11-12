import React  from 'react';
import { Link } from 'react-router';
import QuestionHandler from './QuestionHandler';

class Main extends React.Component{
    render() {
        return (
            <div>
                <h1> <Link to="/">ForeverYoung</Link></h1>
                <QuestionHandler {...this.props}/>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
};

export default Main;