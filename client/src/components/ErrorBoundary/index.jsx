import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './styles'

export default class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png' />
          <ErrorImageText>This page is Broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children
  }
}
