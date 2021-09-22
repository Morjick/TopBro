import Data from './data.js'

function bloger() {

  let str = ''
  let blogersInner = document.querySelector('.bloger_inner')
  let blogerContent = document.querySelector('.blogers')
  const body = document.querySelector('body')

  let Height, ScrollHeight

  body.onscroll = () => {
    Height = document.documentElement.scrollHeight
    ScrollHeight = window.pageYOffset + document.documentElement.scrollTop
    console.log('Height:' + Height)
    console.log('ScrollHeight:' + ScrollHeight)
    if(ScrollHeight >= Height) innerBlogers()
  }
  

  let loading = false
  let loader = `
    <div class="loader">
      <div class="loader_inenr">
        <p>Подгружаем...</p>
      </div>
    </div>
  `

  if(loading) setLoading()

  function setLoading() {
    blogerContent.appendChild = loader
  }

  function innerBlogers() {
    Data.blogers.forEach(el => {
      loading = false
      let bloger = `
      <div class="bloger_item">
      <a href="/bloger.html">
        <div class="bloger_item_mask">
          <img src="` + el.avatar + `" alt="">
          <div class="bloger_desk">
            <div class="bloger_item_name">`+ el.name + `</div>
            <div class="bloger_social">
              <img src="/img/sprytes/YouTube.png" alt="">
              <p>`+ el.watch.youtube + `</p>
            </div>
            <div class="bloger_social">
              <img src="/img/sprytes/Vk.png" alt="">
              <p>`+ el.watch.vk + `</p>
            </div>
            <div class="bloger_social">
              <img src="/img/sprytes/Instagramm.png" alt="">
              <p>`+ el.watch.instagramm + `</p>
            </div>
          </div>
        </div>
      </a>
    </div>
      `
      str += bloger
      blogersInner.innerHTML = str
    })
  }

  innerBlogers() 

  
  
}

export default bloger