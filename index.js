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
                <h1 class="project_name"><span class="bluelight">${key}</span></h1>
                <br>
                <div class="projectFlex">
                    <img src="${meat.cover}" width="350px" class="project_img">
                    <br>
                    <div class="projectInner">
                        <div class="descriptDiv" style="background-color: rgba(0,0,0,0);">
                            <p class="project_description bluelight">${meat.description}</p>
                        </div>
                        <br>
                        <h3 class="skill_header bluelight">Skills Used:</h3>
                        <ul class="${key}">
                        </ul>
                        <br>
                        <div class="icon_home">
                            <a href="${meat.repo}" target="_blank"><span class="bluelight">VIEW REPO</span></a>
                            <a href="${meat.link}" target="_blank"><span class="bluelight">TRY DEMO</span></a>
                        </div>
                    </div>
                </div>
            `
        );
    
        for (var i = 0; i < skills.length; i++){
            $(`.${key}`).append(`<li class="skill bluelight">${skills[i]}</li>`);
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

        window.sr = ScrollReveal();

        const slideUp = {
            duration: 1500,
            origin: 'bottom',
            distance: '20%'
        };

        sr.reveal('#name', {
            duration: 1000,
            origin: 'left',
            distance: '15%'
        });

        sr.reveal('.typewriter', {
            duration: 1000,
            origin: 'right',
            distance: '15%'
        });

        sr.reveal('.biosec', slideUp);

        sr.reveal('.projects', slideUp);

        sr.reveal('hr', slideUp);

        sr.reveal('#about', {
            duration: 500,
            origin: 'top',
            distance: '80px',
        });

        sr.reveal('#mission', {
            duration: 500,
            origin: 'top',
            distance: '80px',
            delay: 100
        });

        sr.reveal('#projects', {
            duration: 500,
            origin: 'top',
            distance: '80px',
            delay: 200
        });

    
      }).catch(function(error) {
        console.log(error);
    });
});
    