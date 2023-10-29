import React from 'react'
import Header from './../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'

const Layout = ({children,description,keywords,title,author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Helmet>
      <Header/>
      <Toaster
      position='right-top'
      />
      <div className='children'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Ecommerce app',
  description : "Mern Stack",
  author: "Dev Oluyemi",
  keywords: "Mongoose React Express Node"
}

export default Layout