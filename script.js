window.onload = function() {
    var downloadLink = document.getElementById('downloadLink');
    var pdfLink = "rp.pdf";

    if (pdfLink) {
        downloadLink.href = pdfLink;
        downloadLink.target = "_blank"; // This will open the PDF in a new tab
    } else {
        downloadLink.textContent = "There is not a sharable pdf currently";
        downloadLink.href = "#";
        downloadLink.style.pointerEvents = "none"; // Disables the link
    }
};
