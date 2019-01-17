let elements = document.getElementsByTagName('a');
for (let element of elements) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        data_item = element.getAttribute('data-item');
        let contents = document.querySelectorAll(`div[data-show='${data_item}'`);
        let item = this.lastElementChild;
        remove(data_item);
        contents.forEach(content => {
            if (!content.classList.contains('active')) {
                content.classList.add('active');
                content.classList.remove('deactive');
                item.classList.add('rotate180');
                item.classList.remove('rotate0');
            }
            else {
                content.classList.add('deactive');
                content.classList.remove('active');
                item.classList.remove('rotate180');
                item.classList.add('rotate0');
            }
        })
    });
}

function remove(data) {
    let activeEl = document.querySelectorAll(`div[data-show]:not([data-show='${data}'])`);
    activeEl.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            el.classList.add('deactive');
        }
    })

    let activeIcons = document.querySelectorAll(`span[data-item]:not([data-item='${data}'])`);
    activeIcons.forEach(icon => {
        if (icon.classList.contains('rotate180')) {
            icon.classList.remove('rotate180');
            icon.classList.add('rotate0');
        }
    })
}