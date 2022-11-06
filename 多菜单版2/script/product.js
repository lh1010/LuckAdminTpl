$("select[name='freight']").change(function() {
	if ($(this).val() == 1) $(".select-freight").hide();
	if ($(this).val() == 2) $(".select-freight").show();
})
