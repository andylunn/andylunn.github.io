const { createApp } = Vue

createApp({
    data()
    {
        return {
            message: 'Hello Vue!',
            portfolio:
            [
                {
                    Title: 'Geoplex',
                    Year: 2008,
                    Tag: 'games',
                    Description: `An action puzzler where you must work through the 44 hard as nails levels collecting cubes in the time allotted. Completionists will enjoy finding the hidden dark cubes to get that 100% progress.`,
                    Images:
                    [
                        { URL: 'screenshots/geoplex.png'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: 'downloads/geoplex2_1.exe', Suffix: '8mb'}
                    ]
                },
                {
                    Title: 'Overflow',
                    Year: 2004,
                    Tag: 'games',
                    Description: `A unique little puzzler where you must channel water to the exit to complete a level. Using the mouse you can draw goo to manipulate the landscape to force the water where you need it to go.`,
                    Images:
                    [
                        { URL: 'screenshots/overflow.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: 'downloads/overflow2_0.exe', Suffix: '6mb'}
                    ]
                },
                {
                    Title: 'Rebellion',
                    Year: 1994,
                    Tag: 'games',
                    Description: `Top down shooter for the Amiga computer. Thrust and blast your way through the hoards of enemies with your blaster and smart bombs.`,
                    Images:
                    [
                        { URL: 'screenshots/rebellion - ingame.jpg'},
                        { URL: 'screenshots/rebellion - titlescreen.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: 'downloads/rebellion.adf', Suffix: '880kb'}
                    ]
                },
                {
                    Title: 'Phantom',
                    Year: 1996,
                    Tag: 'games',
                    Description: `Side scrolling shooter in the style of defender for the Amiga computer.`,
                    Images:
                    [
                        { URL: 'screenshots/phantom - ingame.jpg'},
                        { URL: 'screenshots/phantom - titlescreen.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: 'downloads/phantom.adf', Suffix: '880kb'}
                    ]
                },
                {
                    Title: 'Pooyan',
                    Year: 1996,
                    Tag: 'games',
                    Description: `A seriously oddball puzzle/shooter game where you fly down a tunnel collecting colour bubbles to slowly reveal a word puzzle. Used the likeness of the Pooyan arcade game for some reason ;)`,
                    Images:
                    [
                        { URL: 'screenshots/pooyan - screenshot2.png'},
                        { URL: 'screenshots/pooyan - screenshot.png'},
                        { URL: 'screenshots/pooyan - titlescreen.png'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: 'downloads/pooyan.adf', Suffix: '880kb'}
                    ]
                },
                {
                    Title: 'Sibos',
                    Year: 1998,
                    Tag: 'games',
                    Description: 'Quirky puzzler for DOS created back in 1998 for a japanese competition.',
                    Images:
                    [
                        { URL: 'screenshots/sibos.png'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: 'downloads/sibos.zip', Suffix: '12mb'}
                    ]
                },
                {
                    Title: 'Pyromania',
                    Year: 1997,
                    Tag: 'games',
                    Description: 'Fun little fireworks themed match 4 puzzle game for DOS. Use DosBox to play on a modern PC',
                    Images:
                    [
                        { URL: 'screenshots/pyromania.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: 'downloads/pyromania.zip', Suffix: '562kb'}
                    ]
                },
                {
                    Title: 'Die Hard Trilogy',
                    Year: 1997,
                    Tag: 'games',
                    Description: 'An action video game based on the first three installments of the Die Hard series of action movies. I was part of the team that converted the PS1 version to Saturn.',
                    Images:
                    [
                        { URL: 'screenshots/diehard.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: 'Wiki', URL: 'https://en.wikipedia.org/wiki/Die_Hard_Trilogy'}
                    ]
                },
                {
                    Title: 'Fear The Dronx',
                    Year: 2010,
                    Tag: 'games',
                    Description: 'Snare and destroy the evil Dronx mastermind on each of the games 19 twisted levels over 3 chapters. A fresh and innovative take on the puzzle genre, described as a fusion of Chu Chu Rocket and Bomberman. Each level consists of a series of Dronx running riot around the level, you take control of a cursor that allows the placement of directors. Around the level are emitters, spewing out blocks and bombs that follow the path of the directors. Using this combination of tools you have to build, trap and explode the Dronx. When bombs hit a block they explode setting off a chain explosion where matching blocks touch. This opens up a whole world of puzzles to keep you scratching your head.',
                    Images:
                    [
                        { URL: 'screenshots/ftd - screenshot.png'}
                    ],
                    Buttons:
                    [
                        { Title: 'Watch the Trailer', URL: 'http://www.youtube.com/watch?v=zEyub2ziemI&hd=1', Icon: 'fab fa-youtube'}
                    ]
                },
                {
                    Title: 'Mini Arcade',
                    Year: 2016,
                    Tag: 'makes',
                    Description: 'A tabletop mini arcade running on a Raspberry PI 3B+ with a real arcade joystick and buttons.',
                    Images:
                    [
                        { URL: 'makes/mini arcade - sm.jpg'},
                        { URL: 'makes/mini arcade.jpg'}
                    ]
                },
                {
                    Title: 'TV Unit',
                    Year: 2014,
                    Tag: 'makes',
                    Description: 'A custom TV mount for my new Sony TV at the time, built atop the existing Shesham tv corner unit. Designed to hide all the wires and boxes behind.',
                    Images:
                    [
                        { URL: 'makes/tv unit - sm.jpg'},
                        { URL: 'makes/tv unit.jpg'}
                    ]
                },
                {
                    Title: 'Trailer',
                    Year: 2018,
                    Tag: 'makes',
                    Description: 'Custom trailer for camping. Additional height was added and a flip-top lid to accomodate our massive amount of camping gear.',
                    Images:
                    [
                        { URL: 'makes/trailer.jpg'}
                    ]
                },
                {
                    Title: 'Jack-o-Lantern\'s',
                    Year: 2022,
                    Sort: 2022.10,
                    Tag: 'makes',
                    Description: 'A bunch of Jack-o-Lantern\'s for all the family at Halloween.',
                    Images:
                    [
                        { URL: 'makes/jack-o-lanterns - sm.jpg'},
                        { URL: 'makes/jack-o-lanterns.jpg'}
                    ]
                },
                {
                    Title: 'Stool',
                    Year: 2019,
                    Tag: 'makes',
                    Description: 'A tiny little stool for my daughter from a slice of log gifted to me and some recycled hand rail.',
                    Images:
                    [
                        { URL: 'makes/stool - sm.jpg'},
                        { URL: 'makes/stool.jpg'}
                    ]
                },
                {
                    Title: 'Side Table',
                    Year: 2018,
                    Tag: 'makes',
                    Description: 'My first attempt as using reclaimed pallet wood to make furniture. Fits nicely as as an end table with elegant hairpin legs.',
                    Images:
                    [
                        { URL: 'makes/side table - sm.jpg'},
                        { URL: 'makes/side table.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: ' Watch the build', URL: 'https://www.youtube.com/watch?v=7Ie6XYHuVWU', Icon: 'fab fa-youtube'}
                    ]
                },
                {
                    Title: 'Marvel Storage Trunk',
                    Year: 2015,
                    Tag: 'makes',
                    Description: 'A nice upcycle project from a battered old army foot locker. Restored, repainted and new lid created with a built in seat finished in a Marvel comic fabric.',
                    Images:
                    [
                        { URL: 'makes/marvel trunk - sm.jpg'},
                        { URL: 'makes/marvel trunk.jpg'}
                    ]
                },
                {
                    Title: 'Farmhouse Coat Hanger',
                    Year: 2017,
                    Tag: 'makes',
                    Description: 'A simple farmhouse inspired large coat hanger with replica cast iron hooks.',
                    Images:
                    [
                        { URL: 'makes/coat hanger.jpg'}
                    ]
                },
                {
                    Title: 'Camp Kitchen',
                    Year: 2017,
                    Tag: 'makes',
                    Description: 'All in one camp kitchen, scratch build from old ply and sapele wood offcuts. All painted in tough black with removeable legs and folds up into a box.',
                    Images:
                    [
                        { URL: 'makes/camp kitchen.jpg'}
                    ]
                },
                {
                    Title: 'Kids Coat Hanger',
                    Year: 2023,
                    Sort: 2023.1,
                    Tag: 'makes',
                    Description: 'A playful, coat hanger at a low level for the kids to use. Made from scrap plywood and an old broom handle. A tip of colour to make it all pop.',
                    Images:
                    [
                        { URL: 'makes/kids coat hanger - sm.jpg'},
                        { URL: 'makes/kids coat hanger.jpg'}
                    ]
                },
                {
                    Title: 'Arcade Machine',
                    Year: 2021,
                    Tag: 'makes',
                    Description: 'My lockdown project using classic joystick controls, and a wide array of nostalgic games to transport myself back to the golden age of arcades.',
                    Images:
                    [
                        { URL: 'makes/arcade cabinet - sm.jpg'},
                        { URL: 'makes/arcade cabinet.jpg'}
                    ]
                },
                {
                    Title: 'Mid-Century Modern Coat Hanger',
                    Year: 2023,
                    Sort: 2023.2,
                    Tag: 'makes',
                    Description: 'Made from a load of offcuts of hardwood from dark to light (outside to middle) in a mid-century modern style.',
                    Images:
                    [
                        { URL: 'makes/adults coat hanger - sm.jpg'},
                        { URL: 'makes/adults coat hanger.jpg'}
                    ]
                },
                {
                    Title: 'Wooden Xmas Tree Ornament',
                    Year: 2022,
                    Sort: 2022.12,
                    Tag: 'makes',
                    Description: 'Used up a ton of long thin scrap to create this neat little ornament at xmas time for the dining room table.',
                    Images:
                    [
                        { URL: 'makes/xmas wooden tree - sm.jpg'},
                        { URL: 'makes/xmas wooden tree.jpg'}
                    ]
                },
                {
                    Title: 'Collapsible Mini Table',
                    Year: 2022,
                    Sort: 2022.2,
                    Tag: 'makes',
                    Description: 'This was created specifically to take camping and hold a mini camp kitchen, but ended up being far more useful around the house as well as in the wild. Tripod legs screw into the bottom.',
                    Images:
                    [
                        { URL: 'makes/collapsible table - sm.jpg'},
                        { URL: 'makes/collapsible table.jpg'},
                        { URL: 'makes/collapsible table - flat.jpg'}
                    ]
                },
                {
                    Title: 'GridTaker',
                    Year: 2012,
                    Tag: 'games',
                    Description: 'Battle your opponents to take the grid. Test your skills against the computer AI or challenge up to three friends to see who will dominate.',
                    Images:
                    [
                        { URL: 'screenshots/gridtaker.png'}
                    ],
                    Buttons:
                    [
                        { Title: 'Play', URL: 'gridtaker/index.htm'}
                    ]
                },
                {
                    Title: 'Pencil Box',
                    Year: 2022,
                    Sort: 2022.3,
                    Tag: 'makes',
                    Description: 'My daughter needed a large storage box for all her pens and pencils so I quickly built this including a branch from a tree she picked up on a walk.',
                    Images:
                    [
                        { URL: 'makes/pencil box - sm.jpg'},
                        { URL: 'makes/pencil box.jpg'}
                    ]
                },
                {
                    Title: 'Pallet Stool',
                    Year: 2021,
                    Tag: 'makes',
                    Description: 'A bit of extra seating was needed in the lounge so a stiped down pallet and some scaffold board leftovers gave us this sturdy, rustic stool.',
                    Images:
                    [
                        { URL: 'makes/pallet stool - sm.jpg'},
                        { URL: 'makes/pallet stool.jpg'}
                    ]
                },
                {
                    Title: 'Ryobi Power Station',
                    Year: 2022,
                    Sort: 2022.7,
                    Tag: 'makes',
                    Description: 'A nice recycling projet to enable me to use all my Ryobi batteries for camping power.',
                    Images:
                    [
                        { URL: 'makes/ryobi power station - sm.jpg'},
                        { URL: 'makes/ryobi power station.jpg'}
                    ]
                },
                {
                    Title: 'Geometric Wood Art',
                    Year: 2022,
                    Sort: 2022.12,
                    Tag: 'makes',
                    Description: 'A geometric, symetric pattern wooden wall art. Made form scrap for my Wife for Xmas.',
                    Images:
                    [
                        { URL: 'makes/geometric picture - sm.jpg'},
                        { URL: 'makes/geometric picture.jpg'}
                    ]
                }
            ]
        }
    },
    computed:
    {
        portfolioOrdered ()
        {
            return [...this.portfolio].sort(function(a, b)
            {
                if (b.Year == a.Year && b.Sort && a.Sort)
                    return b.Sort - a.Sort;
                else
                    return b.Year - a.Year
            });
        },
        currentYear ()
        {
            return new Date().getFullYear();
        },
        earliestCreation ()
        {
            return this.portfolioOrdered[this.portfolioOrdered.length - 1];
        },
        creationCount ()
        {
            return this.portfolio.length;
        }
    },
    methods:
    {
        randomAnim: function()
        {
            switch (Math.floor((Math.random() * 6)))
            {
                case 0: return 'animate__bounce';
                case 1: return 'animate__pulse';
                case 2: return 'animate__rubberBand';
                case 3: return 'animate__swing';
                case 4: return 'animate__tada';
                case 5: return 'animate__wobble';
                case 6: return 'animate__jello';
            }
        }
    }
}).mount('#app')