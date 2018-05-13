const FriendFinder = function () {
    function init() {
        initEventHandlers();
    }

    function initEventHandlers()  {
        $("#match").on("click", function() {

            var surveyResult = $("#survey").serialize();

            $.post("/api/friendFinder", surveyResult, function(data) {

                $("#friendName").text(data.name);
                $("#friendImage").attr("src", data.photo);
                $("#modal").modal("show");

            });

        });
    }

    return {
        init: init
    };
}();

$(function () {
    FriendFinder.init();
});