// Key:  {Name, x, y}
const coords = { 
    "A": {"Name": "Anjas hus", x:  900, y:  150, packages: new Array},
    "B": {"Name": "Bobs hus", x: 1000, y: 400, packages: new Array},
    "C": {"Name": "Anjas sommerhus", x: 1100, y: 100, packages: new Array},
    "D": {"Name": "Daniels hus", x: 450, y: 600, packages: new Array},
    "E": {"Name": "Emmas hus", x: 250, y: 590, packages: new Array},
    "F": {"Name": "Gretes gård", x: 120, y: 160, packages: new Array},
    "G": {"Name": "Gretes hus", x: 120, y: 360, packages: new Array},
    "H": {"Name": "Gretes butik", x: 350, y: 400, packages: new Array},
    "P": {"Name": "Postcenter", x: 600, y: 100, packages: new Array},
    "S": {"Name": "Shoppingcenter", x: 500, y: 150, packages: new Array},
    "Z": {"Name": "ZBC HTX", x: 600, y: 350, packages: new Array}
}

// Each element is an array of length 2 that defines starting point and ending point of a road
const roads = [
    ["A","B"],
    ["A","C"],
    ["A","P"],
    ["B","Z"],
    ["D","E"],
    ["D","Z"],
    ["E","G"],
    ["G","F"],
    ["G","H"],
    ["G","S"],
    ["S","P"],
    ["S","H"],
    ["S","Z"],
    ["H","Z"],
    ["F","S"]
  ];

  function getLocations()
  {
    let locations = new Array;

    //returnArray.push({"A": ["B","C","P"]});
    for (let k of roads)
    {
        let stored0 = false;
        let stored1 = false
        for (let i of locations)
        {
            if (k[0] === i)
            {
                stored0 = true;
            }
            if (k[1] === i)
            {
                stored1 = true;
            }
        }
        if (stored0 === false)
        {
            locations.push(k[0]);
        }
        if (stored1 === false)
        {
            locations.push(k[1]);
        }
    }

    return locations;
  }


