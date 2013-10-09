Interact_to_edit (How it came into being)
================
Initially , my challange was to have some interactive method to edit the Table cell in an Web Application, without opening 
without opening any dialogue or popup, and that is very easy and intuitively in use. So I came up with an idea of "Double 
clicking" over the desired Table cell or HTML node to edit it. Then I started looking into and developing this small 
script. In beginning I thought of naming this script "Double Click to Edit", then I thought why not make it flexible so 
that I can apply it on any other desired event too. So I named it "Interact to Edit".

How It works
================
The function take 2 parameters, Target(HTML node) and Trigger Event(When to call function). (Target Html node can be any node,
 but for initial versions of this script , this is only working for nodes with text content. )
Trigger Event can be Double click , Click , or Hover etc.

The script creates a input text field as a child of the Target HTML Node and fill it with the existing value of the node and 
then hand over focus to the input field. After changing the value in the input field and hitting Enter Key ,input field is 
deleted and the new value is put into the Target HTML Node.