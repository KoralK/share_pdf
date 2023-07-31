window.onload = function() {
    var downloadLink = document.getElementById('downloadLink');
    var pdfLink = "";

    if (pdfLink) {
        downloadLink.href = pdfLink;
    } else {
        downloadLink.textContent = "There is not a sharable pdf currently";
        downloadLink.href = "#";
        downloadLink.style.pointerEvents = "none"; // Disables the link
    }
};
