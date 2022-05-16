/*Sebastian*/
let flag=1;
function slide_drag(event)
{
    console.log("HEY!!");
    if(flag==1){
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag+3)+".jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag)+".jpg";
        console.log(flag);
        flag++;
        
    }
    else if (flag==2){
        document.getElementById("slide_img_1").src="assets/images/slider/slider-img-"+(flag+2)+".jpg";
        document.getElementById("slide_img_2").src="assets/images/slider/slider-img-"+(flag+1)+".jpg";
        document.getElementById("slide_img_3").src="assets/images/slider/slider-img-"+(flag)+".jpg";
        document.getElementById("slide_img_4").src="assets/images/slider/slider-img-"+(flag-1)+".jpg";
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
    else if(flag>3){flag=1;}    
}