var hostarray = new Array();

hostarray["purerandomness"] = "https://bafybeih6pakyxkvfhufycriccumvjfcg5jhfy2zif7f656y4fyfuwgncyu.ipfs.nftstorage.link/";
function redirect()
{
    //Obtain the host name in lowercase format
    var lhost = new String(location.host);
    lhost = lhost.toLowerCase();
    //Does a redirect exist for this host?
    if (typeof(hostarray[lhost])!='undefined')
    {
        //Replace the first instance in the location - this retains all extensions/parms
        var newURL = String(location.href);
        var lnewURL = newURL.toLowerCase();

        //Get the exact position of the text to replace
        //(the text should logically be present but we'll confirm it just in case)
        var pos = lnewURL.indexOf(lhost);
        if (pos>=0)
        {
            var hostname = new String(hostarray[lhost]);
            location.replace(hostname);
        }

    }

}
