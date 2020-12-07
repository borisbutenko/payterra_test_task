// Waing for document to be fully load before executing scripts
document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
        document.getElementsByTagName("BODY")[0].setAttribute("id", "app");
    }
});