import axios from "axios";

// import { createBroadcastChannel } from "msw/lib/types/utils/createBroadcastChannel";
console.log('hello world.')

const Header = (title, date, temp) => {

  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSpan = document.createElement('span');

  header.appendChild(dateSpan);
  header.appendChild(titleH1);
  header.appendChild(tempSpan);

  header.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  dateSpan.textContent = date;
  titleH1.textContent = title;
  tempSpan.textContent = temp;
  // console.log(header);
  return header;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

Header('lambda', 'date', 'temp')

const headerAppender = (selector) => {
  let appendElement = document.querySelector(selector);

  appendElement.appendChild(Header('Lambda Times', 'January 6, 2021', '26°'));

  return appendElement;

  // TASK 2
  // ---------------------
  // X- Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}


export { Header, headerAppender }
