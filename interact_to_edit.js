
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
	$.menu.i.current_value ;
	$(settings.target).on( settings.eventtype , function()
	{	

		//If a cell is already selected, it reverts the value to the
		//the target element and loses focus.Removes class
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
		var current_value = $(this).text();
		$(this).text("");
		$(this).append("<input type='text' class='edit-frame' value='"+current_value+"'>")
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
		$(this).find("input.edit-frame").focusout(function (e) 
		 { 
		   		var new_value = $($.menu.i.selected_node).find("input.edit-frame").val();
				$($.menu.i.selected_node).find("input.edit-frame").remove();
			   	$($.menu.i.selected_node).text(new_value);
			   	$($.menu.i.selected_node).removeClass("selected")  
			
		 });


		}
	});
	

	



	return false;
};