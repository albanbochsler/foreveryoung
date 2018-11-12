import React from 'react';
import {Link} from 'react-router';
import {connect} from "react-redux";

class Video extends React.Component{
    render() {
        let activeVideo = 0;
        if(this.props.active == null) {
            activeVideo = 0;
        } else {
            activeVideo = this.props.active;
        }


        console.log(activeVideo)

        const {person, i, videos, questions } = this.props;

        return(
            <figure className="grid-figure">
            <div className="grid-video-wrap">
                <Link to={`/detail/${person.id}`}>

                    <img src={person.questions[activeVideo]} alt=""/>

                </Link>
            </div>
            </figure>
        )
    }
}

function mapStateToProps(state) {
    return {
        active: state.ActiveQuestion,
    }
}

export default connect(mapStateToProps)(Video);

