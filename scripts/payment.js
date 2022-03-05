//check payment button 
if (!isLogin || isLogin === 'false') {
    document.getElementById('paynowButton').disabled = true;
} else if (isLogin === 'true') {
    document.getElementById('paynowButton').disabled = false;
}


function bookingSuccessful(){
    alert('Hi Your Booking is successfull!! thankyou ')
}