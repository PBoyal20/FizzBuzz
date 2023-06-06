document.addEventListener("DOMContentLoaded", function() {
    var fizzbuzzForm = document.getElementById("fizzbuzzForm");
    fizzbuzzForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        var startInput = document.getElementById("start");
        var endInput = document.getElementById("end");
        var fizzInput = document.getElementById("fizz");
        var buzzInput = document.getElementById("buzz");

        // Set the default values
        startInput.value = startInput.value || 1;
        endInput.value = endInput.value || 100; 
        fizzInput.value = fizzInput.value || 3;
        buzzInput.value = buzzInput.value || 5;
        
        var startNumber = parseInt(document.getElementById("start").value);
        var endNumber = parseInt(document.getElementById("end").value);
        var fizzNumber = parseInt(document.getElementById("fizz").value);
        var buzzNumber = parseInt(document.getElementById("buzz").value);
        var result = document.getElementById("result");

        // Clear previous results
        result.innerHTML = "";

        // Perform FizzBuzz calculations and display results
        for (var i = startNumber; i <= endNumber; i++) {
            var output = "";
            if (i % fizzNumber === 0) {
                output += "Fizz";
            }
            if (i % buzzNumber === 0) {
                output += "Buzz";
            }
            if (output === "") {
                output = i;
            }
            result.innerHTML += "<p>" + output + "</p>";
        }
    });
});
