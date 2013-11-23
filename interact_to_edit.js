$.fn.interact_to_edit = function(options)
{
    var settings = $.extend
            (
                    {
                        container: document,
                        target: "td",
                        eventtype: "dblclick",
                        revertonEscape: true,
                        revertonBlur: true
                    }, options
                    );
                        
    $.menu = new Object();
    $.menu.i = new Object();
    $.menu.i.selected_node;
    $.menu.i.current_value;
    
    $(settings.container).on(settings.eventtype, settings.target, function()
    {

        //If a cell is already selected, it reverts the value to the
        //the target element and loses focus.Removes class
        if ($("td.selected").size() > 0)
        {
            revertSelectedField();
        }

        if ($("td.selected").size() == 0)
        {

            $(this).addClass("selected");
            $.menu.i.selected_node = $(this);
            var current_value = $(this).text();
            $(this).text("");

            if ($(this).hasClass("date")) {
                $(this).append("<input type='text' class='edit-frame date' value='" + current_value + "'>")
                $("input.date").datepicker({
                    changeMonth: true,
                    changeYear: true,
                    dateFormat: "dd-mm-yy"
                });
            }
            else {
                $(this).append("<input type='text' class='edit-frame' value='" + current_value + "'>")
            }
            $(this).find("input.edit-frame").focus();
            $(this).find("inpu.edit-frame").select();

            $(this).find("input.edit-frame").keypress(function(e)
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

            if (settings.revertonEscape == true) {
                $(this).find("input.edit-frame").keyup(function(e)
                {
                    if (e.which == 27)
                    {
                        revertSelectedField();
                    }
                });
            }

            if (settings.revertonBlur == true)
            {
                $(this).find("input.edit-frame").focusout(function(e)
                {
                    revertSelectedField();
                });
            }
        }
    });
    return false;
};

function revertSelectedField() {
    var new_value = $($.menu.i.selected_node).find("input.edit-frame").val();
    $($.menu.i.selected_node).find("input.edit-frame").remove();
    $($.menu.i.selected_node).text(new_value);
    $($.menu.i.selected_node).removeClass("selected");
}