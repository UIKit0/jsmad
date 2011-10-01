var domReady = function ()
{
    var fileChooser = document.forms['uploadData']['fileChooser'];
    fileChooser.onchange = function(ev) {
        readFile()
    }

    function readFile() {
        var file = fileChooser.files[0];
        console.log("Reading file " + file.name);

        new Mad.FileStream(file, function(stream) {
            var mp3 = new Mad.MP3File(stream);
            console.log("File loaded");
            var mpeg = mp3.getMpegStream();
          
            var howmuch = 1000; 
            console.log("Decoding first " + howmuch + " frames"); 
            var frame = new Mad.Frame();

            for(var i = 0; i < howmuch; i += 1) {
                frame = Mad.Frame.decode(frame, mpeg);
            }
            console.log("Done!");
        });
    }
};
document.addEventListener("DOMContentLoaded", domReady, false);
