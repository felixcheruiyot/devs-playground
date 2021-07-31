let DevsPlaygroundTabs = {
    load() {
        let tabLinks = document.getElementsByClassName("tab-link")
        if (tabLinks) {
            for (let i = 0; i < tabLinks.length; ++i) {
                let tabLink = tabLinks[i]
                tabLink.onclick = function (ev) {
                    ev.preventDefault();
                    let tab = document.getElementById(tabLink.dataset.target + "-tab")
                    if (tab) {
                        let tabs = document.getElementsByClassName("tab")
                        for (let x = 0; x < tabs.length; ++x) {
                            let tab = tabs[x]
                            tab.classList.remove("tab-show")
                            tab.classList.add("tab-hide")
                            console.log("tab", tab)
                        }
                        for (let y = 0; y < tabLinks.length; ++y) {
                            let tabLinkY = tabLinks[y]
                            tabLinkY.classList.remove("active")
                        }
                        tab.classList.add("tab-show")
                        tabLink.classList.add("active")
                    }
                }
            }
        }
    }
}