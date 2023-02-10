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
                    Description: 'Quirky puzzler for DOS created back in 1998 for a competition.',
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
                    Description: 'An action video game based on the first three installments of the Die Hard series of action movies.',
                    Images:
                    [
                        { URL: 'screenshots/diehard.jpg'}
                    ],
                    Buttons:
                    [
                        { Title: 'Wiki', URL: 'https://en.wikipedia.org/wiki/Die_Hard_Trilogy'}
                    ]
                }
            ]
        }
    }
}).mount('#app')