const Navy = {

  showLevel(level) {
    Navy.container.classList.remove('show-level-0', 'show-level-1', 'show-level-2', 'show-level-3', 'show-level-4', 'show-level-5', 'show-level-6', 'show-level-7')
    Navy.container.classList.add(`show-level-${level}`)
  },

  displayRelatedSubmenu (target, submenus) {
    [].forEach.call(submenus, function (submenu) {
      submenu.classList.add('hidden')
    })
    target.classList.remove('hidden')

    // set focus on the `.back` button after the transition
    // 600ms is the duration of the sliding animation (find it in _navy.scss)
    setTimeout(function () { target.querySelector('.navy__back').focus() }, 610)
  },

  initEvents (nextButtons, backButtons, navy, container, submenus, level) {

    [].forEach.call(nextButtons, function (btn) {
      btn.relatedMenu = btn.nextElementSibling

      container.appendChild(btn.relatedMenu)

      btn.addEventListener('click', function () {
        Navy.showNextLevel(0)
        Navy.displayRelatedSubmenu(btn.relatedMenu, submenus)
        Navy.currentMenuLink = btn
      })
    });

    [].forEach.call(backButtons, function (btn) {
      btn.addEventListener('click', function () {
        Navy.showPrevLevel(1)
      })
    })
  },

  parseTree(ul, level) {
    let nextButtons = ul.querySelectorAll(':scope > li > .navy__has-children')
    if ( nextButtons.length === 0 ) return

    let backButtons = ul.querySelectorAll(':scope > li > ul > li > .navy__back')
    let submenus = ul.querySelectorAll(":scope > li > ul");

    [].forEach.call(nextButtons, function (btn) {
      btn.style.backgroundColor = 'yellow'
      btn.relatedMenu = btn.nextElementSibling

      //container.appendChild(btn.relatedMenu)
      Navy.level[level+1].appendChild(btn.relatedMenu)

      btn.addEventListener('click', function () {
        Navy.showLevel(level+1)
        console.log('btn.relatedMenu, submenus', btn.relatedMenu, submenus)
        Navy.displayRelatedSubmenu(btn.relatedMenu, submenus)
        Navy.currentMenuLink = btn
      })
      Navy.parseTree(btn.relatedMenu, level+1)
    });

    [].forEach.call(backButtons, function (btn) {
      btn.addEventListener('click', function () {
        Navy.showLevel(level)
      })
    })
  },

  init (ulMenus, target) {

    // build navy structure and inject it in the target:
    const targetElement = document.querySelector(target)

    Navy.currentMenuLink = undefined
    Navy.container = document.createElement('div')
    Navy.level = []
    Navy.level[0] = document.createElement('div')
    Navy.level[1] = document.createElement('div')
    Navy.level[2] = document.createElement('div')
    Navy.level[3] = document.createElement('div')
    Navy.level[4] = document.createElement('div')
    Navy.level[5] = document.createElement('div')
    Navy.level[6] = document.createElement('div')
    Navy.level[7] = document.createElement('div')

    Navy.container.classList.add('navy', 'show-level-0')
    Navy.level[0].classList.add('navy__level-0')
    Navy.level[1].classList.add('navy__level-1')
    Navy.level[2].classList.add('navy__level-2')
    Navy.level[3].classList.add('navy__level-3')
    Navy.level[4].classList.add('navy__level-4')
    Navy.level[5].classList.add('navy__level-5')
    Navy.level[6].classList.add('navy__level-6')
    Navy.level[7].classList.add('navy__level-7')

    targetElement.appendChild(Navy.container)
    Navy.container.appendChild(Navy.level[0])
    Navy.container.appendChild(Navy.level[1])
    Navy.container.appendChild(Navy.level[2])
    Navy.container.appendChild(Navy.level[3])
    Navy.container.appendChild(Navy.level[4])
    Navy.container.appendChild(Navy.level[5])
    Navy.container.appendChild(Navy.level[6])
    Navy.container.appendChild(Navy.level[7])


    // parse all uls and init events:
    let uls = document.querySelectorAll(ulMenus)

    uls.forEach(function (ul) {

      // inject navigation in navy__level0
      Navy.level[0].appendChild(ul)

      // parse tree and inject uls in their respective slides
      Navy.parseTree(ul, 0)
    })
  }
}

export default Navy