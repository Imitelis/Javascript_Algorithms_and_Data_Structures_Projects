/* freeCodeCamp - JavaScript Algorithms and Data Structures - Projects - IV */


/* 4. Projects - Telephone Number Validator */
/* 
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

  1.  555-555-5555
  2.  (555)555-5555
  3.  (555) 555-5555
  4.  555 555 5555
  5.  5555555555
  6.  1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/
/* Solution */

function telephoneCheck(str) {
  let firstRegex = /^((1\s|1|)\d{3}\-\d{3}\-\d{4})$/;
  let secondRegex = /^((1\s|1|)\(\d{3}\)(\s|)\d{3}\-\d{4})$/;
  let thirdRegex = /^((1\s|1|)\d{10})$/;
  let fourthRegex = /^((1\s|1|)\d{3}\s\d{3}\s\d{4})$/;
  if (str.match(firstRegex) || str.match(secondRegex) || str.match(thirdRegex) || str.match(fourthRegex)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");


