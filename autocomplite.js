const createAutocomplite = ({ rootElement, summary, fetchData, chooseACity, renderOption }) => {
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
                anchor.innerHTML = renderOption(res);
                results.appendChild(anchor);
                anchor.addEventListener('click', () => {
                    //console.log(res)
                    dropdown.classList.remove('is-active');
                    chooseACity(fetchData, res, summary);
                });
            })
        }, delay);
    }

    input.addEventListener('input', onInput)

    document.addEventListener('click', event => {
        if (!rootElement.contains(event.target)) {
            dropdown.classList.remove('is-active');
        }
    });
}





