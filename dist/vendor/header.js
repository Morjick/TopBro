function Header() {
  const header = document.querySelector('.burger')
  const burgerMenu = document.querySelector('.burger_list')

  // header.onclick = () => {
  //   classList.toggle = 'burger-active'
  // }
  
  header.addEventListener('click', () => {
    header.classList.toggle('burger-active')
    burgerMenu.classList.toggle('burger_list_active')
  })
}

export default Header