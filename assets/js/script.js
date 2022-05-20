var flag=1,status=0, cursor=1;

function slide_drag()
{
    let width=window.innerWidth;
    if(width<=767){slide_mobile();}
    else if(width<=1024){slide_tablet();}
    else if(width>1024){slide_desktop();} 
}

 function slide_desktop()
 {
    console.log("Desktop!");
        if(flag==1)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag+3)+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
            console.log(flag);
            flag=2;    
        }
        else if (flag==2)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
            flag=3;
        }
        else if(flag==3)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag-2)+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
            console.log(flag);
            flag=4;
        }
        else if(flag==4)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+1+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+2+".jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+3+".jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+4+".jpg";
            flag=1;
            if (status==0){  
                document.getElementById("slide_dot_1").style.color="gray";
                document.getElementById("slide_dot_2").style.color="#ff530a";
                status=1;
            }
            else if(status==1){
                document.getElementById("slide_dot_1").style.color="#ff530a";
                document.getElementById("slide_dot_2").style.color="gray";
                status=0;
            }
        }    
}

function slide_tablet()
{
            let s_dot="slide_dot_";

            if(cursor==1)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                cursor=2;
            }
            else if(cursor==2)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                cursor=3;
            }
            else if(cursor==3)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                cursor=4;
            }
            else if(cursor==4)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                cursor=1;
            }
            if (flag==1)
            {   
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    flag=2;    
            }
            else if (flag==2)
            {
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
                    flag=3;
            }
            else if(flag==3){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
                    document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag-2)+".jpg";
                    flag=1;
            }
}

