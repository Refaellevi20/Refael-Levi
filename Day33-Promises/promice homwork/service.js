'use strict'

const url = 'http://www.filltext.com/?rows=20&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true'

function getContacts(onSuccess, onError) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        // checks if the request has finished & was successful - status code 200
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const res = JSON.parse(xhr.responseText)
            // console.log(res)
            onSuccess(res)
        }
    }

    //! another way (but not running 5 times)
    // this function runs only once, when the request has successfully completed
    // xhr.onload = () => {
    //     if (xhr.status === 200) {
    //         const res = JSON.parse(xhr.responseText)
    //         onSuccess(res)
    //     }
    // }

//     xhr.open('GET', url,) //^ defuilt true
//     xhr.send()
 }




