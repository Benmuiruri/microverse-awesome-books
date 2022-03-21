import Book from './modules/book.js';
import { DateTime } from './modules/luxon.js';

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



displayTime();

Book.updateUi();

Book.formBtn.addEventListener('click', Book.addBooks);
