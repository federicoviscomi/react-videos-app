import React from 'react';
import VideoItem from './VideoItem';

interface VideoListProps {
    videos: any[]
}

interface VideoListState {
}

class VideoList extends React.Component<VideoListProps, VideoListState> {
    constructor(props: VideoListProps) {
        super(props);
    }

    render() {
        const renderedList = this.props.videos.map((video) => {
            return (<VideoItem video={video}/>);
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