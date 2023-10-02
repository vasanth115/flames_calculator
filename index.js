let array=["Friend","Love","Affection","Marriage","Enemy","Sister"];
let count=0;
let result=document.getElementById("result");
function play()
{
    let fc=5;
let myname=document.getElementById("yourname").value;
let crushname=document.getElementById("crushname").value;
let arr1=myname.split(" ");
let arr2=crushname.split(" ");

if(myname==""||myname==null||crushname==null||crushname=="")
{
     alert("Input field is empty !!!");
}
else
{
    for(let i=0;i<myname.length;i++)
{
    for(let j=0;j<crushname.length;j++)
    {
        if(myname.charAt(i)==crushname.charAt(j))
        {
            arr1[i]=' ';
            arr2[j]=' ';
            break;
        }
    }
}

for(let i=0;i<myname.length;i++)
{
    if(arr1[i]!=' ')
    {
        count++;
    }
}
for(let i=0;i<crushname.length;i++)
{
    if(arr2[i]!=' ')
    {
        count++;
    }
}
}
let l=1;
for (i = 0;; i++)
    {
        if (l == (count))
        {
            for (k = i; k<array.length; k++)
            {
                array[k] = array[k + 1];
            }
            array[k + 1] = '\0';
            fc = fc - 1;
            i = i - 1;
            l = 0;
        }
        if (i == fc)
        {
            i = -1;
        }
        if (fc == 0)
        {
            break;
        }
        l++;
    }
if(array[0]=="Friend")
{
    result.innerHTML="FRIEND";
}
else if(array[0]=="Love")
{
   result.innerHTML="LOVE";
}
else if(array[0]=="Affection")
{
     result.innerHTML="AFFECTION";
}
else if(array[0]=="Marriage")
{
    result.innerHTML="MARRIAGE";
}
else if(array[0]=="Enemy")
{
   result.innerHTML="ENEMY";
}
else if(array[0]=="Sister")
{
  result.innerHTML="SISTER";
}
}

function reset()
{
    window.reload();
    alert("Reset");
}