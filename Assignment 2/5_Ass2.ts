function ChkString(str:String):boolean
{
    var words:string[];
    words= str.split(" ");
    for(var i=0 ; i< words.length ;i++)
    {
        if(words[i].localeCompare("Marvellous"))
            break;
    }
    if(i == words.length)
        return false;
    else
        return true;
}
var s:string="Pune Kothrud Marvellous Infosystems";
var bret:boolean = ChkString(s);
if(bret == true)
    console.log("String contains Marvellous in it");
else
    console.log("String does not contains Marvellous in it");    