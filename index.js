document.addEventListener("DOMContentLoaded", function(){


    console.log("JavaScript is connected");
    
    
   
    // $("a").smoothScroll();
    
    axios.get('https://portfolio-917bc.firebaseio.com/projects.json')
      .then(function(response) {
    
        let projects = response.data;
    
        Object.keys(projects).forEach((key) => {
    
        let meat = projects[key];
    
        let skills = meat.skills;

        $(".projects").append(`
            <div class="project">
                <h1 class="project_name"><span class="pinklight">${key}</span></h1>
                <br>
                <div class="projectFlex">
                    <img src="${meat.cover}" width="350px">
                    <br>
                    <div class="projectInner">
                        <div class="descriptDiv" style="background-color: rgba(0,0,0,0);">
                            <p class="project_description">${meat.description}</p>
                        </div>
                        <br>
                        <h3 class="skill_header">Skills Used:</h3>
                        <ul class="${key}">
                        </ul>
                        <br>
                        <div class="icon_home">
                            <a href="${meat.repo}" target="_blank"><img src="./assets/gitlogo.jpg" title="Check out the repo!" class="linkToRepo"></a>
                            <a href="${meat.link}" target="_blank"><img src="./assets/internetlogo.png" title="Try it out!" class="linkToApp"></a>
                        </div>
                    </div>
                </div>
            `
        );
    
        for (var i = 0; i < skills.length; i++){
            $(`.${key}`).append(`<li class="skill">${skills[i]}</li>`);
        };
    });
        $(document).ready(function(){
            if(window.screen.width >= 850){
            $('.projects').slick({
                arrows:true,
                dots: true
            });
        }
        });
        // window.sr = ScrollReveal();
    
        // sr.reveal('.project', {duration: 500}, 150);
    
        // sr.reveal('.contactimg', {duration: 500}, 150);
    
        // sr.reveal('.skill', {duration: 1100}, 120);
    
        // sr.reveal('.aboutarticle', {
        //     duration: 2000,
        //     origin: 'right'
        // });
    
        // sr.reveal('.aboutpic',{
        //     duration: 4000,
        //     origin: 'left'
        // });
    
      }).catch(function(error) {
        console.log(error);
    });
});
    