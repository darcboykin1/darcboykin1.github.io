console.log("JavaScript is connected");


$(document).ready(function(){
	console.log("jQuery is connected");
});

$("a").smoothScroll();

axios.get('https://portfolio-917bc.firebaseio.com/projects.json')
  .then(function(response) {

    let projects = response.data;

    Object.keys(projects).forEach(function(key) {

    let meat = projects[key];

    let skills = meat.skills;

    console.log(skills)

    $("#projects").append(`
    	<div class="project">
    		<h1 class="project_name">${key}</h1>
    		<br>
    		<p class="project_description">${meat.description}</p>
    		<ul class="${key}">
    		</ul>
    		<div class="icon_home">
    			<a href="${meat.repo}" class="linkToRepo"><img src="http://www.jordland.com/img/social-media/github-w.png" width="50px" title="Check out the repo!"></a>
    			<a href="${meat.link}" class="linkTo"><img src="https://www.hixagency.com/Images/globe-icon.png" width="50px" title="Try it out!"></a>
    		</div>
    	</div>
    	`
    );

    for (var i = 0; i < skills.length; i++){
    	$(`.${key}`).append(`<li>${skills[i]}</li>`);
    };
});

    window.sr = ScrollReveal({
    	reset: false
    });

	sr.reveal('.project', {duration: 500}, 150);

	sr.reveal('.contactimg', {duration: 500}, 150);

  }).catch(function(error) {
    console.log(error);
});












