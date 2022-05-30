var hostarray = new Array();

function redirect()
{
    //Obtain the host name in lowercase format
    var lhost = new String(location.host);
    lhost = lhost.toLowerCase();
    var hostArr = lhost.split('.');
    let redURL="";
    //Does a redirect exist for this host?
    switch(hostArr[0]) {
        case ("purerandomness"):
            redURL="https://bafybeih6pakyxkvfhufycriccumvjfcg5jhfy2zif7f656y4fyfuwgncyu.ipfs.nftstorage.link/";
          break;
        default:
            redURL="";
         break;
      }
      if (redURL!="")
      {
          location.replace(redURL);
      }
}
