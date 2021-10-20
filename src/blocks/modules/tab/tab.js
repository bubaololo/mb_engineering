document.addEventListener('DOMContentLoaded', () => {
    initTabs("data-link", "data-block", 'link-aside--active', 'data-select');

    initTabs("data-tab-link", "data-tab-block", 'link-aside--active', 'data-select');

    initTabs("data-link-main", "data-block-main", 'btn--active-tab', '');
});

let initTabs = (link, block, activeClass, select) => {
    let button = document.querySelectorAll('[' + link + ']');

    let tab = document.querySelectorAll('[' + block + ']');

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (e) => {
            e.preventDefault();
            initLink(button[i].getAttribute(link));
        })
    }

    if (select) {
        let selectEl = document.querySelectorAll('[' + select + ']');

        for (let i = 0; i < selectEl.length; i++) {
            selectEl[i].addEventListener('change', (e) => {
                initLink(+e.target.value);
            });
        }
    }



    let initLink = (index) => {

        for (let i = 0; i < tab.length; i++) {
            if (index == tab[i].getAttribute(block)) {
                tab[i].removeAttribute('hidden');
            } else {
                tab[i].setAttribute('hidden', '');
            }
        }

        for (let i = 0; i < button.length; i++) {
            if (index == button[i].getAttribute(link)) {
                button[i].classList.add(activeClass);
            } else {
                button[i].classList.remove(activeClass);
            }
        }
    }

    initLink(1);
}

// Для больших табов в ФРП