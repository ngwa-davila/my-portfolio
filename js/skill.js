setTimeout(() => {
    const heading = document.querySelector('.skills-heading');
    heading.classList.add('flash');
  
    // Remove flash class after 5 seconds
    setTimeout(() => {
      heading.classList.remove('flash');
    }, 5000);
  }, spans.length * 100); // Delay starts after typing effect completes
  
