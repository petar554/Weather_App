const createAutocomplite = ({ rootElement, fetchData }) => {
    rootElement.innerHTML = `
    <input class="input">
    <div class="dropdown">
        <div class="dropdown-menu">
            <div class="dropdown-content results">
            </div>
        </div>
    </div>
`
    const input = rootElement.querySelector('input');
    const dropdown = rootElement.querySelector('.dropdown');
    const results = rootElement.querySelector('.results');
    let timeoutId;

    const onInput = async event => {
        if (timeoutId) {
            clearInterval(timeoutId)
        }
        timeoutId = setTimeout(() => {
            fetchData(event.target.value)
        }, 500)
    }

    input.addEventListener('input', onInput)
}


