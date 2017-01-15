// ==UserScript==
// @name        EdX DevOps course
// @namespace   fresh
// @description show transcripts better
// @include     https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS161x+2T2016/courseware/*
// @version     1
// @grant       none
// ==/UserScript==

var $ = unsafeWindow.jQuery;  // use EdX provided jQuery

function doit() {

	//div class=video-wrapper remove:float
	$('div.video-wrapper').css("float", "none");
	
	// widen the transcript window 
	$('div[id^="transcript"]').css('width', '100%');
	
	// remove transcript header
	$('ol#transcript-captions > li.spacing').remove();
	
	// make transcript more readable
	$("#transcript-captions > li > span").css('color', 'black');
		
};

$(function() {
	// we have to wait a while of the additional resources to load in then, we can mess with them
	setTimeout(doit, 3000);
});
