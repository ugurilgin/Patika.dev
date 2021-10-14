const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

/* TASKS */
// add divs with bootstrap

// retrieve bootstap elements
const section = document.querySelector(".section-center");
const buttonContainer = document.querySelector(".btn-container")

// filtered for category

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
      acc[key] = []
      }
      acc[key].push(obj)
      return acc
  }, {})
  }  

let groupedMenu = groupBy(menu, 'category')

// create buttons
const allButton = document.createElement('button')
const koreaButton = document.createElement('button')
const japanButton = document.createElement('button')
const chinaButton = document.createElement('button')

allButton.className= "btn btn-outline-dark btn-item"
koreaButton.className= "btn btn-outline-dark btn-item"
japanButton.className= "btn btn-outline-dark btn-item"
chinaButton.className= "btn btn-outline-dark btn-item"



allButton.id="All"
koreaButton.id="Korea"
japanButton.id="Japan"
chinaButton.id="China"

allButton.innerHTML="All"
koreaButton.innerHTML="Korea"
japanButton.innerHTML="Japan"
chinaButton.innerHTML="China"

buttonContainer.appendChild(allButton)
buttonContainer.appendChild(koreaButton)
buttonContainer.appendChild(japanButton)
buttonContainer.appendChild(chinaButton)


let element = document.createElement('div')
let dishList = menu.map(item => `<div class="menu-items col-lg-6 col-sm-12">
                                      <img src=${item.img} alt="${item.title}" ramen="" class="photo">
                                      <div class="menu-info">
                                        <div class="menu-title">
                                          <h4>${item.title}</h4>
                                          <h4 class="price">${item.price}</h4>
                                        </div>
                                        <div class="menu-text">
                                          ${item.desc}
                                        </div>
                                      </div>
                                  </div>`)

section.innerHTML= dishList
dishList = dishList.join("")
document.getElementById('China').onclick = function() {

  let dishList = groupedMenu.China.map(item => `<div class="menu-items col-lg-6 col-sm-12">
                                            <img src=${item.img} alt="${item.title}" ramen="" class="photo">
                                            <div class="menu-info">
                                              <div class="menu-title">
                                                <h4>${item.title}</h4>
                                                <h4 class="price">${item.price}</h4>
                                              </div>
                                              <div class="menu-text">
                                                ${item.desc}
                                              </div>
                                            </div>
                                        </div>`)

  section.innerHTML = dishList
}

document.getElementById('Japan').onclick = function() {

  let dishList = groupedMenu.Japan.map(item => `<div class="menu-items col-lg-6 col-sm-12">
                                            <img src=${item.img} alt="${item.title}" ramen="" class="photo">
                                            <div class="menu-info">
                                              <div class="menu-title">
                                                <h4>${item.title}</h4>
                                                <h4 class="price">${item.price}</h4>
                                              </div>
                                              <div class="menu-text">
                                                ${item.desc}
                                              </div>
                                            </div>
                                        </div>`)

  section.innerHTML = dishList
}

document.getElementById('Korea').onclick = function() {

  let dishList = groupedMenu.Korea.map(item => `<div class="menu-items col-lg-6 col-sm-12">
                                            <img src=${item.img} alt="${item.title}" ramen="" class="photo">
                                            <div class="menu-info">
                                              <div class="menu-title">
                                                <h4>${item.title}</h4>
                                                <h4 class="price">${item.price}</h4>
                                              </div>
                                              <div class="menu-text">
                                                ${item.desc}
                                              </div>
                                            </div>
                                        </div>`)

  section.innerHTML = dishList
}

document.getElementById('All').onclick = function() {

  let dishList = menu.map(item => `<div class="menu-items col-lg-6 col-sm-12">
                                            <img src=${item.img} alt="${item.title}" ramen="" class="photo">
                                            <div class="menu-info">
                                              <div class="menu-title">
                                                <h4>${item.title}</h4>
                                                <h4 class="price">${item.price}</h4>
                                              </div>
                                              <div class="menu-text">
                                                ${item.desc}
                                              </div>
                                            </div>
                                        </div>`)

  section.innerHTML = dishList
}