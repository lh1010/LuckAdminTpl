$.validator.setDefaults({
	ignore: [],
	onfocusout: false,
	onkeyup: false,
	onclick: false,
	focusInvalid: false,
	errorLabelContainer: ".form-message", 
	wrapper: "li",
	showErrors:function(errorMap, errorList) {
		this.defaultShowErrors();
		if(errorList.length > 0) {
			$(".form-message").show().delay(1500).hide(300);
		}
	},
})