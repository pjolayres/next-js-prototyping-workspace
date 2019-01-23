import React from 'react'
import App, { Container } from 'next/app'
import { appWithTranslation } from '../common/js/utils/localization';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)