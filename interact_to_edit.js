
$.fn.interact_to_edit = function(options)
{
	var settings = $.extend
	(
		{
			target		: 	"td",
			eventtype 	: 	"dblclick"
		}, 	options
	);
	
	$.menu 		= new Object();
	$.menu.i 	= new Object();
	$.menu.i.selected_node ;
	$(settings.target).on( settings.eventtype , function()
	{	
		if( $( "td.selected" ).size() > 0 )
		{
			var new_value = $($.menu.i.selected_node).find("input.edit-frame").val();
			$($.menu.i.selected_node).find("input.edit-frame").remove();
		   	$($.menu.i.selected_node).text(new_value);
		   	$($.menu.i.selected_node).removeClass("selected")
		}
		if($("td.selected").size() == 0)
		{
		$(this).addClass("selected");
		$.menu.i.selected_node = $(this);
		var selected_node_value = $(this).text();
		$(this).text("");
		$(this).append("<input type='text' class='edit-frame' value='"+selected_node_value+"'>")
		$(this).find("input.edit-frame").focus();
		$(this).find("inpu.edit-frame").select();
		$(this).find("input.edit-frame").keypress(function (e) 
		 { 
			if (e.which == 13) 
			{
		   		var new_value = $(this).val();
		   		// console.log("new value :" + new_value);
		   		$(this).remove();
		   		$($.menu.i.selected_node).text(new_value);
		    	return false;    
			}
		 });
		}
	});
	

	



	return false;
};