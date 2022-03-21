import Book from './modules/book.js';
import DisplayTime from './modules/date.js';

Book.listBtn.forEach((btn, i) => {
  btn.onclick = () => {
    Book.listBtn.forEach((oldBtn) => {
      oldBtn.classList.remove('active');
    });
    btn.classList.add('active');
    Book.addActive.forEach((sec, index) => {
      if (i === index) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  };
});

DisplayTime();

Book.updateUi();

Book.formBtn.addEventListener('click', Book.addBooks);
