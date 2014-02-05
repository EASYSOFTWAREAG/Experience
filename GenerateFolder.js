var folderName = model.getData("attribute","dummy");
var temp;
//application.messageBox("folderName",folderName);

application.setRemoteScriptParameter("var.Trigger", folderName);
application.runRemoteScript("Default", "dina/test.js");
temp = application.getRemoteScriptResult("check");

application.messageBox("Ergebniss", temp);
