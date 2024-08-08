function dark()
{
    document.getElementById('bd').style.background='#000'
    document.getElementById('bd').style.color='#fff'
}

function light()
{
    document.getElementById('bd').style.background='#fff'
    document.getElementById('bd').style.color='#000'
}
function bg()
{
    if(document.getElementById('cl').checked)
    {
        document.getElementById('grad').style.display='none'
        document.getElementById('frst').innerHTML='background color'
    }
    else if((document.getElementById('mg').checked))
    {
        document.getElementById('grad').style.display='block'
        document.getElementById('gg').style.width='2000px'
        document.getElementById('frst').innerHTML='first color'
    }
}
function dis()
{
    document.getElementById('num').style.display='inline'
    document.getElementById('num').innerHTML=document.getElementById('fs').value
}
function apply()
{
    var st=document.getElementById('st').value;
    var nd=document.getElementById('nd').value;
    var rd=document.getElementById('rd').value;
    var fc=document.getElementById('fc').value;
    var fs=document.getElementById('fs').value;
    var ff=document.getElementById('ff').value;
    if(document.getElementById('mg').checked)
    {
        if(document.getElementById('lg').checked)  
        {
            document.getElementById('bd').style.background='linear-gradient('+st+','+nd+','+rd+')'
            document.getElementById('bd').style.color=fc;
            document.getElementById('bd').style.fontSize=fs+'px'
            document.getElementById('bd').style.fontFamily=ff   
        }
    }
    else
    {
        document.getElementById('bd').style.background=fs
            document.getElementById('bd').style.color=fc;
            document.getElementById('bd').style.fontSize=fs+'px'
            document.getElementById('bd').style.fontFamily=ff 
    }
}
