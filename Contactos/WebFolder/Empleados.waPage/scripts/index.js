
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$("#slider1").hide();
		$("#container2").hide();
		$("#container4").hide();
		$('label[for="slider1"]').hide();
		$("#dataGrid1").hide();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		$("#slider1").show();
		$('label[for="slider1"]').show();
		$("#container2").show();
		$("#container4").show();
		$("#dataGrid1").show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
