/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name":"changjie" ,
	"welcomeMessage":"",
	"age":"26",
	"role":"Web Developer",
	"contacts":{
		"mobile":"15810846033",
		"email":"672194800@qq.com",
		"github":"jieerkitty",
		"location":"beijing"
	},
	"skills":["css","h5","js","jquery"],
	"biopic":"images/psu.jpg"

}; 
var work = {
	"position":"beijing",
	"year":"two",
	"jobs":[
		{
			"employer":"医视文化（北京）有限公司",
			"title":"WEB前端工程师",
			"location":"北京",
			"dates":"2015",
			"description":"根据UI的设计图进行页面制作，实现静态页面交互效果；和后端工程师及产品经理一起实现系统和功能，改进用户体验和设计，优化产品前端兼容性和性能；完成公司安排的其他相关事项。"
		}
	]
}
var projects = {
	"projects":[
		{
			"title":"未来网的重构",
			"dates":"2015.06---2015.11",
			"description":"项目分为会员登录和会馆登录模块，帮助会员领取积分，置换店铺，实名认证等一系列操作。帮助会馆进行讲师的课程安排，店铺置换等任务。 注册用户达到百万以上。在本项目中负责页面的搭建，搭建过程中使用了bootstrap框架和一些css3的动态效果，使用ajax进行前后端交互。",
			"images":["images/1.jpg"]
		},
		{
			"title":"医视文化官网",
			"dates":"2015.11---2015.12",
			"description":"官方展示网站，主要用来扩大公司知名度，展示企业文化，介绍团队成员，属于标准的单页展示型网站。本项目自己独立完成，用到了轮播图插件，锚点跳转，有翻滚展示。",
			"images":["images/2.png"]	
		}
	]
}
var education = {
	"schools":[
		{
			"name":"河北农业大学",
			"location":"河北保定",
			"degree":"学士学位",
			"dates":"2011-2015",
			"url":"",
			"majors":["计算机科学与技术"]
		}
	],
	"onlineCourses":[
		{
			"title":"",
			"school":"",
			"dates":"",
			"url":""
		}
	]
}   
bio.display = function(){
	var role = "前端工程师";
	var name = "常洁";
	var mobile = "15810846033";
	var email = "672194800@qq.com";
	var github = "jieerkitty";
	var location = "beijing";
	var pic = "images/psu.jpg";
	var msg = "一个认真负责的前端妹子";
	var formattedRole = HTMLheaderRole.replace("%data%",role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%",name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%",mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",email);
	$("#topContacts").append(formattedEmail);
	var formattedgithub = HTMLgithub.replace("%data%",github);
	$("#topContacts").append(formattedgithub);
	var formattedlocation = HTMLlocation.replace("%data%",location);
	$("#topContacts").append(formattedlocation);
	var formattedbioPic = HTMLbioPic.replace("%data%",pic);
	$("#header").append(formattedbioPic);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",msg);
	$("#header").append(formattedwelcomeMsg);
	$("#header").append(HTMLskillsStart);
	for(var index = 0;index<bio.skills.length;index++){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[index]);
		$("#skills").append(formattedSkills);
	}	
}
bio.display();

work.display = function(){
	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formettedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formettedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}
work.display();

projects.display = function(){  
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
		$(".project-entry:last").append(formattedTitle);
		var formettedDates = HTMLprojectDates.replace("%data%",project.dates);
		$(".project-entry:last").append(formettedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
		$(".project-entry:last").append(formattedDescription);
		if(project.images.length > 0){
			for(var index = 0;index<project.images.length;index++){
				var formattedImage = HTMLprojectImage.replace("%data%",project.images[index]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	});

}
projects.display();

education.display = function(){  
	education.schools.forEach(function(school){
		$("#education").append(HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%",school.name);
		$(".education-entry:last").append(formattedschoolName);
		var formettedschoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
		$(".education-entry:last").append(formettedschoolDegree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%",school.dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",school.location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%",school.majors);
		$(".education-entry:last").append(formattedschoolMajor);
	});
}
education.display();
var googleMap = '<div id="map" style="height:400px;"></div>';
$("#mapDiv").append(googleMap);