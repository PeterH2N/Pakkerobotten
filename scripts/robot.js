// State object template for the town


function robot() 
{
    this.addPackages = function()
    {
        for (let k of coords[this.robot_loc].packages)
        {
            if (!k.arrived())
            {
                this.packages.push(k);
            }
        }

        k = [];
    };

    this.init = function(robot_location) 
    {
        this.robot_loc = robot_location;
        this.packages = new Array;
        this.addPackages();
        console.log(this.packages);
        
    };

    this.move = function(to) 
    {
        this.robot_loc = to;
        this.addPackages();
    };
};