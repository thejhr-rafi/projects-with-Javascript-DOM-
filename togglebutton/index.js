const heading = document.querySelector('h5');
const addFrnd = document.getElementById('addfriend');

var check = 0;
addFrnd.addEventListener('click', () => {
  if (check == 0) {
    heading.textContent = 'Friend';
    heading.style.color = 'green';
    addFrnd.innerHTML = 'Strainger';
    check = 1;
  } else {
    heading.textContent = 'Strainger';
    heading.style.color = 'red';
    addFrnd.innerHTML = 'friend';
    check = 0;
  }
});
