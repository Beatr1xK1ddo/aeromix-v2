
function anal() {
    let counter = 0
    let isDestr = false

    const anal = () => counter++

    document.addEventListener('click', anal)

    return {
        destroy() {
            document.removeEventListener('click', anal)
            isDestr = true
        }, 
        getClicks() {
            if (isDestr) {
                return console.error('analytics is destroyed')
            }
            return counter
        }
    }
}

window.analytics = anal()

