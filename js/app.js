const closer = document.querySelector("#closer");
const search = document.querySelector("#searchInput");
const tooltip = document.querySelector("#tooltip");

setInterval(() => {
    if (search.value.length >= 1) {
        closer.style.display = "block";
    } else if (search.value.length == 0) {
        closer.style.display = "none";
    }
}, 200);

closer.addEventListener("click", function () {
    search.value = "";
    search.focus();
});

closer.addEventListener("mouseover", function () {
    tooltip.style.display = "flex";
});

closer.addEventListener("mouseleave", function () {
    tooltip.style.display = "none";
});
