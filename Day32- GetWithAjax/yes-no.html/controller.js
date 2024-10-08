'use strict'


$(document).ready(function () {
    let debounceTimeout

    $('#askBtn').click(onAsk)

    $('#question').on('input', function () {
        clearTimeout(debounceTimeout)
        //^ I believe the setTimeout is wrong Because it does on every letter
        debounceTimeout = setTimeout(() => {
            validateInput()
        }, 300) 
        //* 300ms delay 
    })

    function onAsk() {
        const question = $('#question').val().trim()

        if (validateInput()) {
            hideAns()
            getYesNoAnswer(renderAns)
        } else {
            alert('Please ask a valid Yes/No question.')
        }
    }

    function validateInput() {
        const question = $('#question').val().trim()
       //! letter range
        const regex = /.{3,}\?$/
        return regex.test(question)  
    }

    function renderAns(ans) {
        $('.answer h2').text(ans.answer)
        $('.answer img').attr('src', ans.image)

        //* Show the answer
        showAns()  

       
        if (ans.answer === 'yes') {
            fetchJoke()
        } else if (ans.answer === 'no') {
            fetchRandomDog()
        }
    }

    function getYesNoAnswer(callback) {
        $.ajax({
            url: "https://yesno.wtf/api",
            method: 'GET',
            success: function (response) {
                callback(response)
            },
            
            error: function () {
                alert("Something went wrong. Try again.")
            }
        })
    }

    function fetchJoke() {
        $.ajax({
            url: "https://official-joke-api.appspot.com/random_joke",
            method: "GET",
            success: function (joke) {
                $('.extra').removeClass('hidden')
                $('.extra-content').text(`${joke.setup} - ${joke.punchline}`)
            },
            error: function () {
                alert("Failed to fetch a joke.")
            }
        })
    }

    function fetchRandomDog() {
        $.ajax({
            url: "https://dog.ceo/api/breeds/image/random",
            method: 'GET',
            success: function (dog) {
                $('.extra').removeClass('hidden')
                $('.extra-content').html(`<img src="${dog.message}" alt="Random Dog" style="width:300px height:300px">`)
            },
            error: function () {
                alert("Failed to fetch a random dog.")
            }
        })
    }

    function showAns() {
        $('.answer').removeClass('hidden')
        $('.loader').addClass('hidden')
    }

    function hideAns() {
        $('.answer').addClass('hidden')
        $('.loader').removeClass('hidden')
    }
})
