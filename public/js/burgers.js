$(function () {
    $(".devour").on("click", function (e) {
        var id = $(this).attr("data-id")
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            console.log("Burger devoured!")
            location.reload()
        })
    });

    $(".create-form").on("submit", function (e) {
        e.preventDefault();
        var burg = $("#burg").val();
        var data = {burg}

        $.ajax("/api/burgers/", {
            method: "POST",
            data: data
        })
        .then(function () {
            console.log("Burger added!")
            location.reload()
        })
        .catch(function (err) {
            if(err){
                throw err;
            }
        })
    })

});