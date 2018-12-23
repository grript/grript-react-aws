import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class RouteLayout extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    const Layout = this.props.layout;
    const Component = this.props.component;
    
    return (
      <Layout>
        <Route render={props => (
          <Component {...props}/>
        )}/>
      </Layout>  
    )
  }  
}

export default RouteLayout;
