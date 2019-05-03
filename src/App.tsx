import React from 'react';

const x = Buffer.alloc(30)


export default class extends React.Component {
  render() {
    return <p>Babel +wft TypeScript + React = ❤️  {x.toString('hex')}</p>;
  }
}
