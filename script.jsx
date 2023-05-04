var doc = app.activeDocument;
var Iheight = 0;
var topGroup;

var open_file = File.openDialog('', ["Pdf:*.pdf;"]);
open_file.open("r");
open_file.close();
var filePath = open_file.path;
var fileName = open_file.name;
doc.groupItems.createFromFile(File(filePath + '/' + fileName));

var layers = app.activeDocument.layers;

topGroup = layers.getByName('Layer 1').groupItems[0].groupItems[0];


var lastGroup = topGroup.groupItems[topGroup.groupItems.length - 1];
lastGroup.remove();
var groups = topGroup.groupItems;
for (var i = 0; i < groups.length; i++) {
    groups[i].width = 1692;
    groups[i].height = 1260;
    if (groups[i].pathItems.length > 0) {
        groups[i].pathItems[0].remove();
    }
}
if (topGroup.pathItems.length > 0) {
    topGroup.pathItems[0].remove();
}
topGroup.top=(-24); //0.25 inch
topGroup.left=24;
// saveFileToPDF();


// // Saves the current document as PDF to dest with specified options
// // dest contains the full path and file name to save to
// function saveFileToPDF() {
//     var doc = app.activeDocument;

//     if (app.documents.length > 0) {
//         var saveName = new File(filePath + '/result_' + fileName);
//         saveOpts = new PDFSaveOptions();

//         saveOpts.compatibility = PDFCompatibility.ACROBAT5;
//         saveOpts.generateThumbnails = true;
//         saveOpts.preserveEditability = true;

//         doc.saveAs(saveName, saveOpts);
//     }
// }