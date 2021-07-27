function getLastUpdatedDate() {
    $("#lastModified").textContent = "Last updated: " + document.lastModified.substr(0, 10);
}
