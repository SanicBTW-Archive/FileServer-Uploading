var getDetails = "https://raw.githubusercontent.com/SanicBTW/FNF-PsychEngine-0.3.2h/master/server.sanco";
var online =
{
    masterURL: "",
    getRecordsURL: ":baseURLcollections/:collection/records",
    getSpecificURL: ":baseURLcollections/:collection/records/:id",
    getFilesURL: ":baseURLfiles/:collection/:id/:file"
};

function doFetch()
{
    fetch(getDetails).then((r1) => 
    {
        r1.text().then((text) => 
        {
            var lines = text.trim().split('\n');
            lines.forEach((line) => 
            {
                var ldet = line.split('|');
                ldet.forEach((det) => 
                {
                    if(det == "secure")
                    {
                        fetch(ldet[1] + "health").then((r2) => 
                        {
                            if (!r2.ok)
                            {
                                showOffline(r2.status);
                                return;
                            }

                            online.masterURL = ldet[1];
                            online.getRecordsURL = online.getRecordsURL.replace(":baseURL", online.masterURL);
                            online.getSpecificURL = online.getSpecificURL.replace(":baseURL", online.masterURL);
                            online.getFilesURL = online.getFilesURL.replace(":baseURL", online.masterURL);
                            console.log(online);
                        }).catch((er) => 
                        {
                            console.log(er);
                            showOffline(er);
                        });
                        return;
                    }
                });
            });
        });
    });
}
