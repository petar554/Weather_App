const createAutocomplite = ({ rootElement, fetchData }) => {
    rootElement.innerHTML = `
    <div class="container">
        <div class="columns">
            <div class="column is-one-third">
                <input class="input mt-5">
                <div class="dropdown">
                    <div class="dropdown-menu">
                        <div class="dropdown-content results">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
    const input = rootElement.querySelector('input');
    const dropdown = rootElement.querySelector('.dropdown');
    const results = rootElement.querySelector('.results');
    let timeoutId;

    const onInput = (event, delay = 1000) => {
        if (timeoutId) {
            clearInterval(timeoutId);
        }

        if (!event.target.value) {
            dropdown.classList.remove('is-active');
        }

        results.innerHTML = '';
        timeoutId = setTimeout(() => {
            const items = fetchData(event.target.value).then(res => {
                dropdown.classList.add('is-active');
                const anchor = document.createElement('a');
                anchor.classList.add('dropdown-item');
                anchor.innerHTML = `<h1>${res.name}</h1>`;
                console.log(anchor);
                results.appendChild(anchor);
            })
        }, delay)
    }

    input.addEventListener('input', onInput)
}




