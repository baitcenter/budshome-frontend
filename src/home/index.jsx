import React from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Footer from './Footer';
import './static/style';

let isMobile;

class Home extends React.PureComponent {
  state = {
    isMobile,
  }
  render() {
    return (
      <DocumentTitle title="Ant Design - pro">
        <div>
          <Header isMobile={this.state.isMobile} />
          <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} />
            <Page1 isMobile={this.state.isMobile} />
            <Page2 />
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;