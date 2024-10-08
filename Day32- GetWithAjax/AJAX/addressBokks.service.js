'use strict'


function loadDataStore() {
    return JSON.parse(localStorage.getItem('data')) || {}
  }
  function saveData() {
    getData((data) => { 
      localStorage.setItem("data", JSON.stringify(data))
    })
  }
  
  function getData(cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xhr.responseText) 
        cb(data) 
      }
    }
    xhr.open("GET", "http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true", true) 
    xhr.send() 
  }
  