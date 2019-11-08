let allLinks = document.querySelectorAll('nav a');
let allSections = document.querySelectorAll('section');

const options = {
  treshold: 1.0
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let link = searchLink('#' + entry.target.parentNode.id);
      theSelected(link);
    }
  });
}

let observer = new IntersectionObserver(callback, options);

allSections.forEach( section => {
  observer.observe(section.getElementsByTagName('p')[0]);
});

const deleteSelected = () => {
  allLinks.forEach((link) => {
    if (link.classList = 'selected') {
      link.classList.remove('selected');
    }
  });
}

const theSelected = (elem) => {
  deleteSelected();
  elem.classList.add('selected');
}

allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    theSelected(e.target);
    window.location = e.target.href;
  })
});

const searchLink = (id) => {
  let link = document.querySelector('nav a[href="' + id + '"]');
  return link
}
