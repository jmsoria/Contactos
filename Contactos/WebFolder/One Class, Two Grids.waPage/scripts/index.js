
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var slider1 = {};	// @slider
	var limite = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	slider1.slide = function slider1_slide (event)// @startlock
	{// @endlock
		var theLimit = $$("slider1").getValue();
		$$("limite").setValue(theLimit);
		sources.bajoSalario.query("salario < " + theLimit + " order by salario");
		sources.sobreSalario.query("salario >= " + theLimit + " order by salario");
	};// @lock

	limite.keyup = function limite_keyup (event)// @startlock
	{// @endlock
		var theLimit = $$("limite").getValue();
		$$("slider1").setValue(theLimit);
		sources.bajoSalario.query("salario < " + theLimit + " order by salario");
		sources.sobreSalario.query("salario >= " + theLimit + " order by salario");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("slider1", "slide", slider1.slide, "WAF");
	WAF.addListener("limite", "keyup", limite.keyup, "WAF");
// @endregion
};// @endlock
