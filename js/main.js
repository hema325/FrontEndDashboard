


$(() => {

    let duration = 600;

    $(".nav .sidebar-button").click(() => {
        $(".sidebar").toggle(400, "linear");
    });

    $(".nav .profile-menu").click(function () {
        toggleElement($(this).find("ul"));
    })

    $(".nav .notifications").click(function () {
        toggleElement($(this).find("ul"));
    })

    $(".page .cards .general-info form label input").change(function () {
        if ($(this).val() == "")
            $(this).parent().removeClass("active");
        else
            $(this).parent().addClass("active");
    })

    function toggleElement(item) {
        if (!$(item).hasClass("show-affect"))
            $(".show-affect").removeClass("show-affect");

        $(item).toggleClass("show-affect");
    };
});