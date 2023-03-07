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
                    Year: 2010,
                    Tag: 'games',
                    Description: `An action puzzler where you must work through the 44 hard as nails levels collecting cubes in the time allotted. Completionists will enjoy finding the hidden dark cubes to get that 100% progress.`,
                    Images:
                    [
                        { URL: 'screenshots/geoplex.png'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: ''}
                    ]
                },
                {
                    Title: 'Overflow',
                    Year: 2001,
                    Tag: 'games',
                    Description: `A unique little puzzler where you must channel water to the exit to complete a level. Using the mouse you can draw goo to manipulate the landscape to force the water where you need it to go.`,
                    Images:
                    [
                        { URL: 'screenshots/overflow.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: 'Download', URL: ''}
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
                        { Title: 'Download', URL: ''}
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
                }
            ]
        }
    },
    computed:
    {
        portfolioOrdered: function()
        {
            return [...this.portfolio].sort(function(a, b) {return b.Year - a.Year});
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