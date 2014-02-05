/*************************************
* Länder
*************************************/
/* connection to database */
var dbconnection = new DBConnection("pool", "lidl_stamm", "", "");
var dbresultSet = dbconnection.executeQuery("SELECT LAND FROM dbo.land");

util.out(dbconnection.getLastError());

/* generate dropdownlist */
var list = new SelectionList();

while (dbresultSet.next())
    {
		var temp = dbresultSet.getString(1);
		list.add(dbresultSet.getString(1));
	}

var docfile = context.document;

docfile.setList("land", list);

dbconnection.close();
