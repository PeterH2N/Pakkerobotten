// Build connection object, each key (location) should contain an array of all connected locations
function build_connections() 
{
    let returnArray = new Array;
    // making an array of all the different names of the locations

    let locations = getLocations();
    console.log(locations.length);

    for (let k of locations)
    {
        let connections = new Array;

        for (let i of roads)
        {
            if (k === i[0])
            {
                connections.push(i[1]);
            }
            else if (k === i[1])
            {
                connections.push(i[0]);
            }
        }
        returnArray.push({[k]: connections});
    }
    console.log(returnArray);

    return returnArray;
}

function getPackages()
{
        let numPackages = Math.round(Math.random() * (30 - 3))+3;
        //console.log(numPackages);

        let locations = getLocations();

        let packages = new Array;

        for (let k = 0; k < numPackages; k++)
        {
            let startLocationIndex = Math.round(Math.random() * (locations.length - 1))
            let endLocationIndex = startLocationIndex;
            while (endLocationIndex === startLocationIndex)
            {
                endLocationIndex = Math.round(Math.random() * (locations.length - 1)) 
            }
            packages.push(
            {
                current: locations[startLocationIndex], 
                end: locations[endLocationIndex], 
                arrived()
                {
                    if (current === end)
                    {
                        return true;
                    }
                    else
                        return false;
                }
            });
        }

        return packages;
}

function initPackages()
{
    let packages = getPackages();

    //console.log(packages);

    for (let k of packages)
    {
        coords[k.current].packages.push(k);
    }

    console.log(coords);
}

