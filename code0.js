gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDFondoAObjects1= [];
gdjs.MenuCode.GDFondoAObjects2= [];
gdjs.MenuCode.GDFondoAObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDLogoObjects3= [];
gdjs.MenuCode.GDMusicButtonObjects1= [];
gdjs.MenuCode.GDMusicButtonObjects2= [];
gdjs.MenuCode.GDMusicButtonObjects3= [];
gdjs.MenuCode.GDBotonJugarObjects1= [];
gdjs.MenuCode.GDBotonJugarObjects2= [];
gdjs.MenuCode.GDBotonJugarObjects3= [];
gdjs.MenuCode.GDInstruccionesObjects1= [];
gdjs.MenuCode.GDInstruccionesObjects2= [];
gdjs.MenuCode.GDInstruccionesObjects3= [];
gdjs.MenuCode.GDNuevoLogoObjects1= [];
gdjs.MenuCode.GDNuevoLogoObjects2= [];
gdjs.MenuCode.GDNuevoLogoObjects3= [];
gdjs.MenuCode.GDcloudoOneObjects1= [];
gdjs.MenuCode.GDcloudoOneObjects2= [];
gdjs.MenuCode.GDcloudoOneObjects3= [];
gdjs.MenuCode.GDSoundButtonObjects1= [];
gdjs.MenuCode.GDSoundButtonObjects2= [];
gdjs.MenuCode.GDSoundButtonObjects3= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBotonJugarObjects1Objects = Hashtable.newFrom({"BotonJugar": gdjs.MenuCode.GDBotonJugarObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDInstruccionesObjects1Objects = Hashtable.newFrom({"Instrucciones": gdjs.MenuCode.GDInstruccionesObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.MenuCode.GDMusicButtonObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDMusicButtonObjects1, gdjs.MenuCode.GDMusicButtonObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMusicButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSoundButtonObjects1Objects = Hashtable.newFrom({"SoundButton": gdjs.MenuCode.GDSoundButtonObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.MenuCode.GDSoundButtonObjects1, gdjs.MenuCode.GDSoundButtonObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundButtonObjects2[i].getBehavior("Animation").setAnimationName("on");
}
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSoundButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSoundButtonObjects1[i].getBehavior("Animation").setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 2);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12591748);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonJugar"), gdjs.MenuCode.GDBotonJugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBotonJugarObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16142764);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jugar", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Instrucciones"), gdjs.MenuCode.GDInstruccionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDInstruccionesObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13349252);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrucciones", false);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "select-sound-121244.mp3", 2, false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "funny-bgm-240795.mp3", 1, true, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.MenuCode.GDMusicButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDMusicButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14153404);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2));
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cloudoOne"), gdjs.MenuCode.GDcloudoOneObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDcloudoOneObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcloudoOneObjects1[i].getBehavior("Opacity").setOpacity(180);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getLayerTimeScale(runtimeScene, "") == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cloudoOne"), gdjs.MenuCode.GDcloudoOneObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDcloudoOneObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDcloudoOneObjects1[i].setYOffset(gdjs.MenuCode.GDcloudoOneObjects1[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(150)));
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.MenuCode.GDSoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDSoundButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(4));
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFondoAObjects1.length = 0;
gdjs.MenuCode.GDFondoAObjects2.length = 0;
gdjs.MenuCode.GDFondoAObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects3.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects3.length = 0;
gdjs.MenuCode.GDBotonJugarObjects1.length = 0;
gdjs.MenuCode.GDBotonJugarObjects2.length = 0;
gdjs.MenuCode.GDBotonJugarObjects3.length = 0;
gdjs.MenuCode.GDInstruccionesObjects1.length = 0;
gdjs.MenuCode.GDInstruccionesObjects2.length = 0;
gdjs.MenuCode.GDInstruccionesObjects3.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects1.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects2.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects3.length = 0;
gdjs.MenuCode.GDcloudoOneObjects1.length = 0;
gdjs.MenuCode.GDcloudoOneObjects2.length = 0;
gdjs.MenuCode.GDcloudoOneObjects3.length = 0;
gdjs.MenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MenuCode.GDSoundButtonObjects2.length = 0;
gdjs.MenuCode.GDSoundButtonObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
gdjs.MenuCode.GDFondoAObjects1.length = 0;
gdjs.MenuCode.GDFondoAObjects2.length = 0;
gdjs.MenuCode.GDFondoAObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects3.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects3.length = 0;
gdjs.MenuCode.GDBotonJugarObjects1.length = 0;
gdjs.MenuCode.GDBotonJugarObjects2.length = 0;
gdjs.MenuCode.GDBotonJugarObjects3.length = 0;
gdjs.MenuCode.GDInstruccionesObjects1.length = 0;
gdjs.MenuCode.GDInstruccionesObjects2.length = 0;
gdjs.MenuCode.GDInstruccionesObjects3.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects1.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects2.length = 0;
gdjs.MenuCode.GDNuevoLogoObjects3.length = 0;
gdjs.MenuCode.GDcloudoOneObjects1.length = 0;
gdjs.MenuCode.GDcloudoOneObjects2.length = 0;
gdjs.MenuCode.GDcloudoOneObjects3.length = 0;
gdjs.MenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MenuCode.GDSoundButtonObjects2.length = 0;
gdjs.MenuCode.GDSoundButtonObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
