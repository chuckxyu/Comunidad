function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = new Window(L('home')), win2 = new Window(L('settings'));

	var username = Titanium.UI.createTextField({
		color : '#336699',
		top : 110,
		left : 10,
		width : 300,
		height : 60,
		hintText : 'E-mail',
		keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	win1.add(username);
	var password = Titanium.UI.createTextField({
		color : '#336699',
		top : 180,
		left : 10,
		width : 300,
		height : 60,
		hintText : 'Password',
		passwordMask : true,
		keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	win1.add(password);
	var loginBtn = Titanium.UI.createButton({
		title : 'Login',
		top : 250,
		width : 90,
		height : 50,
		borderRadius : 1,
		font : {
			fontFamily : 'Arial',
			fontWeight : 'bold',
			fontSize : 14
		}
	});

	var loginReq = Titanium.Network.createHTTPClient();
	loginBtn.addEventListener('click', function(e) {
		if (username.value != '' && password.value != '') {
			loginReq.open("POST", "http://localhost:8888/post_auth.php");
			var params = {
				username : username.value,
				password : Ti.Utils.md5HexDigest(password.value)
			};
			loginReq.send(params);
		} else {
			alert("Username/Password are required");
		}
	});

	win1.add(loginBtn);

	// 	REGISTRO
	var nombre = Titanium.UI.createTextField({
		color : '#336699',
		top : 110,
		left : 10,
		width : 300,
		height : 60,
		hintText : 'Nombre',
		keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var email = Titanium.UI.createTextField({
		color : '#336699',
		top : 180,
		left : 10,
		width : 300,
		height : 60,
		hintText : 'E-mail',
		keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var passwordReg = Titanium.UI.createTextField({
		color : '#336699',
		top : 250,
		left : 10,
		width : 300,
		height : 60,
		hintText : 'Password',
		passwordMask : true,
		keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
		returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
		borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var registroBtn = Titanium.UI.createButton({
		title : 'Registrar',
		top : 320,
		width : 100,
		height : 50,
		borderRadius : 1,
		font : {
			fontFamily : 'Arial',
			fontWeight : 'bold',
			fontSize : 14
		}
	});
	
	win2.add(passwordReg);
	win2.add(nombre);
	win2.add(email);
	win2.add(registroBtn);

	var tab1 = Ti.UI.createTab({
		title : L('home'),
		icon : '/images/KS_nav_ui.png',
		window : win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title : L('settings'),
		icon : '/images/KS_nav_views.png',
		window : win2
	});
	win2.containingTab = tab2;

	self.addTab(tab1);
	self.addTab(tab2);

	return self;
};

module.exports = ApplicationTabGroup;
