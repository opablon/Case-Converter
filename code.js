let upperCase = document.getElementById("upper-case");
let lowerCase = document.getElementById("lower-case");
let properCase = document.getElementById("proper-case");
let sentenceCase = document.getElementById("sentence-case");
let saveButton = document.getElementById("save-text-file");


upperCase.addEventListener("click", function() {
    let textArea = document.getElementById("text-area").value;
    document.getElementById("text-area").value = textArea.toUpperCase();
});

lowerCase.addEventListener("click", function() {
    let textArea = document.getElementById("text-area").value;
    document.getElementById("text-area").value = textArea.toLowerCase();
});

properCase.addEventListener("click", function() {
    let textArea = document.getElementById("text-area").value;
    document.getElementById("text-area").value = getProperCase(textArea);
});

sentenceCase.addEventListener("click", function() {
    let textArea = document.getElementById("text-area").value;
    document.getElementById("text-area").value = getSentenceCase(textArea);
});

saveButton.addEventListener("click", function() {
    let textArea = document.getElementById("text-area").value;
    let filename = "text.txt";
    document.getElementById("text-area").value = download(filename, textArea);
});

function getProperCase(str) {
    return str.replace(
        /\w\S*/g,
        function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
    );
}

function getSentenceCase(str) {
    str = str.toLowerCase();
    return str.replace(
        /(^\s*\w|[\.\!\?]\s*\w)/g,
        function (str) {
            return str.toUpperCase();
        }
    );
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
