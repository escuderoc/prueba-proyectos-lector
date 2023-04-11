function doGet(){
  var template =  HtmlService.createTemplateFromFile("Index");
  var html = template.evaluate()
  return html
}
function include(filname){
  return HtmlService.createHtmlOutputFromFile(filname).getContent()
}
 
 function busquedaGuiaRemito(guiaInt,guiaNac) {
  let retorno ;
   // coneccion al sheet y a la hoja con las guias
  var libro = SpreadsheetApp.openById('1PKBtMSEb5btGyTlsrQvKWVo4ixrCLRMu_ix3Cg-oI8A')
  var hojaDatos = libro.getSheetByName("BASE");
  var tablaBusqueda = hojaDatos.getRange('A2:C').getValues();

  //funcion para filtra la lista del sheet
  var listaBusqueda = tablaBusqueda.map(function(fila){return fila[1]})

  //busca el indice de la guia internacional
  var indice = listaBusqueda.indexOf(guiaInt);
  console.log("indice "+indice)
  
  if(indice == -1){
      console.log("guia no existe")
      retorno = "NO EXISTE";
      return retorno
  }
  var guiaInternacional = tablaBusqueda[indice][1];
  if(guiaNac == tablaBusqueda[indice][0]){
      console.log('guia nacional coincide desde el servidor')
      retorno = "Validacion OK";
      return retorno;
  }else{
      console.log('guia NO coincide desde el servidor')
      retorno = "Validacion NO OK";
    
      return retorno;
  }
    
  
}

 

