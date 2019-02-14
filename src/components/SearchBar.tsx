import React from 'react';
import ReactDOM from 'react-dom';

interface SearchBarProps {
    onFormSubmit: (arg0: string) => void
}

interface SearchBarState {
    term: string
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form
                    className="ui form"
                    onSubmit={(event) => this.onFormSubmit(event)}
                >
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(event) => this.formVideoSearchOnChange(event)}
                        />
                    </div>
                </form>
            </div>
        );
    }

    private onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    private formVideoSearchOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({term: event.target.value});
    }
}

export default SearchBar;