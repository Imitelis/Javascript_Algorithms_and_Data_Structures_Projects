/* freeCodeCamp - JavaScript Algorithms and Data Structures - Projects - II */


/* 2. Projects - Roman Numeral Converter */
/* 
Convert the given number into a roman numeral.
Roman numerals 	Arabic numerals
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1

All roman numerals answers should be provided in upper-case.
*/
/* Solution */

function convertToRoman(num) {
  const rom_M = ["", "M", "MM", "MMM"];
  const rom_C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const rom_X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const rom_I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  
  let num_1000 = Math.floor(num/1000);
  let num_100 = Math.floor((num%1000)/100);
  let num_10 = Math.floor((num%100)/10);
  let num_1 = (num%10);

  return rom_M[num_1000] + rom_C[num_100] + rom_X[num_10] + rom_I[num_1];
}

convertToRoman(36);


