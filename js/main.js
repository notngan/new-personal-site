window.onload = function(){
  const pages = document.querySelectorAll('.page').length;
  let scdir = false;
  let hold = false;

  function _scrollY(obj) {
    let stepLength, pageLength, page, step = 100;
    const vh = window.innerHeight / 100;
    const vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
    if ((this !== undefined && this.id === 'body-container') || (obj !== undefined && obj.id === 'body-container')){
      page = this || obj;
      pageLength = parseInt(page.offsetHeight / vh);
    }
    if (page === undefined) {
      return;
    }
    pageLength = pageLength || parseInt(page.offsetHeight / vmin);
    stepLength = parseInt(page.style.transform.replace('translateY(', ''));
    if (scdir === 'up' && Math.abs(stepLength) < (pageLength - pageLength / pages)) {
      stepLength = stepLength - step;
    } else if (scdir === 'down' && stepLength < 0) {
      stepLength = stepLength + step;
    } else if (scdir === 'top') {
      stepLength = 0;
    }
    if (hold === false) {
      hold = true;
      page.style.transform = `translateY(${stepLength}vh)`;
      setTimeout(() => {
        hold = false;
      }, 1000);
    }
    console.log(scdir + ':' + stepLength + ':' + pageLength + ':' + (pageLength - pageLength / pages));
  }
  var container = document.getElementById('body-container');
  container.style.transform = 'translateY(0)';
  container.addEventListener('wheel', function(e) {
    if(e.deltaY < 0) { scdir = 'down'; }
    if(e.deltaY > 0) { scdir = 'up'; }
    e.stopPropagation();
  });
  container.addEventListener('wheel', _scrollY);
}