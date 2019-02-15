import React from 'react';

interface VideoDetailState {
}

interface VideoDetailProps {
    video: any
}

class VideoDetail extends React.Component<VideoDetailProps, VideoDetailState> {
    constructor(props: VideoDetailProps) {
        super(props);
    }

    render() {
        if (!this.props.video) {
            return (
                <div>
                    No video selected
                </div>
            );
        }
        const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc}>
                    </iframe>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {this.props.video.snippet.title}
                    </h4>
                    <p>
                        {this.props.video.snippet.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;