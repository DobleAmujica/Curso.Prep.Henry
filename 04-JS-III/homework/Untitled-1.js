i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
   console.log('n para este bucle vale: ', n);
console.log('e i:' ,i);
}
