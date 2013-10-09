
	$.fn.interact_to_edit = function(options)
	{
		var settings = $.extend
		(
			{
				target :"td",
				eventtype : "dblclick"
			}, options
		);

		var selected_node ;

		$(settings.target).on( settings.eventtype , function()
		{	
			// console.log("Double Clicked on the target node")
			var selected_node = $(this);
			var selected_node_value = $(this).text();
			// console.log("Value of selected node captured :  "+ selected_node_value);
			$(this).text("");
			$(this).append("<input type='text' class='edit-frame' value='"+selected_node_value+"'>")
			
			$(this).find("input.edit-frame").keypress(function (e) 
			 { 
			 	
				if (e.which == 13) 
				{
					console.log($(this));
			   		var new_value = $(this).val();
			   		// console.log("new value :" + new_value);
			   		$(this).remove();
			   		$(selected_node).text(new_value);
			    	return false;    
				}
			 });
		});

		



		return this;
	};
	

	

