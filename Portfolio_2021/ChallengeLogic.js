//1."Sum of all Fears" Logic 

$("#mathFunc").click(function () {

    var num1 = Number($("#input1").val());
    var num2 = Number($("#input2").val());
    var num3 = Number($("#input3").val());
    var num4 = Number($("#input4").val());
    var num5 = Number($("#input5").val());

    var sum = num1 + num2 + num3 + num4 + num5;
    var smallest = Math.min(num1, num2, num3, num4, num5);
    var largest = Math.max(num1, num2, num3, num4, num5);
    var product = num1 * num2 * num3 * num4 * num5;
    var average = sum / 5;


    $("#sum").text("The sum is " + sum);
    $("#smallest").text("The smallest interger is " + smallest);
    $("#largest").text("The largest interger is " + largest);
    $("#product").text("The product of all is " + product);
    $("#average").text("The average of all is " + average);

});


$("#mathClear").click(function () {

    $("#input1,#input2,#input3,#input4,#input5").val("");

    $("#sum,#smallest,#largest,#product,#average").text("");

})

//2."Palindrome?" Logic 

$("#palinFunc").click(function () {
    let userInput = $("#palinInput").val();

    var modified = userInput.toLowerCase().replace(/\s/g, '');

    for (var index = userInput.length - 1, reverse = ""; index >= 0; index--) {
        reverse += userInput.substr(index, 1);
    }
    displayrevword = reverse;
    reverse = reverse.toLowerCase().replace(/\s/g, '');
    var generate = "";
    if (modified == reverse) {
        generate = `${userInput} is a palindrome.`;
    }
    else {
        generate = `${userInput} is a not palindrome.`;
    }

    $("#palinOutput").text(generate);
    //clear!
    $("#palinClear").click(function () {
        $("#palinInput").val("");
        $("#palinOutput").text("");
    });

});

//3.TD LIST Logic

let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (x) => {
    x.preventDefault()
    createItem(ourField.value)
})

function createItem(y) {
    let ourHTML = `<li>${y}<button onclick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
    ourField.value = ""
    ourField.focus()
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}

//4."Color Fetch" Logic

$("#fruitFetch").click(function () {

    var fruit = $("#inputFruit").val();

    {

        if (fruit == "red") {
            generate = "Look! I found some 🍒!";
        }
        else if (fruit == "yellow") {
            generate = "Pucker up, I brought you a 🍋!";
        }
        else if (fruit == "orange") {
            generate = "Orange you glad I didn't bring you banana? 🍊";
        }
        else if (fruit == "green") {
            generate = "An 🍏 a day keeps the doctor away!";
        }
        else if (fruit == "blue") {
            generate = "Is an Eggplant a fruit? Or...Blue? Here you go anyways...🍆";
        }
        else if (fruit == "purple") {
            generate = "They sure look angry! 🍇";
        }
        else if (fruit == "FRUIT") {
            generate = "PUT A RIPE 🍌 STRAIGHT INTO YOUR FAVORITE 👂";
        }
        else if (fruit == null) {
            generate = "Aww, nothing...";
        }
        $("#fruitOut").text(generate);
    }
})

//5."Fizz+Buzz" Logic

$("#FizzBuzz").click(function () {

    var fizz = Number($("#fizzValue").val());
    var buzz = Number($("#buzzValue").val());
    var result = '';

    for (var i = 1; i <= 100; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
            result += "FizzBuzz, ";
        }
        else if (i % fizz === 0) {
            result += "Fizz, ";
        }
        else if (i % buzz === 0) {
            result += "Buzz, ";
        }
        else {
            result += i + ", ";
        }

    }

    $("#fizzbuzzResult").text(result);
})

//JS Pet Logic???