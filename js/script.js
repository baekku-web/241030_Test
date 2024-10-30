document.addEventListener("DOMContentLoaded" , ()=> {

    const slide = document.getElementById("slide");
    const toLeft = () => {
        slide.style.left = "-100%";
        slide.style.transition = "left 1s";

        setTimeout( append , 1000);
    }
    const append = () => {
        slide.append(slide.children[0]);
        slide.style.left = 0;
        slide.style.transition = "none";
    }

    setInterval( toLeft, 2800 );
    /*****************************/
    const popup = document.getElementById("black");
    const closeButton = document.querySelector("#popup button");
    const noticeLinks = document.querySelectorAll("#notice a");
    

    noticeLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // 링크 기본 동작 방지
            popup.style.display = "block"; // 팝업 표시
        });
    });
    
    
    closeButton.addEventListener("click", function() {
        popup.style.display = "none"; // 팝업 숨기기
    });

    /*****************************/
    const mainMenu = [...document.getElementsByClassName('mainMenu') ];
    const subMenu =  [...document.getElementsByClassName('subMenu')];

    mainMenu.forEach( i => {
        i.addEventListener("focus" , () => {
            subMenu.forEach( j =>   j.style.height = 0  );
            i.nextElementSibling.style.height = '130px';               
        });
    });
    const subMenu_last = document.getElementById('last');
    subMenu_last.addEventListener("blur" , ()=> {
        subMenu.forEach( j =>   j.style.height = 0  );
    });

}); // end....................