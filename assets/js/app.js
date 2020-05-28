// Check Off Specific Todos By Clicking
$("li").click(function() {
	$(this).toggleClass("completed");
});

// Click on X to delete the Todo
$("span").click(function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});