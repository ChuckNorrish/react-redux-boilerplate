import React from "react"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Content from './layout/Content'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Router from './layout/Router'

const Layout = ({ children }) =>  
{
  return (
    <Site>
      <Helmet
        title="Studio Norrish - A React Redux Boilerplate"
        meta={[
          { name: 'description', content: 'A React and Redux boilerplate for Studio Norrish projects' },
          { name: 'keywords', content: 'boilerplate, studio norrish, react, redux' },
        ]}
        script={[
          { 'src': 'https://use.fontawesome.com/releases/v5.0.10/js/all.js'},
        ]}
        link={[
          { 
            'rel': 'stylesheet', 
            'href': 'https://use.fontawesome.com/releases/v5.0.10/css/all.css', 
            'integrity': 'sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg', 
            'crossorigin': 'anonymous'
          },
          { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Roboto' }
        ]}
      />
      <Header />
      <Content>
        <Router />
      </Content>
      <Footer />
    </Site>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout