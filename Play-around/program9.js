function vowels(wrd)
{
let ee="";
for(let i=0;i<wrd.length;i++)
{
if(wrd[i]=='a' || wrd[i]=='e' || wrd[i]=='i' || wrd[i]=='o' || wrd[i]=='u' ||
wrd[i]=='A' || wrd[i]=='E' || wrd[i]=='I' || wrd[i]=='O' || wrd[i]=='U')
{
ee+=wrd[i]+" ";
}
}
console.log("vowels present in ",wrd+" are : ",ee);
}
vowels("hisjdfeevsAo");