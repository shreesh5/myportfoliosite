import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from  'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      currentPage: "home"
    };
  }

  render() {
    return (
      <div className="demo-big-content">
         <Layout>
             <Header className="header-color" title="My Portfolio" scroll>
                 <Navigation>
                     <Link to="/aboutme">About Me</Link>
                     <Link to="/projects">Projects</Link>
                     <Link to="/contact">Contact</Link>
                 </Navigation>
             </Header>
             <Drawer title="Title">
                 <Navigation>
                     <Link to="/myportfoliosite/aboutme">About Me</Link>
                     <Link to="/myportfoliosite/projects">Projects</Link>
                     <Link to="/myportfoliosite/contact">Contact</Link>
                 </Navigation>
             </Drawer>
             <Content>
                 <div/>
                 <Main />
             </Content>
         </Layout>
       </div>
     );   
  }
}

export default App;
