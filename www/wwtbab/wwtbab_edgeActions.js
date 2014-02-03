
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_WWTBAE_Logo2}","click",function(sym,e){sym.$("NameEntry").delay(100).fadeIn(400);sym.getSymbol("NameEntry").play();sym.$("GUI").delay(100).fadeIn(400);sym.$("TimeBar").delay(100).fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var stageHeight=sym.$('Stage').height();sym.$("#Stage").css({"transform-origin":"0 0","-ms-transform-origin":"0 0","-webkit-transform-origin":"0 0","-moz-transform-origin":"0 0","-o-transform-origin":"0 0"});function scaleStage(){var stage=sym.$('Stage');var parent=sym.$('Stage').parent();var parentWidth=stage.parent().width();var stageWidth=stage.width();var desiredWidth=Math.round(parentWidth*1);var rescale=(desiredWidth/stageWidth);stage.css('transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');stage.css('-ms-transform','scale('+rescale+')');stage.css('-webkit-transform','scale('+rescale+')');stage.css('-moz-transform','scale('+rescale+')');stage.css('-o-transform','scale('+rescale+')');parent.height(stageHeight*rescale);}
$(window).on('resize',function(){scaleStage();});$(document).ready(function(){scaleStage();});});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){nameEntry="";i=0;score=0;name="";qPoint=100;countdownMSStart=10000;correctCount=0;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_NextArrow01}","click",function(sym,e){if(i==4||i==5||i==7||i==10||i==15||i==18||i==19||i==21||i==29||i==30||i==31||i==32||i==33){sym.$("Slide"+i).fadeOut(400);i++;sym.getSymbol("Slide"+i).play();sym.$("Slide"+i).delay(400).fadeIn(400);sym.$("NextArrow01").fadeOut(400);sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width("100%");q1_rw=0;return i;}
if(i>0){sym.$("Slide"+i).fadeOut(400);i++;sym.getSymbol("Slide"+i).play();sym.$("Slide"+i).delay(400).fadeIn(400);sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width("100%");return i;}else{console.log("Por que?");}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'NextArrow'
(function(symbolName){})("NextArrow");
//Edge symbol end:'NextArrow'

//=========================================================

//Edge symbol: 'text_sym'
(function(symbolName){})("text_sym");
//Edge symbol end:'text_sym'

//=========================================================

//Edge symbol: 'Slide03'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Slide03_Text").html("<ul><li><span style=\"font-size:.8em;margin-top:-20px;\">Regenerative Medicine.</span> <i><span style=\"color:#f4cb28;font-size:0.7em;\">That \
         is, making people heal better and faster!</span</i></li><li><span style=\"font-size:.8em;\">Biomedical Imaging.</span> <i><span style=\"color:#f4cb28;font-size:0.7em;\">That lets Doctors \
         see inside you and tell what's wrong!</span></i></li><li><span style=\"font-size:.8em;\">Rehabilitation Engineering.</span> <i><span style=\"color:#f4cb28;font-size:0.7em;\">They create technology \
         that helps people like our friend on the left here!</span></i></li></ul>");});
//Edge binding end
})("Slide2");
//Edge symbol end:'Slide2'

//=========================================================

//Edge symbol: 'Slide02'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide1");
//Edge symbol end:'Slide1'

//=========================================================

//Edge symbol: 'Slide03_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",78,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_False}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("False").html("B. <span style=\"color:#e6423a;\">False</span>");q1_rw=1;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);return q1_rw;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_True}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("True").html("A. <span style=\"color:#7ae749;\">True</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;sym.getComposition().getStage().$("NextArrow01").fadeIn(400);if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;return score;}else{q1_rw=1;};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
})("Slide16");
//Edge symbol end:'Slide16'

//=========================================================

//Edge symbol: 'Slide04'
(function(symbolName){})("Slide3");
//Edge symbol end:'Slide3'

//=========================================================

//Edge symbol: 'Slide02_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Slide06_Text").html("<ul style=\"font-size:.7em;\"><li>First, organs are grown in the lab or the body itself. \
         </li><li>When the organ is full developed, it is transplanted into people, to treat diseased or injured \
         tissues and organs!</li></ul>");});
