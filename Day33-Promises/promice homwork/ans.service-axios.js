'use strict'

const url1 = 'https://yesno.wtf/api'

function ask() {
    return axios.get(url1)
        .then(res => res.data)
        .catch(err => console.log('err:', err))

}

function askVerbose() {
    const prm = axios.get(url1)
    // console.log('prm:', prm)
    const prmData = prm.then(res => {
        // console.log('res:', res)
        return res.data
    })
    console.log('prmData:', prmData)
    return prmData
}