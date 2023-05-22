var data = JSON.parse(localStorage.getItem("Data"))

$(document).ready(function () {

    for (let i = 0; i < data.length; i++) {
        var col = $("<div class='col-md-3 text-center p-3'></div>")
        var card = $("<div class='my-custom-card card-light toggle-card-theme'></div>")
        var usernameSection = $("<div class='d-flex justify-content-center align-items-center'></div>")
        var username = $(`<h1 class='username ms-1 toggle-text text-dark'>${data[i].username}</h1>`)
        var noOfFollowers = $(`<h2 class='no-of-followers text-dark toggle-text'>${data[i].noOfFollowers}</h2>`)
        var followers = $(`<h3 class='followers mt-3'>${data[i].followers}</h3>`)
        var todaySection = $("<div class='d-flex justify-content-center'></div>")
        var caretUp = $("<i class='fa-solid fa-caret-up' style='color: #59c7aa;'></i>")
        var today = $("<h4 class='today'>12 today</h4>")
        if (data[i].platform == "facebook") {
            var facebookIcon = $("<i class='fa-brands fa-square-facebook' style='color: #1791f7;'></i>")
            $(card).css("border-color", "#1791f7")
            usernameSection.append(facebookIcon);
        } else if (data[i].platform == "twitter") {
            var twitterIcon = $("<i class='fa-brands fa-twitter' style='color: #1791f7;'></i>")
            $(card).css("border-color", "#1791f7")
            usernameSection.append(twitterIcon);
        } else if (data[i].platform == "youtube") {
            var youtubeIcon = $("<i class='fa-brands fa-youtube' style='color: #ff0000;'></i>")
            $(card).css("border-color", "#ff0000")
            usernameSection.append(youtubeIcon);
        } else if (data[i].platform == "instagram") {
            var instagramIcon = $("<i class='fa-brands fa-instagram' style='color: #fe8a06;'></i>")
            $(card).removeClass("my-custom-card").addClass("my-custom-instagram-card-light").addClass("toggle-card-theme-insta").removeClass("card-light")
            usernameSection.append(instagramIcon);
        }
        usernameSection.append(username)
        todaySection.append(caretUp, today)
        $(col).append(card.append(usernameSection).append(noOfFollowers).append(followers).append(todaySection))
        $(".rendered-cards").append(col)
    }

    $("#flexSwitchCheckChecked").on("change", function () {

        $(".toggle-card-theme").toggleClass("card-light").toggleClass("card-dark")
        $(".toggle-card-theme-insta").toggleClass("my-custom-instagram-card-light").toggleClass("my-custom-instagram-card-dark")
        $(".toggle-text").toggleClass("text-dark").toggleClass("text-light")
        $(".toggle-upper-theme").toggleClass("upper-light-theme").toggleClass("upper-dark-theme")
        $(".toggle-body").toggleClass("dark-body").toggleClass("bg-white")
        $(".toggle-satic-card").toggleClass("my-custom-card-2-light").toggleClass("my-custom-card-2-dark")
        $(".toggle-title-2").toggleClass("text-white").toggleClass("text-secondary")

    })







});