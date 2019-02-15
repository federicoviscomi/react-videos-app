import React from 'react';
import VideoItem from './VideoItem';

interface VideoListProps {
    videos: any[],
    onVideoSelect: (video: any) => void
}

interface VideoListState {
}

class VideoList extends React.Component<VideoListProps, VideoListState> {
    constructor(props: VideoListProps) {
        super(props);
    }

    render() {
        const renderedList = this.props.videos.map((video) => {
            return (
                <VideoItem key={video.id.videoId}
                           onVideoSelect={this.props.onVideoSelect}
                           video={video}/>
            );
        });
        return (
            <div>
                <div>
                    Video List {this.props.videos.length}
                </div>
                <div>
                    {renderedList}
                </div>
            </div>
        );
    }
}

export default VideoList;