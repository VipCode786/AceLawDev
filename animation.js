const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.add("anileft1", entry.isIntersecting);
    });
  };
  
  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements = document.querySelectorAll('.anileft');
  elements.forEach(el => {
    observer.observe(el, options);
  });


  const startAnimation1 = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("aniright1", entry.isIntersecting);
    });
  };
  
  const observer1 = new IntersectionObserver(startAnimation1);
  const options1 = { root: null, rootMargin: '0px', threshold: 1 }; 
  
  const elements1 = document.querySelectorAll('.aniright');
  elements1.forEach(el => {
    observer1.observe(el, options1);
  });