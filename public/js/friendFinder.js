const FriendFinder = function () {
    function init() {
        initEventHandlers();
    }

    function initEventHandlers()  {
        $("#match").on("click", function() {

            var surveyResult = $("#survey").serialize();
            clearForm();

            $.post("/api/friendFinder", surveyResult, function(data) {

                $("#friendName").text(data.name);
                $("#friendImage").attr("src", data.photo);
                $("#modal").modal("show");

            });

        });
    }

    function clearForm() {
        $("#name").val("");
        $("#photo").val("");
        $("input[name=q1]").prop("checked", false);
        $("input[name=q2]").prop("checked", false);
        $("input[name=q3]").prop("checked", false);
        $("input[name=q4]").prop("checked", false);
        $("input[name=q5]").prop("checked", false);
        $("input[name=q6]").prop("checked", false);
        $("input[name=q7]").prop("checked", false);
        $("input[name=q8]").prop("checked", false);
        $("input[name=q9]").prop("checked", false);
        $("input[name=q10]").prop("checked", false);
    }

    return {
        init: init
    };
}();

$(function () {
    FriendFinder.init();
});