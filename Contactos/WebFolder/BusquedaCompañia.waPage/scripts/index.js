
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField3 = {};	// @textField
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	textField3.keyup = function textField3_keyup (event)// @startlock
	{// @endlock
		mostrar($("#textField3").val());
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		mostrar(queryStr);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField3", "keyup", textField3.keyup, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
function mostrar(valor){
	sources.compañia.query('nombreCompañia = :1 order by nombreCompañia', {params : [valor + '*']});
}