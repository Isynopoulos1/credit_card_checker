# Challenge Project: Credit Card Checker
## Project Goals

In this project, I have the role of a clerk who checks if credit cards are valid. 

To find out if a credit card number is valid or not, using the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. 

The calculations in the Luhn algorithm can be broken down as the following steps:
* 		Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
* 		As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
* 		Sum up all the digits in the credit card number.
* 		If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.



## Technologies

* 		JavaScript
* 		Node


