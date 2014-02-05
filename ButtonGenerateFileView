//Set messagetyp
var typ = "Food EM";
var lu_nr = model.getData("attribute","lu_nr");
var lf_name = model.getData("attribute","lf_name");
var lf_nr = model.getData("attribute","lf_nr");
var land = model.getData("attribute","land");

if (lu_nr.equals("")) {
    	application.messageBox("Stammdaten", "LÜ-Nr. fehlt !");
		}
 else {
			// create new document
			var docmodel = application.createModel("AddDisplay", "LIDL_MITTEILUNGEN", "LILD_MITTEILUNGEN");
			// fill fields
			docmodel.setData("attribute", "lu_nr", lu_nr);
			docmodel.setData("attribute", "lf_name_alt", lf_name);
			docmodel.setData("attribute", "lf_nr_alt",  lf_nr);
			docmodel.setData("attribute", "land", land);
			docmodel.setData("attribute", "mitteilungstyp", typ);
			}
