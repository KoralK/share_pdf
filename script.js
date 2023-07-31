window.onload = function() {
    var downloadLink = document.getElementById('downloadLink');
    var pdfLink = "https://drive.google.com/uc?id=1VGsW9UYs8X73WhEuz6JSuhFK8sccuS_6";

    if (pdfLink) {
        downloadLink.href = pdfLink;
    } else {
        downloadLink.textContent = "There is not a sharable pdf currently";
        downloadLink.href = "#";
        downloadLink.style.pointerEvents = "none"; // Disables the link
    }
};