//Edge binding end
})("Slide18");
//Edge symbol end:'Slide18'

//=========================================================

//Edge symbol: 'Slide05_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_False}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("False").html("B. <span style=\"color:#e6423a;\">False</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_True}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("True").html("A. <span style=\"color:#7ae749;\">True</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",42,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
})("Slide19");
//Edge symbol end:'Slide19'

//=========================================================

//Edge symbol: 'Slide07_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_False}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("False").html("B. <span style=\"color:#e6423a;\">False</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_True}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("True").html("A. <span style=\"color:#7ae749;\">True</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",34,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
})("Slide20");
//Edge symbol end:'Slide20'

//=========================================================

//Edge symbol: 'Slide06_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide21");
//Edge symbol end:'Slide21'

//=========================================================

//Edge symbol: 'Slide08_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("B").html("B. <span style=\"color:#e6423a;\">Brains</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("A").html("A. <span style=\"color:#e6423a;\">Eyes</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("D").html("D. <span style=\"color:#e6423a;\">All of the above</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("C").html("C. <span style=\"color:#7ae749;\">Bladders</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;sym.$("image17").fadeIn(400);if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
})("Slide22");
//Edge symbol end:'Slide22'

//=========================================================

//Edge symbol: 'Slide09_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide23");
//Edge symbol end:'Slide23'

//=========================================================

//Edge symbol: 'Slide11_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide24");
//Edge symbol end:'Slide24'

//=========================================================

//Edge symbol: 'Slide04_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16,function(sym,e){sym.$("scoreText").html("Score: "+score+" points!!");sym.$("correctText").html("Correct: "+correctCount+" out of 9");console.log(score);console.log(correctCount);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide25");
//Edge symbol end:'Slide25'

//=========================================================

//Edge symbol: 'GUI'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("GUI");
//Edge symbol end:'GUI'

//=========================================================

//Edge symbol: 'SlideVideo'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var element=sym.$("VideoPlayer01");element.html('<video width="720" height="480" src="media/media2.mp4" poster="media/media2.jpg" type="video/mp4" controls="controls"></video>');});
//Edge binding end
})("Slide17");
//Edge symbol end:'Slide17'

//=========================================================

//Edge symbol: 'NameEntry'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10,function(sym,e){sym.$("nameEntry").html("<input name=\"enteredName\" type=\"text\" id=\"enteredName\" value=\"Your Name Here!\" size=\"55\" maxlength=\"20\" onclick=\"this.value=''\"  />");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_OK_Btn}","click",function(sym,e){nameEntry=document.getElementById('enteredName').value;if(nameEntry!="poop"||"hitler"||"Your Name Here!"){name=nameEntry;}else{name="Player 1";};sym.getComposition().getStage().$("NameEntry").fadeOut(400);sym.getComposition().getStage().getSymbol("GUI").$("playerDisplay").html(name);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html("0000");sym.getComposition().getStage().$("WWTBAE_Logo2").fadeOut(400);sym.getComposition().getStage().$("nibib_logo_wide_white").fadeOut(400);sym.getComposition().getStage().$("Slide1").delay(400).fadeIn(400);sym.getComposition().getStage().$("NextArrow01").delay(800).fadeIn(400);sym.getComposition().getStage().$("GUI").delay(400).fadeIn(400);i--;return i;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("NameEntry");
//Edge symbol end:'NameEntry'

//=========================================================

//Edge symbol: 'TimeBar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("TimeBar");
//Edge symbol end:'TimeBar'

//=========================================================

//Edge symbol: 'Slide16_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Slide4_Text").html("<ul style=\"font-size:1em;\"><li>...Have used crutches? \
         </li><li>...Know people who use fake (artificial) legs or arms?</li></ul>");});
//Edge binding end
})("Slide4");
//Edge symbol end:'Slide4'

//=========================================================

