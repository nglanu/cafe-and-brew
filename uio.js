
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let section = document.querySelector(this.getAttribute("href"));
            window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
        });
    });
});

// Google Maps Embed
let map = document.getElementById("map");
map.innerHTML = `<iframe width="100%" height="300" src="https://maps.google.com/maps?q=Viraj%20Khand-1,%20Gomti%20Nagar,%20Lucknow,%20226028&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></

iframe>`;
