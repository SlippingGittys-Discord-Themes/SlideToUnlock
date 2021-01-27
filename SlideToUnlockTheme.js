let version = '2021.01.27.01';

let el;

const css = `@import url("https://slippinggitty.github.io/SlideToUnlock.css");`;

let obj = {
    onImport: async function () {
      el = document.createElement('style');
  
      document.head.appendChild(el);
  
      el.appendChild(document.createTextNode(css));
    },
  
    remove: async function () {
      el.remove();
    },
  
    name: 'SlideToUnlock',
    description: 'A Discord Theme inspired by 2007-2012 Design Characteristics',
  
    author: ['SlippingGitty'],
  
    version
  };
  
  obj