//Edge symbol: 'Slide20_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("B").html("B. <span style=\"color:#e6423a;\">Adhesive/Glue</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("A").html("A. <span style=\"color:#e6423a;\">Screws</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("D").html("D. <span style=\"color:#e6423a;\">Magnets</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("C").html("C. <span style=\"color:#7ae749;\">Suction</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
})("Slide5");
//Edge symbol end:'Slide5'

//=========================================================

//Edge symbol: 'Slide5_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("B").html("B. <span style=\"color:#7ae749;\">It doesn't do what I want it to do</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("A").html("A. <span style=\"color:#e6423a;\">It is uncomfortable</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("D").html("D. <span style=\"color:#e6423a;\">It doesn't look real</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("C").html("C. <span style=\"color:#e6423a;\">It is heavy</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
})("Slide6");
//Edge symbol end:'Slide6'

//=========================================================

//Edge symbol: 'Slide15_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var element=sym.$("VideoPlayer01");element.html('<video width="720" height="480" src="media/media4.mp4" poster="media/media4.jpg" type="video/mp4" controls="controls"></video>');});
//Edge binding end
})("Slide7");
//Edge symbol end:'Slide7'

//=========================================================

//Edge symbol: 'Slide6_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("B").html("B. <span style=\"color:#e6423a;\">Lack of exercise</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("A").html("A. <span style=\"color:#e6423a;\">A bone is broken</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("D").html("D. <span style=\"color:#e6423a;\">All of the above</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("C").html("C. <span style=\"color:#7ae749;\">Nerves are damaged</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
})("Slide8");
//Edge symbol end:'Slide8'

//=========================================================

//Edge symbol: 'Slide16_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide9");
//Edge symbol end:'Slide9'

//=========================================================

//Edge symbol: 'Slide9_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide10");
//Edge symbol end:'Slide10'

//=========================================================

//Edge symbol: 'Slide5_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("B").html("B. <span style=\"color:#7ae749;\">Brain</span>");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("A").html("A. <span style=\"color:#e6423a;\">Muscles</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("D").html("D. <span style=\"color:#e6423a;\">Bones</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("C").html("C. <span style=\"color:#e6423a;\">Heart</span>");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
})("Slide11");
//Edge symbol end:'Slide11'

//=========================================================

//Edge symbol: 'Slide10_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide12");
//Edge symbol end:'Slide12'

//=========================================================

//Edge symbol: 'Slide7_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var element=sym.$("VideoPlayer01");element.html('<video width="720" height="480" src="media/media5.mp4" poster="media/media5.jpg" type="video/mp4" controls="controls"></video>');});
//Edge binding end
})("Slide13");
//Edge symbol end:'Slide13'

//=========================================================

//Edge symbol: 'Slide25_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16,function(sym,e){sym.$("scoreText").html("Score: "+score+" points!!");sym.$("correctText").html("Correct: "+correctCount+" out of 4");console.log(score);console.log(correctCount);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
})("Slide14");
//Edge symbol end:'Slide14'

//=========================================================

//Edge symbol: 'Slide3_1'
(function(symbolName){})("Slide15");
//Edge symbol end:'Slide15'

//=========================================================

//Edge symbol: 'Slide15_1'
(function(symbolName){})("Slide26");
//Edge symbol end:'Slide26'

//=========================================================

//Edge symbol: 'Slide4_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Slide4_Text").html("<ul style=\"font-size:.9em;\"><li>...been through a scanner at the airport? \
         </li><li>...looked through a microscope?</li><li>...had an MRI or X-Ray in a hospital?</li></ul>");});
//Edge binding end
})("Slide27");
//Edge symbol end:'Slide27'

//=========================================================

//Edge symbol: 'Slide27_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Slide4_Text").html("<ul style=\"font-size:.8em;\"><li>Stands for Magnetic Resonance Imaging \
         </li><li>Strong magnet and radio waves used to take pictures inside your body</li><li>Can show more detail than an X-Ray</li></ul>");});
//Edge binding end
})("Slide28");
//Edge symbol end:'Slide28'

//=========================================================

