$(function() {
    $(".change-own").on("click", function(event) {
        var id = $(this).data("id");
        var newFigure = $(this).data("newFigure");

        var ownership = {
            own: newFigure
        };

        $.ajax("/api/wh40k" + id, {
            type: "PUT",
            data: ownership
        }).then(function() {
            console.log("Changed own to ", newFigure);

            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newModel = {
            figure_name: $("#ca").val().trim(),
            faction: $("#fa").val().trim(),
            role: $("#rl").val().trim(),
            own: $("[name=own]:checked").val().trim()
        };

        console.log(newModel)

        $.ajax("/api/wh40k", {
            type: "POST",
            data: newModel
        }).then(function() {
            console.log("New Model Added");

            location.reload();
        });
    });
});