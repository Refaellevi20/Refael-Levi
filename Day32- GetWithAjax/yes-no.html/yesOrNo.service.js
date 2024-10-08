'use strict'

// function getAns(cb) {
//     const xhr = new XMLHttpRequest()
//     const url =  "https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif"

//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             const ans = JSON.parse(xhr.responseText)
//             cb(ans)
//         }
//     }
//     xhr.open('GET',url, true)
//     xhr.send()
// }