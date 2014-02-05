var dev = context.getVar("Trigger");
var path = "C:/TEST/"+dev;

var success = util.removeFile("C:/TEST/"+dev);

if(success = true)
{
    util.mkDir("C:/TEST/"+dev);
}

else
{
	util.mkDir("C:/TEST/"+dev);
}

var result = "Der Ordner " + dev + " wurde erfolgreich erstellt";
context.setVar("check", result);
