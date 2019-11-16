function reverse_number(num)
{
num = num + "";
return num.split("").reverse().join("");
}
console.log(reverse_number(231756));
