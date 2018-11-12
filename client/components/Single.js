import React from 'react';
import {Link} from "react-router";
import {connect} from "react-redux";
import Video from "./Video";

class Single extends React.Component{
    render() {
        const active = this.props.active;
       const {videoId} = this.props.params;
       const i = this.props.persons.findIndex((person) => person.id === videoId);
       const video = this.props.persons[i]
        return (
            <div className="single-video">
                <img src={video.questions[active]} alt=""/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        active: state.ActiveQuestion,
    }
}

export default connect(mapStateToProps)(Single);
