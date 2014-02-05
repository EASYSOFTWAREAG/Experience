var q1 = "select Literaturarchiv_autoren.name from @Autoren where Literaturarchiv_autoren.name !=''";

var array = application.showViewQueryDialog("Autoren auswahl: ","Autor","100","0","1",null,null,q1,300);
if (array){
model.setData("form","name",array[0]);
}

