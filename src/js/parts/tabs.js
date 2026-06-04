const tabAreas = document.querySelectorAll('[data-tabs-area]');

if (tabAreas.length) {
    tabAreas.forEach(area => {
        // Ищем табы с data-tab И data-tabs
        const tabs = area.querySelectorAll('[data-tab]');

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();

                const id = tab.dataset.tab || tab.dataset.tabs;
                const type = tab.dataset.type
                const parentArea = tab.closest('[data-tabs-area]');

                // Деактивируем все табы в этой области
                parentArea.querySelectorAll(`[data-tab][data-type="${type}"]`).forEach(t => {
                    t.classList.remove('_active');
                });

                // Активируем текущий таб
                tab.classList.add('_active');

                // Деактивируем весь контент в этой области
                parentArea.querySelectorAll(`[data-tab-content][data-type="${type}"]`).forEach(content => {
                    content.classList.remove('_active');
                });

                // Активируем нужный контент
                const targetContent = parentArea.querySelector(`[data-tab-content="${id}"]`);
                if (targetContent) {
                    targetContent.classList.add('_active');
                }

                if (tab.classList.contains('tab-link')) {
                    document.querySelectorAll(`.programms [data-tab-link]`).forEach(link => {
                        if (link.dataset.tabLink != id) {
                            link.classList.remove('_active');
                        } else {
                            link.classList.add('_active');
                        }
                    });
                }
            });
        });
    });
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('more-hotels')) {
        const textBox = targetEl.previousElementSibling;
        textBox.classList.toggle('_active');
        const isExpanded = textBox.classList.contains('_active');
        targetEl.textContent = isExpanded ? targetEl.dataset.textHide : targetEl.dataset.textShow;
    }


    if (targetEl.classList.contains('open-tab')) {
        const id = targetEl.dataset.id;

        document.querySelectorAll(`.programms [data-tab][data-type="parent"]`).forEach(tab => {
            if (tab.dataset.tab != id) {
                tab.classList.remove('_active');
            } else {
                tab.classList.add('_active');
            }
        });

        document.querySelectorAll(`.programms [data-tab-content][data-type="parent"]`).forEach(content => {
            if (content.dataset.tabContent != id) {
                content.classList.remove('_active');
            } else {
                content.classList.add('_active');
            }
        });
    }
});