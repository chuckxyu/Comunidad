function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : '#B9DEFA'
	});

	return self;
};

module.exports = ApplicationWindow;
