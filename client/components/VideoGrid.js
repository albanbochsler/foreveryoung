import React from 'react';
import Video from './Video';

class VideoGrid extends React.Component{

    render() {
        return (
            <div className="video-grid">

                {this.props.persons.map((person, i ) =>
                    <Video {...this.props}
                           key={i} i={i} person={person} active={0}
                    />)}
            </div>
        )
    }
}

export default VideoGrid;