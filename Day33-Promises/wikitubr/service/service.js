function showClearHistoryModal() {
    document.getElementById('clearHistoryModal').classList.add('active')
    document.querySelector('.overlay').classList.add('active')
}

function hideClearHistoryModal() {
    document.getElementById('clearHistoryModal').classList.remove('active')
    document.querySelector('.overlay').classList.remove('active')

}

function clearHistory() {
    localStorage.removeItem('searchHistory')
    loadSearchHistory()
    hideClearHistoryModal()
}

function showChangeThemeModal() {
    document.getElementById('changeThemeModal').classList.add('active')
    document.querySelector('.overlay').classList.add('active')
}

function hideChangeThemeModal() {
    document.getElementById('changeThemeModal').classList.remove('active')
    document.querySelector('.overlay').classList.remove('active')

}

// function applyThemeColor() {
//     const color = document.getElementById('colorPickerCanvas').value
//     document.body.style.backgroundColor = color
//     hideChangeThemeModal()
// }