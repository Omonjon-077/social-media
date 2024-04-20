/*================= ALL CONSTS  =================*/
const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notification'),
    messages = document.querySelector('.messages'),
    message = messages.querySelectorAll('.message'),
    messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme'),
    themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
 let root = document.querySelector(':root');
/*================= SIDEBAR  =================*/
// Remove active class from all menu items
const
    changeActiveItem = () => {
        menuItems.forEach(item => {
            item.classList.remove('active');
        })
    }
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

/*================= MESSAGES  =================*/
// search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)

// hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'initial'
    }, 2000)
})

/*================= THEME/DISPLAY CUSTOMIZATION  =================*/
// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

/*================= FONT SIZE  =================*/
// remove active class from spans or font size selectors
const removeSizeSelector = () => {
   fontSizes.forEach(size => {
       size.classList.remove('active');
   })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removeSizeSelector();
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rrem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change font size of the toor html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})