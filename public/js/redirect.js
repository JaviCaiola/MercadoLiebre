let links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', () => {
      const endpoint = link.getAttribute('data-endpoint');
      window.location.href = endpoint;
    });
  });