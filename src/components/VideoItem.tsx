import React from 'react';
import './VideoItem.css';

interface VideoItemState {
}

interface VideoItemProps {
    video: any,
    onVideoSelect: (video: any) => void
}

class VideoItem extends React.Component<VideoItemProps, VideoItemState> {
    constructor(props: VideoItemProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div onClick={() => this.props.onVideoSelect(this.props.video)} className="video-item item">
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url}/>
                <div className="content">
                    <div className="header">
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;


