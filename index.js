document.addEventListener("DOMContentLoaded", function(){


    console.log("JavaScript is connected");
    
    
    $(document).ready(function(){
        console.log("jQuery is connected");
    });
    
    // $("a").smoothScroll();
    
    axios.get('https://portfolio-917bc.firebaseio.com/projects.json')
      .then(function(response) {
    
        let projects = response.data;
    
        Object.keys(projects).forEach((key) => {
    
        let meat = projects[key];
    
        let skills = meat.skills;
    
        console.log(skills)
    
        $(".projects").append(`
            <div class="project">
                <h1 class="project_name">${key}</h1>
                <br>
                <div class="descriptDiv" style="background-color: rgba(0,0,0,0);">
                    <p class="project_description">${meat.description}</p>
                </div>
                <br>
                <h3>Skills Used:</h3>
                <ul class="${key}">
                </ul>
                <div class="icon_home">
                    <a href="${meat.repo}" target="_blank"><img src="https://banner2.cleanpng.com/20180704/uxe/kisspng-github-computer-icons-icon-design-desktop-wallpape-5b3d36142dd125.8636932415307381961877.jpg" title="Check out the repo!" class="linkToRepo"></a>
                    <a href="${meat.link}" target="_blank"><img src="https://www.hixagency.com/Images/globe-icon.png" title="Try it out!" class="linkToApp"></a>
                </div>
            </div>
            `
        );
    
        for (var i = 0; i < skills.length; i++){
            $(`.${key}`).append(`<li class="skill">${skills[i]}</li>`);
        };
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
    