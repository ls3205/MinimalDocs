function upload() {    
    var file = document.getElementById('uploadFile').files[0];
    
    var reader = new FileReader();
    reader.onload = function(e) {
        var textarea = document.querySelector("textarea");
        textarea.value = e.target.result;
    };
    
    reader.readAsText(file);
}