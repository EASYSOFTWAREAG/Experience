/*******************************
* Automatische Mitteilungsnummer
*******************************/
var document = context.document;

var dbconnection = new DBConnection("pool", "lidl_stamm", "", "");

var dbresultSet = dbconnection.executeQuery("SELECT Mitteilungsnummer FROM dbo.mitteilungsthemen WHERE Mitteilungsthema = '"+document.mitteilungsthema+"'");

while (dbresultSet.next())
    {
		var temp = dbresultSet.getString(1);
		document.setContent("mitteilungs_nr",temp);
		
	}
dbconnection.close(); 
