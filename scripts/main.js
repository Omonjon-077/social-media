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

const colorPlatte = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1'),
    Bg2 = document.querySelector('.bg-2'),
    Bg3 = document.querySelector('.bg-3');

const chatType = document.querySelectorAll('.category h6'),
    chatPrimary = document.querySelector('.chat-primary'),
    chatGeneral = document.querySelector('.chat-general'),
    chatRequest = document.querySelector('.chat-request'),
    chatRequestCount = document.querySelector('.request-count'),
    chatRequests = document.querySelectorAll('.chat-request .message');

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
            localStorage.setItem('activeNotificationCount', 'empty');
        }
    })
})

activeNotificationCount = localStorage.getItem('activeNotificationCount') ? localStorage.getItem('activeNotificationCount') : null;
if (activeNotificationCount === 'empty') {
    document.querySelector('#notifications .notification-count').style.display = 'none';
}
/*================= MESSAGES  =================*/
// search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        name = user.querySelector('h5').textContent.toLowerCase();
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
    localStorage.setItem('activeNotificationMessage', 'empty');
    setTimeout(() => {
        messages.style.boxShadow = 'initial'
    }, 2000)
})

activeNotificationMessage = localStorage.getItem('activeNotificationMessage') ? localStorage.getItem('activeNotificationMessage') : null;
if (activeNotificationMessage === 'empty') {
    messagesNotification.querySelector('.notification-count').style.display = 'none';
}

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
// get last active item
activeSize = localStorage.getItem('activeSize') ? activeSize = localStorage.getItem('activeSize') : null;
const activeLastSize = () => {
    if (activeSize === 'activeSizeOne') {
        fontSizes.forEach(size => {
            if (size.classList.contains('font-size-1')) {
                size.classList.add('active');
            }
        });
    } else if (activeSize === 'activeSizeTwo') {
        fontSizes.forEach(size => {
            if (size.classList.contains('font-size-2')) {
                size.classList.add('active');
            }
        });
    } else if (activeSize === 'activeSizeThree') {
        fontSizes.forEach(size => {
            if (size.classList.contains('font-size-3')) {
                size.classList.add('active');
            }
        });
    } else if (activeSize === 'activeSizeFour') {
        fontSizes.forEach(size => {
            if (size.classList.contains('font-size-4')) {
                size.classList.add('active');
            }
        });
    } else if (activeSize === 'activeSizeFive') {
        fontSizes.forEach(size => {
            if (size.classList.contains('font-size-5')) {
                size.classList.add('active');
            }
        });
    } else {
        fontSizes.forEach(size => {
            if (size.classList.contains('font-size-3')) {
                size.classList.add('active');
            }
        });
    }
}

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removeSizeSelector();
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            localStorage.setItem('activeSize', 'activeSizeOne');
            localStorage.setItem('fontSize', fontSize);
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            localStorage.setItem('fontSize', fontSize);
            localStorage.setItem('activeSize', 'activeSizeTwo');
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            localStorage.setItem('activeSize', 'activeSizeThree');
            localStorage.setItem('fontSize', fontSize);
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            localStorage.setItem('activeSize', 'activeSizeFour');
            fontSize = '19px';
            localStorage.setItem('fontSize', fontSize);
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rrem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            localStorage.setItem('activeSize', 'activeSizeFive');
            localStorage.setItem('fontSize', fontSize);
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        // change font size of the toor html element
        document.querySelector('html').style.fontSize = fontSize;
    })
});

// Last active font size item
activeLastSize();

// Get localstorge after refresh page
fontSize = localStorage.getItem('fontSize') ? localStorage.getItem('fontSize') : null;
document.querySelector('html').style.fontSize = fontSize;

