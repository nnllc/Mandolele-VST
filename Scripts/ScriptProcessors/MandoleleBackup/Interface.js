Content.makeFrontInterface(1000, 600);

//website button

inline function onButton1Control(component, value)
{
	Engine.openWebsite("https://newnationllc.com");
};

Content.getComponent("Button1").setControlCallback(onButton1Control);

//Custom Settings Popup
const var panel1 = Content.addPanel("panel1", 640, 37);

//const var hideShow = Content.addButton("hideShow");
const var hideShow = Content.getComponent("hideShow");

inline function onhideShowControl(number, value)
{
        panel1.showControl(value); 
}

hideShow.setControlCallback(onhideShowControl);function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 