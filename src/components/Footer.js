function Footer(){
    return(
        <div>
            <hr/>
            <p>My footer -copyright 2022</p>
        </div>
    )
}
export default Footer;
// if (!payment.cardNumber) {
//     errors["cardNumber"] = "cardNumber is required";
// }

// if (typeof payment.cardNumber !== "undefined") {
//   // this expression only for master card (/^(?:5[1-5][0-9]{14})$/)

//   var pattern = new RegExp(/^[0-9]{16}$/);
//   if (!pattern.test(payment.cardNumber)) {
//     errors["cardNumber"] = "Please enter  valid 16 digit card number.";
//   }
// }


// if (!payment.description) {
//     errors["description"] = "description is required";
//   }
//   if (typeof payment.description !== "undefined") {
//     var pattern = new RegExp(/^[A-Za-z]+$/);
//     if (!pattern.test(payment.description)) {
//       errors["description"] = "Please type only character ";
//     }
//   }


// if (!payment.course) {
//     errors["course"] = "course is required";
//   }
//   if (typeof payment.course !== "undefined") {
//     var pattern = new RegExp(/^[A-Za-z]+$/);
//     if (!pattern.test(payment.course)) {
//       errors["course"] =
//         "Please type only character not number or special character";
//     }
//   }