/*================= COLOR PlATTE  =================*/
// remove active class all items
const removeColorActiveClass = () => {
    colorPlatte.forEach(color => {
        color.classList.remove('active');
    })
}
// get last active color platte item from localstorge
activeColorPlatte = localStorage.getItem('activeColorPlatte') ? activeSize = localStorage.getItem('activeColorPlatte') : null;
const activeLastColorPlatte = () => {
    if (activeColorPlatte === 'activeColorOne') {
        colorPlatte.forEach(color => {
            if (color.classList.contains('color-1')) {
                color.classList.add('active');
            }
        });
    } else if (activeColorPlatte === 'activeColorTwo') {
        colorPlatte.forEach(color => {
            if (color.classList.contains('color-2')) {
                color.classList.add('active');
            }
        });
    } else if (activeColorPlatte === 'activeColorThree') {
        colorPlatte.forEach(color => {
            if (color.classList.contains('color-3')) {
                color.classList.add('active');
            }
        });
    } else if (activeColorPlatte === 'activeColorFour') {
        colorPlatte.forEach(color => {
            if (color.classList.contains('color-4')) {
                color.classList.add('active');
            }
        });
    } else if (activeColorPlatte === 'activeColorFive') {
        colorPlatte.forEach(color => {
            if (color.classList.contains('color-5')) {
                color.classList.add('active');
            }
        });
    } else {
        colorPlatte.forEach(color => {
            if (color.classList.contains('color-1')) {
                color.classList.add('active');
            }
        });
    }
};
colorPlatte.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        removeColorActiveClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
            localStorage.setItem('colorPlatte', primaryHue);
            localStorage.setItem('activeColorPlatte', 'activeColorOne');
            color.classList.add('active');
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
            localStorage.setItem('colorPlatte', primaryHue);
            localStorage.setItem('activeColorPlatte', 'activeColorTwo');
            color.classList.add('active');
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
            localStorage.setItem('colorPlatte', primaryHue);
            localStorage.setItem('activeColorPlatte', 'activeColorThree');
            color.classList.add('active');
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
            localStorage.setItem('colorPlatte', primaryHue);
            localStorage.setItem('activeColorPlatte', 'activeColorFour');
            color.classList.add('active');
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
            localStorage.setItem('colorPlatte', primaryHue);
            localStorage.setItem('activeColorPlatte', 'activeColorFive');
            color.classList.add('active');
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
});

// Last active color platte item call func
activeLastColorPlatte();
// Get localstorge after refresh page
getColorPlatte = localStorage.getItem('colorPlatte') ? localStorage.getItem('colorPlatte') : null;
root.style.setProperty('--primary-color-hue', getColorPlatte);

/*================= BACKROUND CHANGE  =================*/
// get last active color platte item from localstorge
activeThemeBg = localStorage.getItem('activeThemeBg') ? localStorage.getItem('activeThemeBg') : null;
const activeLastThemeBg = () => {
    if (Bg2.classList.contains('bg-2') && activeThemeBg === 'activeThemeBgTwo') {
        Bg2.classList.add('active');
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
    } else if (Bg3.classList.contains('bg-3') && activeThemeBg === 'activeThemeBgThree') {
        Bg3.classList.add('active');
        Bg1.classList.remove('active');
        Bg2.classList.remove('active');
    } else {
        Bg1.classList.add('active');
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
    }
};

// Colors HUE variables
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Click changes backround color
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
};

Bg1.addEventListener('click', () => {
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    let themeBg = [darkColorLightness, whiteColorLightness, lightColorLightness]

    localStorage.setItem('themeBg', JSON.stringify(themeBg));
    localStorage.setItem('activeThemeBg', 'activeThemeBgOne');

    // add active class
    Bg1.classList.add('active');

    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    let themeBg = [darkColorLightness, whiteColorLightness, lightColorLightness]

    localStorage.setItem('themeBg', JSON.stringify(themeBg));
    localStorage.setItem('activeThemeBg', 'activeThemeBgTwo');
    // add active class
    Bg2.classList.add('active');

    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    let themeBg = [darkColorLightness, whiteColorLightness, lightColorLightness]

    localStorage.setItem('themeBg', JSON.stringify(themeBg));
    localStorage.setItem('activeThemeBg', 'activeThemeBgThree');
    // add active class
    Bg3.classList.add('active');

    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
});


themeBg = JSON.parse(localStorage.getItem('themeBg')) ? JSON.parse(localStorage.getItem('themeBg')) : null;
if (themeBg) {
    themeBg.forEach(bgHue => {
        root.style.setProperty('--dark-color-lightness', themeBg[0]);
        root.style.setProperty('--white-color-lightness', themeBg[1]);
        root.style.setProperty('--light-color-lightness', themeBg[2]);
    });
}
activeLastThemeBg();

/*================= BACKROUND CHANGE  =================*/
const removeActiveChat = () => {
    chatType.forEach(chat => {
        chat.classList.remove('active');
    });
}

const requestCount = () => {
    for (let i = 0; i < chatRequests.length; i++) {
        let lengthCount = i;
        chatRequestCount.innerHTML = lengthCount + 1;
    }
};

chatType.forEach(chat => {
    chat.addEventListener('click', (e) => {
        removeActiveChat();
        chat.classList.add('active');
        if (chat.classList.contains('chat-type-primary')) {
            chatPrimary.style.display = 'initial';
            chatGeneral.style.display = 'none';
            chatRequest.style.display = 'none';
        } else if (chat.classList.contains('chat-type-general')) {
            chatGeneral.style.display = 'initial';
            chatPrimary.style.display = 'none';
            chatRequest.style.display = 'none';
        } else {
            chatRequest.style.display = 'initial';
            chatPrimary.style.display = 'none';
            chatGeneral.style.display = 'none';
        }
    });
});

requestCount();