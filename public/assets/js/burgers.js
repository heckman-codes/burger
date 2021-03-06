$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devour = $(this).data("devour");

        var devouredState = {
            devour: 1
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function () {
                console.log("Successfully devoured ", devour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devour = $(this).data("devour");

        var idNumber = {
            id,
        };

        console.log(idNumber);

        $.ajax("/api/burger/delete/" + id, {
            type: "POST",
            url: "/api/burger/delete/" + id,
            data: idNumber
        }).then(
            function () {
                console.log("Successfully devoured ", devour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".submit").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger: $("#burger-input").val().trim().toString()
        };

        console.log(newBurger);

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Successfully created a new burger");
                location.reload();
            }
        );
    });
});
