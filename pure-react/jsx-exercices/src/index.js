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

ReactDOM.render(
  <MyThing2/>,
  document.querySelector('#root')
);
