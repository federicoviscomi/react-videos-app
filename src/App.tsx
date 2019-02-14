import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube.js";

interface AppProps {
}

interface AppState {
    videos: string[]
}

class App extends Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {videos: []};
    }

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
                <div>
                    Videos app
                </div>
                <div>
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                </div>
                <div>
                    There are {this.state.videos.length} videos.
                </div>
            </div>
        );
    }
}

export default App;
