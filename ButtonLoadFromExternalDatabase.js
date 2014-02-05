var ProjektIDtemp = model.getData("form","Projekt");
application.out(ProjektIDtemp);

// ---------
var dlgTitle = "nls:de=Auswahl des Vorgangs,en=Select activity";
var dlgHeight = 400;
var externalDatabase = "FSCONNECT";
var fieldHeaders = "nls:de=Vorgangsname.,en=Activity name.;nls:de=VorgangsNr,en=Activity No.;nls:de=Partner,en=Partner;nls:de=PartnerId,en=PartnerId;nls:de=Projektname,en=Project name;nls:de=ProjektId,en=Project Id;nls:de=Partnertyp,en=Partner type;";
var columnWidth = "200;100;80;80;80;80;80";
var columnAlign = "0;0;0;0;0;0;0";
var columnSortOrder = "0;1;0;0;0;0";
var searchfield = "nls:de=Suche nach PartnerID:,en=Search for PartnerID:";
var query = "SELECT  dbo.fs_Vorgaenge.Vorgangsname, dbo.fs_Vorgaenge.VorgangsNr, dbo.fs_Partner.Partner, dbo.fs_Partner.PartnerId, dbo.fs_Projekte.Projektname, dbo.fs_Projekte.Projekt, dbo.fs_Partner.PartnerTyp FROM dbo.fs_Vorgaenge INNER JOIN dbo.fs_Projekte ON dbo.fs_Vorgaenge.Projekt = dbo.fs_Projekte.Projekt INNER JOIN dbo.fs_Partner ON dbo.fs_Projekte.Partner = dbo.fs_Partner.PartnerId WHERE dbo.fs_partner.PartnerId LIKE '$$$%'";
var emptyQuery = "SELECT  dbo.fs_Vorgaenge.Vorgangsname, dbo.fs_Vorgaenge.VorgangsNr, dbo.fs_Partner.Partner, dbo.fs_Partner.PartnerId, dbo.fs_Projekte.Projektname, dbo.fs_Projekte.Projekt, dbo.fs_Partner.PartnerTyp FROM dbo.fs_Vorgaenge INNER JOIN dbo.fs_Projekte ON dbo.fs_Vorgaenge.Projekt = dbo.fs_Projekte.Projekt INNER JOIN dbo.fs_Partner ON dbo.fs_Projekte.Partner = dbo.fs_Partner.PartnerId";
var dbResult = application.showQueryDialog(dlgTitle, externalDatabase, fieldHeaders,columnWidth, columnAlign, columnSortOrder, searchfield,query, emptyQuery, dlgHeight);

if (dbResult != null)  {
   model.setData("form", "Vorgangsname", dbResult[0]);
   model.setData("form", "VorgangsNr", dbResult[1]);   
   model.setData("form", "Partner", dbResult[2]);
   model.setData("form", "PartnerID", dbResult[3]);   
   model.setData("form", "Projektname", dbResult[4]);
   model.setData("form", "Projekt", dbResult[5]);
   model.setData("form", "PartnerTyp", dbResult[6]);
      
 }
