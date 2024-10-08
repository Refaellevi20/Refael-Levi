
let selectedColor = '#ffffff'
// let ctx

const YT_KEY = 'AIzaSyBM9Y66mvQtTKbUHdsD43V_JA3Vh3nvKTE'

function onInit() {
    //* Default search
    const defaultSearchTerm = 'mvc' //* empty look bad
    document.querySelector('#search').value = defaultSearchTerm
    fetchVideos(defaultSearchTerm)
    fetchWikipedia(defaultSearchTerm)
    renderRainbowCanvas()
    loadSearchHistory()

    document.querySelector('.search-button').addEventListener('click', () => {
        //! OR getElementById
        //! or i could use class 
        const query = document.querySelector('#search').value
        if (query) {
            fetchVideos(query)
            fetchWikipedia(query)
            saveSearchTerm(query)
        }
    })
}

//* The encodeURIComponent() method encodes special characters including:
//* looking anyway u want 
function fetchVideos(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${encodeURIComponent(query)}`
    fetch(url)
        .then(response => response.json())
        .then(data => renderVideos(data.items))
        .catch(error => console.error('Error fetching videos:', error))
}

function renderVideos(videos) {
    const videoList = document.querySelector('.video-list')
    //* no need to render the h2
    let videoItems = `<h2>Video Results</h2><ul class="videos">`

    videos.forEach(video => {
        // if(video.id && video.id.videoId)
        videoItems += `
            <li data-video-id="${video.id.videoId}">
                ${video.snippet.title}
            </li>`
    })

    videoItems += `</ul>`
    videoList.innerHTML = videoItems

    //* Add event listeners
    document.querySelectorAll('.videos li').forEach(li => {
        li.addEventListener('click', (event) => {
            const videoId = event.target.getAttribute('data-video-id')
            playVideo(videoId)
        })
    })
}

function playVideo(videoId) {
    const videoPlayer = document.querySelector('.video-player')
    videoPlayer.innerHTML = `<iframe class="video-place" width="420" height="345" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`
}

function fetchWikipedia(query) {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json`
    fetch(wikiUrl)
        .then(response => response.json())
        .then(data => renderWikipedia(data.query.search))
        .catch(error => console.error('Error fetching Wikipedia:', error))
}

function renderWikipedia(results) {
    const wikiResults = document.querySelector('.wiki-results')
    //* no need to render the h2
    let wikiItems = `<h2>Wikipedia Results</h2>`

    results.forEach(result => {
        wikiItems += `
            <li>
                <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}" target="_blank">${result.title}</a>: 
                ${result.snippet}
            </li>`
    }) //* The encodeURIComponent() method encodes special characters including:

    wikiItems += `</ul>`
    wikiResults.innerHTML = wikiItems
}



function renderRainbowCanvas() {
    const canvas = document.getElementById('colorPickerCanvas')
    const ctx = canvas.getContext('2d')
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(canvas.width, canvas.height) / 2

    //* Create a radial gradient from center
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)

    //* Add smooth rainbow colors (radial)
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(0.15, 'darkorange')
    gradient.addColorStop(0.3, 'yellow')
    gradient.addColorStop(0.45, 'green')
    gradient.addColorStop(0.6, 'cyan')
    gradient.addColorStop(0.75, 'blue')
    gradient.addColorStop(0.9, 'indigo')
    gradient.addColorStop(1, 'violet')

    //* Fill canvas with radial rainbow gradient
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //* Event listener to capture clicked color
    canvas.addEventListener('click', (event) => {
        const x = event.offsetX
        const y = event.offsetY
        const imageData = ctx.getImageData(x, y, 1, 1).data
        const selectedColor = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`
        console.log('Selected color:', selectedColor)
    })
}


function applyThemeColor() {
    document.body.style.backgroundColor = selectedColor
    hideChangeThemeModal()
}