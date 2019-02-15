import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube.js";
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

interface AppProps {
}

interface AppState {
    videos: any[],
    selectedVideo: any
}

class App extends Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: undefined
        };
    }

    onVideoSelect: (video: any) => void = (video: any) => {
        this.setState({selectedVideo: video});
    };

    onTermSubmit = async (term: any) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({videos: response.data.items});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
