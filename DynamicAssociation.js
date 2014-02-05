var doc = context.document;

var mySelect = "SELECT LILD_MITTEILUNGEN.lu_nr, LILD_MITTEILUNGEN.mitteilungs_nr, LILD_MITTEILUNGEN.mitteilungsthema, LILD_MITTEILUNGEN.bemerkung FROM @LIDL_MITTEILUNGEN WHERE LILD_MITTEILUNGEN.lu_nr = '";

doc.removeAttribute("DYNAMIC_ASSOCIATION");
doc.addContent("DYNAMIC_ASSOCIATION");
util.out("EQL: " + mySelect + doc.lu_nr); 
doc.setContent("DYNAMIC_ASSOCIATION","QUERY:"+ mySelect + doc.lu_nr + "'");

doc.addAttribute("DYNAMIC_ASSOCIATION",0,"TAB");
doc.setSubValue("DYNAMIC_ASSOCIATION",0,"TAB",0,"Mitteilungen");