function slide_mobile()
{
            let s_dot="slide_dot_";
            console.log("risoluzione<767!"+cursor)
            if(cursor==1){
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                document.getElementById(s_dot+(cursor+5)).style.color="gray";
                document.getElementById(s_dot+(cursor+6)).style.color="gray";
                document.getElementById(s_dot+(cursor+7)).style.color="gray";
                cursor=2;
            }
            else if(cursor==2)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                document.getElementById(s_dot+(cursor+5)).style.color="gray";
                document.getElementById(s_dot+(cursor+6)).style.color="gray";
                cursor=3;
            }
            else if(cursor==3)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                document.getElementById(s_dot+(cursor+5)).style.color="gray";
                cursor=4;
            }

            else if(cursor==4)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                document.getElementById(s_dot+(cursor+4)).style.color="gray";
                cursor=5;
            }
            else if(cursor==5)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                document.getElementById(s_dot+(cursor+3)).style.color="gray";
                cursor=6;
            }
            else if(cursor==6)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor-5)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                document.getElementById(s_dot+(cursor+2)).style.color="gray";
                cursor=7;
            }
            else if(cursor==7)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor-5)).style.color="gray";
                document.getElementById(s_dot+(cursor-6)).style.color="gray";
                document.getElementById(s_dot+(cursor+1)).style.color="gray";
                cursor=8;
            }
            else if(cursor==8)
            {
                document.getElementById(s_dot+cursor).style.color="#ff530a";
                document.getElementById(s_dot+(cursor-1)).style.color="gray";
                document.getElementById(s_dot+(cursor-2)).style.color="gray";
                document.getElementById(s_dot+(cursor-3)).style.color="gray";
                document.getElementById(s_dot+(cursor-4)).style.color="gray";
                document.getElementById(s_dot+(cursor-5)).style.color="gray";
                document.getElementById(s_dot+(cursor-6)).style.color="gray";
                document.getElementById(s_dot+(cursor-7)).style.color="gray";
                cursor=1;
            }
            if (flag<=4){
                    document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag)+".jpg";
                    flag++;
                }
            else { flag=1;}
}
function slide_scroll(dot_number)
{
    let width=window.innerWidth, s_dot="slide_dot_";
    console.log("click!");
    if(width<768)
    {
      if(dot_number==1)
      { 
          document.getElementById("slide_img_1").src="assets/images/slider/slider-img-1.jpg";  
          document.getElementById("slide_img_2").src="assets/images/slider/slider-img-2.jpg";
          document.getElementById("slide_img_3").src="assets/images/slider/slider-img-3.jpg";    
          document.getElementById("slide_img_4").src="assets/images/slider/slider-img-4.jpg";
          document.getElementById(s_dot+dot_number).style.color="#ff530a";
          document.getElementById(s_dot+(dot_number1)).style.color="gray";
          document.getElementById(s_dot+(dot_number+2)).style.color="gray";
          document.getElementById(s_dot+(dot_number+3)).style.color="gray";
          document.getElementById(s_dot+(dot_number+4)).style.color="gray";
          document.getElementById(s_dot+(dot_number+5)).style.color="gray";
          document.getElementById(s_dot+(dot_number+6)).style.color="gray";
          document.getElementById(s_dot+(dot_number+7)).style.color="gray";  
      }
      else if(dot_number==2)
      { 
          document.getElementById("slide_img_1").src="assets/images/slider/slider-img-2.jpg";
          document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
          document.getElementById("slide_img_3").src="assets/images/slider/slider-img-4.jpg";
          document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";
          document.getElementById(s_dot+dot_number).style.color="#ff530a";
          document.getElementById(s_dot+(dot_number-1)).style.color="gray";
          document.getElementById(s_dot+(dot_number+1)).style.color="gray";
          document.getElementById(s_dot+(dot_number+2)).style.color="gray";
          document.getElementById(s_dot+(dot_number+3)).style.color="gray";
          document.getElementById(s_dot+(dot_number+4)).style.color="gray";
          document.getElementById(s_dot+(dot_number+5)).style.color="gray";
          document.getElementById(s_dot+(dot_number+6)).style.color="gray";        
      }
      else if(dot_number==3)
      {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-3.jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-4.jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-1.jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-2.jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number-2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+3)).style.color="gray";
            document.getElementById(s_dot+(dot_number+4)).style.color="gray";
            document.getElementById(s_dot+(dot_number+5)).style.color="gray";        
      }
      else if(dot_number==4)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-1.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById(s_dot+dot_number).style.color="#ff530aed";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        document.getElementById(s_dot+(dot_number+2)).style.color="gray";
        document.getElementById(s_dot+(dot_number+3)).style.color="gray";
        document.getElementById(s_dot+(dot_number+4)).style.color="gray";                 
     }
      else if(dot_number==5)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-1.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById(s_dot+dot_number).style.color="#ff530a";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number-4)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        document.getElementById(s_dot+(dot_number+2)).style.color="gray";
        document.getElementById(s_dot+(dot_number+3)).style.color="gray";          
     }
      else if(dot_number==6)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";        
        document.getElementById(s_dot+dot_number).style.color="#ff530a";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number-4)).style.color="gray";
        document.getElementById(s_dot+(dot_number-5)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        document.getElementById(s_dot+(dot_number+2)).style.color="gray";        
     }
      else if(dot_number==7)
      {
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-3.jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-4.jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-1.jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-2.jpg";
        document.getElementById(s_dot+dot_number).style.color="#ff530a";
        document.getElementById(s_dot+(dot_number-1)).style.color="gray";
        document.getElementById(s_dot+(dot_number-2)).style.color="gray";
        document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        document.getElementById(s_dot+(dot_number-4)).style.color="gray";
        document.getElementById(s_dot+(dot_number-5)).style.color="gray";
        document.getElementById(s_dot+(dot_number-6)).style.color="gray";
        document.getElementById(s_dot+(dot_number+1)).style.color="gray";        
     }
     else if(dot_number==8)
     {
       document.getElementById("slide_img_1").src="assets/images/slider/slider-img-4.jpg";
       document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
       document.getElementById("slide_img_3").src="assets/images/slider/slider-img-2.jpg";
       document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";
       document.getElementById(s_dot+dot_number).style.color="#ff530a";
       document.getElementById(s_dot+(dot_number-1)).style.color="gray";
       document.getElementById(s_dot+(dot_number-2)).style.color="gray";
       document.getElementById(s_dot+(dot_number-3)).style.color="gray";
       document.getElementById(s_dot+(dot_number-4)).style.color="gray";
       document.getElementById(s_dot+(dot_number-5)).style.color="gray";
       document.getElementById(s_dot+(dot_number-6)).style.color="gray";
       document.getElementById(s_dot+(dot_number-7)).style.color="gray";        
    } 
    }
    else if(width<=1024)
    {
        if(dot_number==1)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+dot_number+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number+1)+".jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+3)).style.color="gray";    
        }
        else if(dot_number==2)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(dot_number)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number-1)+".jpg";document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
            document.getElementById(s_dot+(dot_number+2)).style.color="gray";
        }
        else if(dot_number==3)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(dot_number)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number-1)+".jpg";document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number-2)).style.color="gray";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        }
        else if(dot_number==4)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(dot_number)+".jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(dot_number-1)+".jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";
            document.getElementById(s_dot+(dot_number-2)).style.color="gray";
            document.getElementById(s_dot+(dot_number-3)).style.color="gray";
        }
    }
    else if(width >=1024)
    {
        if(dot_number==1)
        {    
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-1.jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-2.jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-3.jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-4.jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number+1)).style.color="gray";
        }
        else if(dot_number==2)
        {
            document.getElementById("slide_img_1").src="assets/images/slider/slider-img-4.jpg";
            document.getElementById("slide_img_2").src="assets/images/slider/slider-img-3.jpg";
            document.getElementById("slide_img_3").src="assets/images/slider/slider-img-2.jpg";
            document.getElementById("slide_img_4").src="assets/images/slider/slider-img-1.jpg";
            document.getElementById(s_dot+dot_number).style.color="#ff530a";
            document.getElementById(s_dot+(dot_number-1)).style.color="gray";      
        }
    }       
}