//Edge symbol: 'Slide17_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){var element=sym.$("VideoPlayer01");element.html('<video width="720" height="480" src="media/media3.mp4" poster="media/media3.jpg" type="video/mp4" controls="controls"></video>');});
//Edge binding end
})("Slide29");
//Edge symbol end:'Slide29'

//=========================================================

//Edge symbol: 'Slide5_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("A").html("<span style=\"color:#7ae749;\">A.</span>");sym.$("human").fadeIn(400);quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("B").html("<span style=\"color:#e6423a;\">B.</span>");sym.$("dog").fadeIn(400);q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group4}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("C").html("<span style=\"color:#e6423a;\">C.</span>");sym.$("fish").fadeIn(400);q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
})("Slide30");
//Edge symbol end:'Slide30'

//=========================================================

//Edge symbol: 'Slide30_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.$('A').css('left','153px');sym.$('A').css('top','316px');sym.$('C').css('left','153px');sym.$('C').css('top','210px');sym.$('B').css('left','153px');sym.$('B').css('top','422px');sym.$('D').css('left','153px');sym.$('D').css('top','528px');sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","mousedown",function(sym,e){sym.$("image40").droppable({drop:function(){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('A').css('color','#7ae749');quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;console.log('itemScore');if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;}});sym.$('A').css('textShadow','#000000 3px 3px 3px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","mouseup",function(sym,e){sym.$('A').css('textShadow','#FFFFFF 0px 0px 0px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('C').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('B').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('D').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){sym.$("A").draggable({opacity:.5,revert:'invalid'});sym.$("B").draggable({opacity:.5,revert:'invalid'});sym.$("C").draggable({opacity:.5,revert:'invalid'});sym.$("D").draggable({opacity:.5,revert:'invalid'});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","mouseup",function(sym,e){sym.$('D').css('textShadow','#000000 0px 0px 0px');sym.$('D').css('color','#e6423a');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","mouseup",function(sym,e){sym.$('C').css('textShadow','#000000 0px 0px 0px');sym.$('C').css('color','#e6423a');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","mouseup",function(sym,e){sym.$('B').css('textShadow','#000000 0px 0px 0px');sym.$('B').css('color','#e6423a');});
//Edge binding end
})("Slide31");
//Edge symbol end:'Slide31'

//=========================================================

//Edge symbol: 'Slide31_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.$('A').css('left','153px');sym.$('A').css('top','316px');sym.$('C').css('left','153px');sym.$('C').css('top','210px');sym.$('B').css('left','153px');sym.$('B').css('top','422px');sym.$('D').css('left','153px');sym.$('D').css('top','528px');sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('A').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","mousedown",function(sym,e){sym.$("image41").droppable({drop:function(){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('C').css('color','#7ae749');quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;console.log('itemScore');if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;}});sym.$('C').css('textShadow','#000000 3px 3px 3px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('B').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('D').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){sym.$("A").draggable({opacity:.5,revert:'invalid'});sym.$("B").draggable({opacity:.5,revert:'invalid'});sym.$("C").draggable({opacity:.5,revert:'invalid'});sym.$("D").draggable({opacity:.5,revert:'invalid'});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","mouseup",function(sym,e){sym.$('C').css('textShadow','#FFFFFF 0px 0px 0px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","mouseup",function(sym,e){sym.$('A').css('textShadow','#000000 0px 0px 0px');sym.$('A').css('color','#e6423a');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","mouseup",function(sym,e){sym.$('B').css('textShadow','#000000 0px 0px 0px');sym.$('B').css('color','#e6423a');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","mouseup",function(sym,e){sym.$('D').css('textShadow','#000000 0px 0px 0px');sym.$('D').css('color','#e6423a');});
//Edge binding end
})("Slide32");
//Edge symbol end:'Slide32'

//=========================================================

