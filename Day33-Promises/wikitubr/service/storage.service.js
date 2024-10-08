function saveSearchTerm(term) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || []
    if (!history.includes(term)) {
        history.unshift(term)
        localStorage.setItem('searchHistory', JSON.stringify(history))
        loadSearchHistory()
    }
}

function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || []
    const historyList = document.querySelector('#search-history')
    historyList.innerHTML = history.map(term => `<li>${term}</li>`).join('')
}