window.addEventListener('load',rivela);
window.addEventListener('scroll',rivela);


    function rivela () {
        const scrollato = window.scrollY;
        const schermo = window.innerWidth;
        let y = 0;

        switch(true) {
            case (schermo<767):
                y = scrollato;
                if (y=>0) {
                    document.getElementById('effettoslide').style.opacity='1';
                    document.getElementById('effettoslide').style.transition='1s ease-in';
                }
                if (y>30) {
                    document.getElementById('effettoabout').style.opacity='1';
                    document.getElementById('effettoabout').style.transition='1s ease-in';
                }
                if (y>400) {
                    document.getElementById('bloghead').style.opacity='1';
                    document.getElementById('bloghead').style.transition='1s ease-in';
                }
                if (y>850) {
                    document.getElementById('bgrid1').style.opacity='1';
                    document.getElementById('bgrid1').style.transition='1s ease-in';
                    document.getElementById('bgrid2').style.opacity='1';
                    document.getElementById('bgrid2').style.transition='1s ease-in';
                }
                if (y>1800) {
                    document.getElementById('bgrid3').style.opacity='1';
                    document.getElementById('bgrid3').style.transition='1s ease-in';
                    document.getElementById('bgrid4').style.opacity='1';
                    document.getElementById('bgrid4').style.transition='1s ease-in';
                }
                if (y>2650) {
                    document.getElementById('bgrid5').style.opacity='1';
                    document.getElementById('bgrid5').style.transition='1s ease-in';
                    document.getElementById('bgrid6').style.opacity='1';
                    document.getElementById('bgrid6').style.transition='1s ease-in';
                }
                if (y>3200) {
                    document.getElementById('infobutton').style.opacity='1';
                    document.getElementById('infobutton').style.transition='1s ease';
                }
                if (y>3550) {
                    document.getElementById('intromenu').style.opacity='1';
                    document.getElementById('intromenu').style.transition='1s ease-in';
                }
                if (y>3900) {
                    document.getElementById('menu1').style.opacity='1';
                    document.getElementById('menu1').style.transition='1s ease-in';
                }
                if (y>4250) {
                    document.getElementById('menu2').style.opacity='1';
                    document.getElementById('menu2').style.transition='1s ease-in';
                }
                if (y>4550) {
                    document.getElementById('menu3').style.opacity='1';
                    document.getElementById('menu3').style.transition='1s ease-in';
                }
                if (y>4750) {
                    document.getElementById('menubutton').style.opacity='1';
                    document.getElementById('menubutton').style.transition='1s ease-in';
                }
                if (y>5050) {
                    document.getElementById('newscont').style.opacity='1';
                    document.getElementById('newscont').style.transition='1s ease-in';
                }
                if (y>5650) {
                    document.getElementById('contacts').style.opacity='1';
                    document.getElementById('contacts').style.transition='1s ease-in';
                }
                if (y>6300) {
                    document.getElementById('contactinfo').style.opacity='1';
                    document.getElementById('contactinfo').style.transition='1s ease-in';
                }
                break;

            case (schermo<1024):
                y = scrollato;
                if (y=>0) {
                    document.getElementById('effettoslide').style.opacity='1';
                    document.getElementById('effettoslide').style.transition='1s ease-in';
                }
                if (y>100) {
                    document.getElementById('effettoabout').style.opacity='1';
                    document.getElementById('effettoabout').style.transition='1s ease-in';
                }
                if (y>600) {
                    document.getElementById('bloghead').style.opacity='1';
                    document.getElementById('bloghead').style.transition='1s ease-in';
                }
                if (y>800) {
                    document.getElementById('bgrid1').style.opacity='1';
                    document.getElementById('bgrid1').style.transition='1s ease-in';
                    document.getElementById('bgrid2').style.opacity='1';
                    document.getElementById('bgrid2').style.transition='1s ease-in';
                }
                if (y>1400) {
                    document.getElementById('bgrid3').style.opacity='1';
                    document.getElementById('bgrid3').style.transition='1s ease-in';
                    document.getElementById('bgrid4').style.opacity='1';
                    document.getElementById('bgrid4').style.transition='1s ease-in';
                }
                if (y>2000) {
                    document.getElementById('bgrid5').style.opacity='1';
                    document.getElementById('bgrid5').style.transition='1s ease-in';
                    document.getElementById('bgrid6').style.opacity='1';
                    document.getElementById('bgrid6').style.transition='1s ease-in';
                }
                if (y>2330) {
                    document.getElementById('infobutton').style.opacity='1';
                    document.getElementById('infobutton').style.transition='1s ease';
                }
                if (y>2640) {
                    document.getElementById('intromenu').style.opacity='1';
                    document.getElementById('intromenu').style.transition='1s ease-in';
                }
                if (y>3050) {
                    document.getElementById('menu1').style.opacity='1';
                    document.getElementById('menu1').style.transition='1s ease-in';
                }
                if (y>3300) {
                    document.getElementById('menu2').style.opacity='1';
                    document.getElementById('menu2').style.transition='1s ease-in';
                }
                if (y>3600) {
                    document.getElementById('menu3').style.opacity='1';
                    document.getElementById('menu3').style.transition='1s ease-in';
                }
                if (y>3800) {
                    document.getElementById('menubutton').style.opacity='1';
                    document.getElementById('menubutton').style.transition='1s ease-in';
                }
                if (y>4150) {
                    document.getElementById('newscont').style.opacity='1';
                    document.getElementById('newscont').style.transition='1s ease-in';
                }
                if (y>4700) {
                    document.getElementById('contacts').style.opacity='1';
                    document.getElementById('contacts').style.transition='1s ease-in';
                }
                if (y>5150) {
                    document.getElementById('contactinfo').style.opacity='1';
                    document.getElementById('contactinfo').style.transition='1s ease-in';
                }
                break;

            case (schermo<1200):
                y = scrollato;
                if (y=>0) {
                    document.getElementById('effettoslide').style.opacity='1';
                    document.getElementById('effettoslide').style.transition='1s ease-in';
                }
                if (y>50) {
                    document.getElementById('effettoabout').style.opacity='1';
                    document.getElementById('effettoabout').style.transition='1s ease-in';
                }
                if (y>450) {
                    document.getElementById('bloghead').style.opacity='1';
                    document.getElementById('bloghead').style.transition='1s ease-in';
                }
                if (y>700) {
                    document.getElementById('bgrid1').style.opacity='1';
                    document.getElementById('bgrid1').style.transition='1s ease-in';
                    document.getElementById('bgrid2').style.opacity='1';
                    document.getElementById('bgrid2').style.transition='1s ease-in';
                }
                if (y>950) {
                    document.getElementById('bgrid3').style.opacity='1';
                    document.getElementById('bgrid3').style.transition='1s ease-in';
                    document.getElementById('bgrid4').style.opacity='1';
                    document.getElementById('bgrid4').style.transition='1s ease-in';
                }
                if (y>1220) {
                    document.getElementById('bgrid5').style.opacity='1';
                    document.getElementById('bgrid5').style.transition='1s ease-in';
                    document.getElementById('bgrid6').style.opacity='1';
                    document.getElementById('bgrid6').style.transition='1s ease-in';
                }
                if (y>1450) {
                    document.getElementById('infobutton').style.opacity='1';
                    document.getElementById('infobutton').style.transition='1s ease';
                }
                if (y>1800) {
                    document.getElementById('intromenu').style.opacity='1';
                    document.getElementById('intromenu').style.transition='1s ease-in';
                }
                if (y>2150) {
                    document.getElementById('menu1').style.opacity='1';
                    document.getElementById('menu1').style.transition='1s ease-in';
                }
                if (y>2400) {
                    document.getElementById('menu2').style.opacity='1';
                    document.getElementById('menu2').style.transition='1s ease-in';
                }
                if (y>2630) {
                    document.getElementById('menu3').style.opacity='1';
                    document.getElementById('menu3').style.transition='1s ease-in';
                }
                if (y>2850) {
                    document.getElementById('menubutton').style.opacity='1';
                    document.getElementById('menubutton').style.transition='1s ease-in';
                }
                if (y>3250) {
                    document.getElementById('newscont').style.opacity='1';
                    document.getElementById('newscont').style.transition='1s ease-in';
                }
                if (y>3700) {
                    document.getElementById('contacts').style.opacity='1';
                    document.getElementById('contacts').style.transition='1s ease-in';
                }
                if (y>4300) {
                    document.getElementById('contactinfo').style.opacity='1';
                    document.getElementById('contactinfo').style.transition='1s ease-in';
                }
                break;

                case (schermo<3840):
                y = scrollato;
                if (y=>0) {
                    document.getElementById('effettoslide').style.opacity='1';
                    document.getElementById('effettoslide').style.transition='1s ease-in';
                }
                if (y>250) {
                    document.getElementById('effettoabout').style.opacity='1';
                    document.getElementById('effettoabout').style.transition='1s ease-in';
                }
                if (y>750) {
                    document.getElementById('bloghead').style.opacity='1';
                    document.getElementById('bloghead').style.transition='1s ease-in';
                }
                if (y>950) {
                    document.getElementById('bgrid1').style.opacity='1';
                    document.getElementById('bgrid1').style.transition='1s ease-in';
                    document.getElementById('bgrid2').style.opacity='1';
                    document.getElementById('bgrid2').style.transition='1s ease-in';
                }
                if (y>1150) {
                    document.getElementById('bgrid3').style.opacity='1';
                    document.getElementById('bgrid3').style.transition='1s ease-in';
                    document.getElementById('bgrid4').style.opacity='1';
                    document.getElementById('bgrid4').style.transition='1s ease-in';
                }
                if (y>1350) {
                    document.getElementById('bgrid5').style.opacity='1';
                    document.getElementById('bgrid5').style.transition='1s ease-in';
                    document.getElementById('bgrid6').style.opacity='1';
                    document.getElementById('bgrid6').style.transition='1s ease-in';
                }
                if (y>1525) {
                    document.getElementById('infobutton').style.opacity='1';
                    document.getElementById('infobutton').style.transition='1s ease';
                }
                if (y>1850) {
                    document.getElementById('intromenu').style.opacity='1';
                    document.getElementById('intromenu').style.transition='1s ease-in';
                }
                if (y>2200) {
                    document.getElementById('menu1').style.opacity='1';
                    document.getElementById('menu1').style.transition='1s ease-in';
                }
                if (y>2425) {
                    document.getElementById('menu2').style.opacity='1';
                    document.getElementById('menu2').style.transition='1s ease-in';
                }
                if (y>2650) {
                    document.getElementById('menu3').style.opacity='1';
                    document.getElementById('menu3').style.transition='1s ease-in';
                }
                if (y>2900) {
                    document.getElementById('menubutton').style.opacity='1';
                    document.getElementById('menubutton').style.transition='1s ease-in';
                }
                if (y>3300) {
                    document.getElementById('newscont').style.opacity='1';
                    document.getElementById('newscont').style.transition='1s ease-in';
                }
                if (y>3900) {
                    document.getElementById('contacts').style.opacity='1';
                    document.getElementById('contacts').style.transition='1s ease-in';
                }
                if (y>4400) {
                    document.getElementById('contactinfo').style.opacity='1';
                    document.getElementById('contactinfo').style.transition='1s ease-in';
                }
                break;
            }
        }
    