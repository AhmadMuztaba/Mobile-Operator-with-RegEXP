let mobileNumber="+8801821401219";
let rgex=/^\+880[0-9]{10}$/;
let number=rgex.test(mobileNumber);
if(number){
    let airtel=/(?<=\+88)016[0-9]{8}$/;
    let gp=/(?<=\+88)01(7|2)[0-9]{8}$/;
    let teletalk=/(?<=\+88)015[0-9]{8}$/;
    let robi=/(?<=\+88)018[0-9]{8}$/;

    let checkAirtel=airtel.test(mobileNumber);
    let checkRobi=robi.test(mobileNumber);
    let checkTele=teletalk.test(mobileNumber);
    let checkGp=gp.test(mobileNumber);
    if(checkAirtel){
        console.log(`${mobileNumber} is Airtel`)
    }
   else if(checkGp){
        console.log(`${mobileNumber} is GrameenPhone`)
    }
   else if(checkTele){
        console.log(`${mobileNumber} is Teletalk`)
    }
   else if(checkRobi){
        console.log(`${mobileNumber} is Robi`)
    }
}else{
    console.log(`${mobileNumber} is not a valid phone number`)
}