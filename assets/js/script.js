/*Sebastian*/
let flag=1,status=0;
function slide_drag(event)
{
    /*if (window.screen)*/
    if(flag==1){
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag+3)+".jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
        console.log(flag);
        flag++;
        
    }
    else if (flag==2){
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
        console.log(flag);
        flag++;
    }
    else if(flag==3){
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag-2)+".jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
        console.log(flag);
        flag++;
   
    }
    else if(flag==4){
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+1+".jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+2+".jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+3+".jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+4+".jpg";
        flag=1;
        if (status==0){
            
            document.getElementById("slide_dot_1").style.color="gray";
            document.getElementById("slide_dot_2").style.color="red";
            status=1;
        }
        else if(status==1){
            document.getElementById("slide_dot_1").style.color="red";
            document.getElementById("slide_dot_2").style.color="gray";
            status=0;
        }
    }    
}