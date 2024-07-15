const Nav = document.querySelector('nav');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navlink = document.querySelector('.nav-link');


// nav scroll ......
window.addEventListener('scroll', () => {
    Nav.classList.toggle('nav-bg', window.scrollY>0);
  });
  
  
  // phone open menu ..... 
  open.addEventListener('click', () => {
    open.style.display = 'none';
    close.style.display = 'inline-block';
    navlink.style.left = '0';
  });
  
  // phone close menu ..... 
  close.addEventListener('click', () => {
    open.style.display = 'inline-block';
    close.style.display = 'none';
    navlink.style.left = '-100%';
  });