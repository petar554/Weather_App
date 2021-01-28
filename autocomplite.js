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
    let items;
    let timeoutId;

    const onInput = event => {
        if (timeoutId) {
            clearInterval(timeoutId);
        }
        timeoutId = setTimeout(() => {
            items = fetchData(event.target.value).then(res => {
                const anchor = document.createElement('a');
                anchor.classList.add('dropdown-item');
                anchor.innerHTML = `<h1>${res.name}</h1>`;
                console.log(anchor);
                results.appendChild(anchor);
            })
        }, 1000)
    }

    dropdown.classList.add('is-active');
    console.log(items);

    input.addEventListener('input', onInput)
}


