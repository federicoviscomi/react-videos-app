import React from 'react';

interface VideoItemState {
}

interface VideoItemProps {
    video: any
}

class VideoItem extends React.Component<VideoItemProps, VideoItemState> {
    constructor(props: VideoItemProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div>
                <img src={this.props.video.snippet.thumbnails.medium.url}/>
                {this.props.video.snippet.title}
            </div>
        );
    }
}

export default VideoItem;


