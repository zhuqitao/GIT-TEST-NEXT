import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ req, pathname, query, jsonPageRes }) {
      console.log('pathname', pathname);
      console.log('query', query);
      console.log('jsonPageRes', jsonPageRes);
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
      </div>
    )
  }
}