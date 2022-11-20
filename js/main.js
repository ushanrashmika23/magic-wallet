console.log("a");
let sideNavOpen = 0;
$(document).ready(function() {
    $("#content").click(function() {
        $("#nav-sw-icon").removeClass("fa-times");
        $("#nav-sw-icon").addClass("fa-bars");
        sideNavOpen = 0;
        $(".icon label").hide(200);
    });
    $("#nav-sw-icon").click(function() {
        if (sideNavOpen == 0) {
            $("#nav-sw-icon").removeClass("fa-bars");
            $("#nav-sw-icon").addClass("fa-times");
            $(".icon label").show(200);
            sideNavOpen = 1;
        } else {
            $("#nav-sw-icon").removeClass("fa-times");
            $("#nav-sw-icon").addClass("fa-bars");
            sideNavOpen = 0;
            $(".icon label").hide(200);
        }
    });
});

function changeView(show, hide) {
    let item = document.querySelectorAll(show);
    for (let i = 0; i < item.length; i++) {
        item[i].classList.remove("show");
        item[i].classList.add("hide");
    }
    document.getElementById(hide).classList.add("show");
}