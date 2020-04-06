import React from 'react';
import ReactDOM from 'react-dom';

function MyThing () {
  return (
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-345678-910
        </li>
      </ul>
    </div>
  );
}

function MyThing2() {
  return (
    React.createElement(
      'div',
      { className: 'book' },
      React.createElement(
        'div',
        { className: 'title' },
          'The Title 2'
      ),
      React.createElement(
        'div',
        { className: 'author' },
        'The Author'
      ),
      React.createElement(
        'ul',
        { className: 'stats' },
        React.createElement(
          'li',
          { className: 'rating' },
          '5 stars'
        ),
        React.createElement(
          'li',
          { className: 'isbn' },
          '12-345678-910'
        )
      )
    )
  );
}

function MyThing3() {
  const e = React.createElement;
  return (
    e(
      'div',
      { className: 'book' },
      e(
        'div',
        { className: 'title' },
          'The Title 3'
      ),
      e(
        'div',
        { className: 'author' },
        'The Author'
      ),
      e(
        'ul',
        { className: 'stats' },
        e(
          'li',
          { className: 'rating' },
          '5 stars'
        ),
        e(
          'li',
          { className: 'isbn' },
          '12-345678-910'
        )
      )
    )
  );
}

function Greeting() {

  let username = 'root';
  //let username = undefined;
  //let username = null;
  //let username = false;

  return(
    <div>
    { username == null || typeof(username) == 'undefined' ? 'Not logged in' : 'Hello '+username }
    </div>
  );
}

ReactDOM.render(
  <Greeting/>,
  document.querySelector('#root')
);
