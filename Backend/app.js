var keysArray = ["username", "noOfFollowers", "platform", "followers"]

$(document).ready(function () {


    $('#myForm').submit(function (e) {
        e.preventDefault()

        var inputs = $('#myForm :input');
        var valuesArray = []

        for (let i = 0; i < inputs.length - 1; i++) {

            valuesArray[i] = inputs[i].value
        }

        var newObject = valuesArray.reduce(function (newObject, field, index) {
            newObject[keysArray[index]] = field;
            return newObject;
        }, {})

        var oldValues = JSON.parse(localStorage.getItem("Data"))

        if (oldValues != null) {
            oldValues = [...oldValues, newObject]
            localStorage.setItem("Data", JSON.stringify(oldValues))
        } else {
            localStorage.setItem("Data", JSON.stringify([newObject]))
        }
        //debugger
        // localStorage.setItem("values", JSON.stringify(inputs))
    });

});