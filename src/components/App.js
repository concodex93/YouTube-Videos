import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: ''
  };

  componentDidMount() {
    // default search term
    this.onQuerySubmit('Ireland');
  }

  onQuerySubmit = async query => {
    try {
      const response = await Youtube.get('/search', {
        params: {
          q: query
        }
      });

      if (response.data.items.length > 0) {
        this.setState({ videos: response.data.items });
        this.setState({ selectedVideo: response.data.items[0] });
      } else {
        alert(
          `Hmm, ${query} is a little vague. Can you be a bit more specific?`
        );
      }
    } catch (error) {
      alert(`Ops, something went wrong - ${error}`);
    }
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <div
          className="ui container"
          style={{ marginTop: '15px', width: '50%' }}
        >
          <SearchBar onQuerySubmit={this.onQuerySubmit} />
        </div>
        <div className="ui container" style={{ marginTop: '15px' }}>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
