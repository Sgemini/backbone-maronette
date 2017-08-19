console.log('paradise index');
(() => {
  let autoSlide = (item) => {
    let slider = document.getElementsByClassName('slide-item');
    console.log(item)
    if (slider.length > 0 && hasClass(slider[item])) {
      let ele = slider[item];
      ele.className = ele.className.replace(' active', '');
      if (item == 4) {
        item = 0;
      } else {
        item++;
      }
      let ele2 = slider[item];
      console.log(ele2.className);
      ele2.className = ele2.className + ' active';
      console.log(ele2.className);
    }
    setTimeout(() => { autoSlide(item) }, 2000);
  };

  autoSlide(0)
})();

let hasClass = (obj, cls) => {
  let classList = obj.className.split(/\s+/);
  console.log(classList);
  for(i = 0; i < classList.length; i++) {
    if (classList[i] == 'active') {
      return true;
    }
  }
  return false;
};