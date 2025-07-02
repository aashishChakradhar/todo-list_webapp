const author = `Aashish Chakradhar`;
const year = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
    getFooterDetail();
});

function getFooterDetail(){
    $("footer").html(`&copy; ${year} ${author}. All rights reserved.`)
}