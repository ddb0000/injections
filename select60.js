function selectCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const limit = 60;
  
    let count = 0;
    checkboxes.forEach((box) => {
      if (count < limit && !box.checked) {
        box.click();
        count++;
      }
    });
  
    if (count > 0) {
      console.log(`Selected ${count} profiles.`);
    } else {
      console.log('No more profiles to select or already reached the limit.');
    }
  }
selectCheckboxes();