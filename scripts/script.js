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

    $(".projects").append(`
    	<div class="project">
    		<h1>${key}</h1>
    		<p>${meat.description}</p>
    		<ul class="${key}">
    		</ul>
    		<a href="${meat.link}" class="linkTo">Check it out</a>
    	</div>
    	`
    	);

    for (var i = 0; i < skills.length; i++){
    	$(`.${key}`).append(`<li>${skills[i]}</li>`);
    }
});
  })
  .catch(function(error) {
    console.log(error);
  });
