function getInputsByValue()
{
    var allInputs = document.getElementsByTagName("script");
    var results = [];

    for(var x=0;x<allInputs.length;x++) {
        var scriptElement = allInputs[x].textContent;
        const scriptContent = scriptElement;
        
        const lineIndex = scriptContent.indexOf('XPSYS(');
        
        if (lineIndex !== -1) {
          const lineEndIndex = scriptContent.indexOf('\n', lineIndex);
          const line = scriptContent.substring(lineIndex, lineEndIndex ? lineEndIndex : scriptContent.length);
          return stripKey(line);
        }
    }
    
    return("");
}

function stripKey(str) {
  var strippedStr = str.substring(7, str.length-3);
  
  return strippedStr;
}

function decrypt(str) {
  var val = window.atob(str);
  val = decodeURIComponent(val);
  
  return val;
}

window.open(decrypt(getInputsByValue()), "Download");
window.location = "_blank";