//Edge symbol: 'Slide32_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.$('A').css('left','153px');sym.$('A').css('top','316px');sym.$('C').css('left','153px');sym.$('C').css('top','210px');sym.$('B').css('left','153px');sym.$('B').css('top','422px');sym.$('D').css('left','153px');sym.$('D').css('top','528px');sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('A').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('C').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","mousedown",function(sym,e){sym.$("image42").droppable({drop:function(){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('B').css('color','#7ae749');quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;console.log('itemScore');if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;}});sym.$('C').css('textShadow','#000000 3px 3px 3px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","mousedown",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$('D').css('textShadow','#000000 3px 3px 3px');q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","play",function(sym,e){sym.$("A").draggable({opacity:.5,revert:'invalid'});sym.$("B").draggable({opacity:.5,revert:'invalid'});sym.$("C").draggable({opacity:.5,revert:'invalid'});sym.$("D").draggable({opacity:.5,revert:'invalid'});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","mouseup",function(sym,e){sym.$('B').css('textShadow','#000000 0px 0px 0px');sym.$('B').css('color','#e6423a');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","mouseup",function(sym,e){sym.$('A').css('textShadow','#000000 0px 0px 0px');sym.$('A').css('color','#e6423a');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","mouseup",function(sym,e){sym.$('B').css('textShadow','#000000 0px 0px 0px');sym.$('B').css('color','#e6423a');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","mouseup",function(sym,e){sym.$('D').css('textShadow','#000000 0px 0px 0px');sym.$('D').css('color','#e6423a');});
//Edge binding end
})("Slide33");
//Edge symbol end:'Slide33'

//=========================================================

//Edge symbol: 'Slide11_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){q1_rw=0;});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29,function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").animate({width:0},countdownMSStart);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_B}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("B").css("color","#e6423a");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_A}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("A").css("color","#e6423a");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_D}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("D").css("color","#e6423a");q1_rw++;console.log(q1_rw);sym.getComposition().getStage().$("NextArrow").fadeIn(400);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_C}","click",function(sym,e){sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").stop();sym.$("C").css("color","#7ae749");quick=sym.getComposition().getStage().getSymbol("TimeBar").$("TimerBar").width();stageWidth=sym.getComposition().getStage().$(document).width();prepercent=quick/stageWidth;percent=prepercent.toFixed(2);var itemScore=percent*qPoint;if(q1_rw==0){score=score+itemScore;console.log(score);sym.getComposition().getStage().getSymbol("GUI").$("scoreDisplay").html(score);q1_rw=1;correctCount=correctCount+1;}else{q1_rw=1;};sym.getComposition().getStage().$("NextArrow01").fadeIn(400);return score;});
//Edge binding end
})("Slide34");
//Edge symbol end:'Slide34'

//=========================================================

//Edge symbol: 'Slide14_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("NextArrow01").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16,function(sym,e){sym.$("scoreText").html("Score: "+score+" points!!");sym.$("correctText").html("Correct: "+correctCount+" out of 14");var playername=nameEntry;var score_num=score
var num_correct=correctCount
console.log(playername);console.log(score_num);console.log(num_correct);var db=window.openDatabase("score_db","1.0","Score DB",1024*1024);db.transaction(populateDB,errorCB,successCB);function populateDB(tx){tx.executeSql('DROP TABLE IF EXISTS scores');tx.executeSql('CREATE TABLE IF NOT EXISTS scores (id unique, data)');tx.executeSql('INSERT INTO scores (id, data) VALUES (1, "First row")');tx.executeSql('INSERT INTO scores (id, data) VALUES (2, "Second row")');}
function errorCB(tx,err){alert("Error processing SQL: "+err);}
function successCB(){alert("success!");}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16,function(sym,e){sym.$("scoreText").html("Score: "+score+" points!!");sym.$("correctText").html("Correct: "+correctCount+" out of 4");console.log(score);console.log(correctCount);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_PlayAgain_Btn}","click",function(sym,e){nameEntry="";i=0;score=0;name="";qPoint=100;countdownMSStart=10000;correctCount=0;sym.getComposition().getStage().$("Slide35").hide();sym.getComposition().getStage().$("WWTBAE_Logo2").show();sym.getComposition().getStage().$("nibib_logo_wide_white").show();});
//Edge binding end
})("Slide35");
//Edge symbol end:'Slide35'
})(jQuery,AdobeEdge,"EDGE-724582482");