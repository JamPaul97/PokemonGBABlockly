//get a unique name for a sub function for the scripts to use
var sub = 0;
var additionalContext = "";


var WritingInDecimals = true;

var toogleWritingInDecimals = function(button){
    WritingInDecimals = document.getElementById("js").checked;
    console.log(WritingInDecimals);
}
function GetSubName()
{
  var result = "@sub" + sub;
  sub++;
  return result;
}

var byteValidator = function(value){
    var number;
    if(WritingInDecimals)
    {
        number = parseInt(value);
    }
    else
    {
        number = parseInt(value, 16);
    }
    if(isNaN(number))
    {
        alert("The given value  \"" + value + "\"   is not a byte");
        return 0;
    }
    if(number > 255)
    {
        alert("The given value  \"" + value +  "\"   is larger than a single byte");
        return 0;
    }
    if(WritingInDecimals)
    {
        return number;
    }
    return value;
}
var wordValidator = function(value){
    var number;
    if(WritingInDecimals)
    {
        number = parseInt(value);
    }
    else{
        number = parseInt(value, 16);
    }
    if(isNaN(number))
    {
        alert("The given value  \"" + value + "\"   is not a WORD");
        return 0;
    }
    if( number > 65535)
    {
        alert("The given value  \"" + value +  "\"   is larger than two byte's maximum value : 65535");
        return 65535;
    }
    if(WritingInDecimals)
    {
        return number;
    }
    return value;
}
var dwordValidator = function(value){
    var number;
    if(WritingInDecimals)
    {
        number = parseInt(value);
    }
    else{
        number = parseInt(value, 16);
    }
    if(isNaN(number))
    {
        alert("The given value  \"" + value + "\"   is not a dword");
        return 0;
    }
    if( number > 4294967295)
    {
        alert("The given value  \"" + value +  "\"   is larger than four bytes's maximum value : ‭4294967295‬");
        return 4294967295;
    }
    if(WritingInDecimals)
    {
        return number;
    }
    return value;
}
var sixByteValidator = function(value){
    var number;
    if(WritingInDecimals)
    {
        number = parseInt(value);
    }
    else{
        number = parseInt(value, 16);
    }
     
    if(isNaN(number))
    {
        alert("The given value  \"" + value + "\"   is not a six byte word");
        return 0;
    }
    if( number > 281474976710655)
    {
        alert("The given value  \"" + value +  "\"   is larger than six bytes's maximum value : 281474976710655");
        return 281474976710655;
    }
    if(WritingInDecimals)
    {
        return number;
    }
    return value;
}




function runCode()
{
    sub = 0;
    additionalContext = "";
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    code += "\n"  + additionalContext;
    //runCode(code);
    console.log(code);
}
function FormatVariable(value)
{
    var result = value.replace('(','');
    result = result.replace(')','');
    return result;
}


function saveWorkspace() {
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    
    localStorage.setItem("blockly.xml", xmlText);
}

function loadWorkspace() {
    var xmlText = localStorage.getItem("blockly.xml");
    if (xmlText) {
        Blockly.mainWorkspace.clear();
        xmlDom = Blockly.Xml.textToDom(xmlText);
        Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
    }
}
function downloadWorkspace(filename) {
    saveWorkspace();
    var xmlText = localStorage.getItem("blockly.xml");
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xmlText));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }



  function readBlob(opt_startByte, opt_stopByte) {

    var files = document.getElementById('files').files;
    if (!files.length) {
      alert('Please select a file!');
      return;
    }

    var file = files[0];
    var start = parseInt(opt_startByte) || 0;
    var stop = parseInt(opt_stopByte) || file.size - 1;

    var reader = new FileReader();

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { // DONE == 2
        document.getElementById('byte_content').textContent = evt.target.result;
        document.getElementById('byte_range').textContent = 
            ['Read bytes: ', start + 1, ' - ', stop + 1,
             ' of ', file.size, ' byte file'].join('');
      }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
  }

  function readFile()
  {
    var startByte = evt.target.getAttribute('data-startbyte');
    var endByte = evt.target.getAttribute('data-endbyte');
    readBlob(startByte, endByte);
  }