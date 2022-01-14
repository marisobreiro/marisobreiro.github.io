const menuMobile = document.getElementById('menuMobile')
const menuList = document.getElementById('menuList')

menuMobile.addEventListener('click', () => {
    menuList.classList.toggle('active');
})

function menuChange(x) {
    x.classList.toggle("change");
  }