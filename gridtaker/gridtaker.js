var version = "v1.2",
    dataVersion = 5,
    canvas, context, playerCount = 0,
    currentPlayer = 0,
    botMode = false,
    playerStatus, touchEventState = 0,
    updateLoopFunction = null,
    drawLoopFunction = null,
    inputLoopFunction = null,
    audioOn = false,
    currTrackID = '#track1',
    screenViewport = new Object(),
    moveMade = false,
    lastWinningPlayer = -1,
    howToWizardStep = 0,
    playerColourNames = ["RED", "BLUE", "YELLOW", "PURPLE"],
    starCount = 100,
    starColorRatio = 0,
    starXsave, starYsave, starRatio = 256,
    starSpeed = 3,
    starSpeedSave = 0,
    starGenX = 0,
    starGenY = 0,
    starW = 0,
    starH = 0,
    starX = 0,
    starY = 0,
    star = new Array(starCount),
    botThinking = -1,
    botGridScan = [{
        x: -1,
        y: -1
    }, {
        x: 0,
        y: -1
    }, {
        x: 1,
        y: -1
    }, {
        x: -1,
        y: 0
    }, {
        x: 1,
        y: 0
    }, {
        x: -1,
        y: 1
    }, {
        x: 0,
        y: 1
    }, {
        x: 1,
        y: 1
    }],
    maxGridWidth = 10,
    maxGridHeight = 6,
    tileSize = 48,
    tileSizeHalf = tileSize / 2,
    tileSizeQuarter = tileSize / 4,
    atomSize = tileSize / 6,
    cellProcessingCount = 0,
    gridViewport, grid, playerColours = ["255, 0, 0", "99, 218, 255", "255,233,127", "155,124,255", ],
    resizeTimeout = -1,
    lastScreenWidth = 0,
    lastScreenHeight = 0,
    logCount = 0,
    logStartTime = ((new Date).getTime()),
    spaceFontLetters = [
        [0, 0, 1, 0, 0, 0, 0, 2, 1, 0, 1, 2, 0, 1, 1, 1],
        [0, 0, 0.5, 0, 0, 0, 0, 2, 0.5, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 0, 2, 1, 2],
        [0, 0, 1, 0, 0, 0, 0, 2, 0, 2, 1, 2],
        [0, 0, 0, 2, 0, 0, 1, 0.5, 0, 2, 1, 1.5, 1, 0.5, 1, 1.5],
        [0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2],
        [0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1],
        [0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 1, 2, 1, 1, 1, 2],
        [0, 0, 0, 2, 1, 0, 1, 2, 0, 1, 1, 1],
        [0, 0, 1, 0, 0.5, 0, 0.5, 2, 0, 2, 1, 2],
        [0, 0, 1, 0, 0.5, 0, 0.5, 2, 0, 2, 0.5, 2],
        [0, 0, 0, 2, 0, 0.5, 1, 0, 0, 1.5, 1, 2],
        [0, 0, 0, 2, 0, 2, 1, 2],
        [0, 0, 0, 2, 0, 0, 0.5, 1, 0.5, 1, 1, 0, 1, 0, 1, 2],
        [0, 0, 0, 2, 0, 0, 1, 2, 1, 0, 1, 2],
        [0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 2, 0, 2, 1, 2],
        [0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 1, 2, 1, 0, 1, 2, 0.5, 1.5, 1, 2],
        [0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0.5, 1, 1, 2],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 2, 0, 2, 1, 2],
        [0, 0, 1, 0, 0.5, 0, 0.5, 2],
        [0, 0, 0, 2, 0, 2, 1, 2, 1, 0, 1, 2],
        [0, 0, 0, 1.5, 0, 1.5, 1, 2, 1, 0, 1, 2],
        [0, 0, 0, 2, 0, 2, 0.5, 1.5, 0.5, 1.5, 1, 2, 1, 0, 1, 2],
        [0, 0, 1, 2, 1, 0, 0, 2],
        [0, 0, 0.5, 1, 0.5, 1, 1, 0, 0.5, 1, 0.5, 2],
        [0, 0, 1, 0, 1, 0, 0, 2, 0, 2, 1, 2]
    ],
    spaceFontNumbers = [
        [0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 2, 0, 2, 1, 2, 0, 2, 1, 0],
        [0, 0.5, 0.5, 0, 0.5, 0, 0.5, 2, 0, 2, 1, 2],
        [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 2, 0, 2, 1, 2],
        [0, 0, 1, 0, 1, 0, 1, 2, 0, 2, 1, 2, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 2],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 2, 0, 2, 1, 2],
        [0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 1, 1, 0, 2, 1, 2, 1, 1, 1, 2],
        [0, 0, 1, 0, 1, 0, 1, 2],
        [0, 0, 1, 0, 0, 0, 0, 2, 1, 0, 1, 2, 0, 2, 1, 2, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 2, 0, 1, 1, 1, 0, 2, 1, 2]
    ],
    spaceFontSymbols = [
        [0, 1.75, 0, 2],
        [0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1.5, 0, 1.75, 0, 2],
        [0.5, 1.75, 0, 2],
        [0, 0.5, 0, 1.5, 0, 0.5, 0.5, 0.5, 0, 1.5, 0.5, 1.5, 1, 0, 1, 2, 0.5, 0.5, 1, 0, 0.5, 1.5, 1, 2],
        [0.25, 0, 1, 0, 0.25, 0, 0.25, 2, 0.25, 2, 1, 2],
        [0, 0, 0.75, 0, 0.75, 0, 0.75, 2, 0, 2, 0.75, 2]
    ];
$(document).ready();
var features = DetectFeatures();
if (features.length > 0) {
    $("#failedFeatureDetection").html("The following features are lacking from your browser :( <ul>" + features + "</ul>").show()
} else {
    LoadSettings();
    BindEvent(document, "touchmove", function(a) {
        a.preventDefault()
    });
    if (window.applicationCache != undefined) {
        BindEvent(window.applicationCache, "updateready", function(a) {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
                window.applicationCache.swapCache();
                if (confirm("A new version is available. Load it now?")) {
                    window.location.reload()
                }
            }
        })
    }

    canvas = document.getElementById("viewport");
    context = canvas.getContext("2d");
    BindEvent(canvas, "touchstart", function(a) {
        a.preventDefault();
        a.stopPropagation();
        if (touchEventState != 2) {
            touchEventState = 1;
            if (a.targetTouches.length == 1) {
                inputLoopFunction(a.targetTouches[0].pageX, a.targetTouches[0].pageY)
            }
        }
    });
    BindEvent(canvas, "mousedown", function(a) {
        a.preventDefault();
        a.stopPropagation();
        if (touchEventState != 1) {
            touchEventState = 2;
            inputLoopFunction(a.pageX, a.pageY)
        }
    });
    lastScreenWidth = window.innerWidth;
    lastScreenHeight = window.innerHeight;
    InitScreen();
    if (SaveDataPresent()) {
        StartGameFromSave()
    } else {
        StartMainMenu()
    }
    SetupRefresh();
    CheckForScreenResize(RefreshScreen);
    $("#viewport").css("display", "block");
    $("#viewport").hide();
    $("#viewport").fadeIn("slow")
}

function InitScreen() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    screenViewport.Width = Math.min(canvas.width, maxGridWidth * tileSize);
    screenViewport.Height = Math.min(canvas.height - tileSize, maxGridHeight * tileSize);
    screenViewport.HalfWidth = Math.floor(screenViewport.Width / 2);
    screenViewport.HalfHeight = Math.floor(screenViewport.Height / 2);
    screenViewport.OffsetX = Math.floor((window.innerWidth - screenViewport.Width) / 2);
    screenViewport.OffsetY = Math.floor((window.innerHeight - screenViewport.Height) / 2);
    InitStarfield()
}

function RefreshScreen() {
    InitScreen();
    ResizeGrid()
}

function StartMainMenu() {
    localStorage.removeItem("version");
    localStorage.removeItem("playerCount");
    localStorage.removeItem("currentPlayer");
    localStorage.removeItem("playerStatus");
    localStorage.removeItem("botMode");
    localStorage.removeItem("gridData");
    localStorage.removeItem("gridViewport");
    updateLoopFunction = function() {};
    drawLoopFunction = DrawLoopMainMenu;
    inputLoopFunction = InputLoopMainMenu;

    if (audioOn) PlayTrack(1);
}

function StartNewGame() {
    updateLoopFunction = function() {};
    drawLoopFunction = DrawLoopNewGame;
    inputLoopFunction = InputLoopNewGame
}

function StartHowTo() {
    howToWizardStep = 0;
    updateLoopFunction = function() {};
    drawLoopFunction = DrawLoopHowTo;
    inputLoopFunction = function(a) {
        if (++howToWizardStep == 6) {
            StartMainMenu()
        }
    }
}

function StartAdvertButton() {
    window.location = "https://www.vultrix.com"
}

function StartGameOver() {
    updateLoopFunction = function() {};
    drawLoopFunction = DrawLoopGameOver;
    inputLoopFunction = function(a) {
        StartMainMenu()
    }

    if (audioOn) PlayTrack(3);
}

function StartGame(b) {
    currentPlayer = 0;
    if (b == 1) {
        botMode = true;
        playerCount = 2
    } else {
        botMode = false;
        playerCount = b
    }
    playerStatus = new Array(playerCount);
    for (i = 0; i < playerCount; i++) {
        var a = new Object();
        a.Alive = true;
        a.AtomCount = 0;
        a.Started = false;
        playerStatus[i] = a
    }
    InitGrid();
    updateLoopFunction = UpdateLoopGame;
    drawLoopFunction = DrawLoopGame;
    inputLoopFunction = InputLoopGame

    if (audioOn) PlayTrack(2);
}

function SaveDataPresent() {
    if (localStorage != undefined) {
        if (localStorage.getItem("version") != undefined) {
            if (localStorage.getItem("version") == dataVersion) {
                return true
            }
        }
    }
    return false
}

function StartGameFromSave() {
    currentPlayer = parseInt(localStorage.getItem("currentPlayer"));
    playerCount = parseInt(localStorage.getItem("playerCount"));
    botMode = parseInt(localStorage.getItem("botMode")) == 1 ? true : false;
    playerStatus = JSON.parse(localStorage.getItem("playerStatus"));
    grid = JSON.parse(localStorage.getItem("gridData"));
    gridViewport = JSON.parse(localStorage.getItem("gridViewport"));
    updateLoopFunction = UpdateLoopGame;
    drawLoopFunction = DrawLoopGame;
    inputLoopFunction = InputLoopGame;
    cellProcessingCount = 0;
    ResizeGrid();

    if (audioOn) PlayTrack(2);
}

function SaveGame() {
    if (localStorage != undefined) {
        localStorage.setItem("version", dataVersion);
        localStorage.setItem("playerCount", playerCount);
        localStorage.setItem("botMode", botMode ? 1 : 0);
        localStorage.setItem("currentPlayer", currentPlayer);
        localStorage.setItem("playerStatus", JSON.stringify(playerStatus));
        localStorage.setItem("gridData", JSON.stringify(grid));
        localStorage.setItem("gridViewport", JSON.stringify(gridViewport))
    }
}

function SaveSettings() {
    // Removed for now as browser won't let me start music without user interaction
    // so now it always starts as off

    // if (localStorage != undefined) {
    //     localStorage.setItem("audioOn", audioOn ? 1 : 0)
    // }
}

function LoadSettings() {
    // See comment in above function

    // if (localStorage != undefined) {
    //     if (localStorage.getItem("audioOn")) {
    //         audioOn = parseInt(localStorage.getItem("audioOn")) == 1 ? true : false
    //     }
    // }
}

function SetupRefresh() {
    var b;
    if (window.webkitRequestAnimationFrame) {
        b = function(d) {
            var c = function() {
                d();
                webkitRequestAnimationFrame(c)
            };
            c()
        }
    } else {
        if (window.mozRequestAnimationFrame) {
            b = function(d) {
                var c = function() {
                    d();
                    mozRequestAnimationFrame(c)
                };
                c()
            }
        } else {
            b = function(c) {
                setInterval(c, 1000 / 60)
            }
        }
    }
    var a = (function() {
        var c = 0,
            e = 1000 / 30,
            d = (new Date).getTime();
        return function() {
            c = 0;
            while ((new Date).getTime() > d) {
                updateLoopFunction();
                d += e;
                c++
            }
            context.fillStyle = "rgb(0,0,0)";
            context.fillRect(0, 0, canvas.width, canvas.height);
            if (!c) {
                interpolation = (d - (new Date).getTime()) / e;
                if (interpolation < 1) {
                    interpolation = 1
                }
                drawLoopFunction(interpolation)
            } else {
                drawLoopFunction(1)
            }
        }
    })();
    b(a)
}

function NextPlayer() {
    do {
        currentPlayer++;
        if (currentPlayer > (playerCount - 1)) {
            currentPlayer = 0
        }
    } while (!playerStatus[currentPlayer].Alive)
}

function UpdateLoopGame() {
    UpdateGrid();
    if (botThinking > -1) {
        botThinking--;
        if (botThinking == -1) {
            if (BotMakeMove(currentPlayer)) {
                moveMade = true;
                NextPlayer()
            }
        }
        return
    }
    if (cellProcessingCount == 0) {
        if (moveMade) {
            SaveGame()
        }
        moveMade = false;
        var a = 0,
            b = -1;
        for (i = 0; i < playerCount; i++) {
            if (playerStatus[i].Started) {
                if (playerStatus[i].AtomCount == 0) {
                    playerStatus[i].Alive = false;
                    if (currentPlayer == i) {
                        NextPlayer()
                    }
                }
            }
            if (playerStatus[i].Alive) {
                a++;
                b = i
            }
        }
        if (a == 1) {
            lastWinningPlayer = b;
            StartGameOver()
        } else {
            if (botMode && currentPlayer == 1) {
                botThinking = 20
            }
        }
    }
}

function InputLoopGame(a, b) {
    a -= canvas.offsetLeft + gridViewport.OffsetX;
    b -= canvas.offsetTop + gridViewport.OffsetY;
    a = Math.min(a, canvas.width);
    b = Math.min(b, canvas.height);
    if (a >= gridViewport.PixelWidth - tileSize && b >= gridViewport.PixelHeight && a <= gridViewport.PixelWidth && b <= gridViewport.PixelHeight + tileSize) {
        StartMainMenu()
    } else {
        if (a >= 0 && b >= 0 && a <= screenViewport.Width && b <= screenViewport.Height) {
            if (cellProcessingCount == 0 && botThinking == -1) {
                if (CellClick(Math.floor(a / tileSize), Math.floor(b / tileSize), currentPlayer)) {
                    moveMade = true;
                    NextPlayer()
                }
            }
        }
    }
}

function InputLoopMainMenu(d, e) {
    var b = [
        [80, StartNewGame],
        [125, StartHowTo],
        [170, StartAdvertButton]
    ];
    d -= canvas.offsetLeft + screenViewport.OffsetX;
    e -= canvas.offsetTop + screenViewport.OffsetY;
    d = Math.min(d, canvas.width);
    e = Math.min(e, canvas.height);
    var a = screenViewport.HalfWidth - 95;
    if (d >= a && d <= (a + (95 * 2))) {
        for (i = 0; i < b.length; i++) {
            if (e >= b[i][0] && e <= (b[i][0] + 35)) {
                b[i][1]()
            }
        }
    } else {
        if (d >= screenViewport.HalfWidth + 110 && d <= screenViewport.HalfWidth + 150) {
            if (e >= 205 && e <= 245) {
                if (audioOn) {
                    StopTrack();
                    audioOn = false;
                } else {
                    PlayTrack(1);
                    audioOn = true;
                }
                SaveSettings()
            }
        }
    }
}

function InputLoopNewGame(b, d) {
    var a = [-100, -35, 35, 100];
    b -= canvas.offsetLeft + screenViewport.OffsetX;
    d -= canvas.offsetTop + screenViewport.OffsetY;
    b = Math.min(b, canvas.width);
    d = Math.min(d, canvas.height);
    if (b >= 0 && d >= 0 && b <= screenViewport.Width && d <= screenViewport.Height) {
        for (i = 0; i < a.length; i++) {
            var c = (screenViewport.OffsetX + screenViewport.HalfWidth) + a[i],
                e = screenViewport.OffsetY + 130;
            c -= canvas.offsetLeft + screenViewport.OffsetX;
            e -= canvas.offsetTop + screenViewport.OffsetY;
            if (Distance(b, d, c, e) <= 8) {
                StartGame(i + 1);
                break
            }
        }
    }
}

function DrawLoopGame(a) {
    DrawStarfield();
    DrawGrid();
    if (botThinking > -1 && botThinking <= 18) {
        DrawBusyIcon()
    }
    context.fillStyle = "rgba(" + playerColours[3] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[3] + ", 0.9)";
    var c = (gridViewport.OffsetX + gridViewport.PixelWidth) - tileSizeHalf,
        d = gridViewport.OffsetY + gridViewport.PixelHeight + tileSizeHalf,
        b = tileSizeQuarter;
    context.beginPath();
    context.arc(c, d, tileSizeQuarter + (tileSize / 8), 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
    context.fill();
    context.beginPath();
    context.moveTo(c - b, d - b);
    context.lineTo(c + b, d + b);
    context.moveTo(c + b, d - b);
    context.lineTo(c - b, d + b);
    context.stroke();
    context.closePath()
}

function DrawLoopMainMenu(a) {
    DrawStarfield();
    DrawTextCentred("GRIDTAKER", screenViewport.OffsetY + 2, 23, "rgba(0,255,0, 0.6)");
    DrawTextCentred(version.toUpperCase(), screenViewport.OffsetY + 55, 6, "rgba(0,255,0, 0.4)");
    context.fillStyle = "rgba(" + playerColours[0] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[0] + ", 0.9)";
    context.fillRect((screenViewport.OffsetX + screenViewport.HalfWidth) - 95, screenViewport.OffsetY + 80, 95 * 2, 35);
    context.strokeRect((screenViewport.OffsetX + screenViewport.HalfWidth) - 95, screenViewport.OffsetY + 80, 95 * 2, 35);
    DrawTextCentred("NEW GAME", screenViewport.OffsetY + 90, 8, "rgba(" + playerColours[0] + ", 0.9)");
    context.fillStyle = "rgba(" + playerColours[1] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[1] + ", 0.9)";
    context.fillRect((screenViewport.OffsetX + screenViewport.HalfWidth) - 95, screenViewport.OffsetY + 125, 95 * 2, 35);
    context.strokeRect((screenViewport.OffsetX + screenViewport.HalfWidth) - 95, screenViewport.OffsetY + 125, 95 * 2, 35);
    DrawTextCentred("HOW TO PLAY", screenViewport.OffsetY + 135, 8, "rgba(" + playerColours[1] + ", 0.9)");
    context.fillStyle = "rgba(" + playerColours[2] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[2] + ", 0.9)";
    context.fillRect((screenViewport.OffsetX + screenViewport.HalfWidth) - 95, screenViewport.OffsetY + 170, 95 * 2, 35);
    context.strokeRect((screenViewport.OffsetX + screenViewport.HalfWidth) - 95, screenViewport.OffsetY + 170, 95 * 2, 35);
    DrawTextCentred("ONLINE", screenViewport.OffsetY + 180, 8, "rgba(" + playerColours[2] + ", 0.9)");
    DrawTextCentred("[C] 2012, 2020 ANDY LUNN", screenViewport.OffsetY + 220, 6, "rgba(0,255,0, 0.4)");
    DrawText("%", screenViewport.OffsetX + screenViewport.HalfWidth + 120, screenViewport.OffsetY + 215, 12, "rgba(" + playerColours[2] + ", 0.8)");
    if (!audioOn) {
        DrawText("X", screenViewport.OffsetX + screenViewport.HalfWidth + 120, screenViewport.OffsetY + 215, 12, "rgba(" + playerColours[2] + ", 0.6)")
    }
}

function DrawLoopNewGame(a) {
    DrawStarfield();
    DrawTextCentred("HOW MANY PLAYERS?", screenViewport.OffsetY + 50, 10, "rgba(0,255,0, 0.6)");
    context.fillStyle = "rgba(" + playerColours[0] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[0] + ", 0.9)";
    context.beginPath();
    context.arc((screenViewport.OffsetX + screenViewport.HalfWidth) - 100, screenViewport.OffsetY + 130, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
    context.fill();
    DrawText("1", (screenViewport.OffsetX + screenViewport.HalfWidth) - 110, screenViewport.OffsetY + 110, 20, "rgba(0,0,0)");
    context.fillStyle = "rgba(" + playerColours[1] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[1] + ", 0.9)";
    context.beginPath();
    context.arc((screenViewport.OffsetX + screenViewport.HalfWidth) - 35, screenViewport.OffsetY + 130, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
    context.fill();
    DrawText("2", (screenViewport.OffsetX + screenViewport.HalfWidth) - 45, screenViewport.OffsetY + 110, 20, "rgba(0,0,0)");
    context.fillStyle = "rgba(" + playerColours[2] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[2] + ", 0.9)";
    context.beginPath();
    context.arc((screenViewport.OffsetX + screenViewport.HalfWidth) + 35, screenViewport.OffsetY + 130, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
    context.fill();
    DrawText("3", (screenViewport.OffsetX + screenViewport.HalfWidth) + 25, screenViewport.OffsetY + 110, 20, "rgba(0,0,0)");
    context.fillStyle = "rgba(" + playerColours[3] + ", 0.3)";
    context.strokeStyle = "rgba(" + playerColours[3] + ", 0.9)";
    context.beginPath();
    context.arc((screenViewport.OffsetX + screenViewport.HalfWidth) + 100, screenViewport.OffsetY + 130, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
    context.fill();
    DrawText("4", (screenViewport.OffsetX + screenViewport.HalfWidth) + 90, screenViewport.OffsetY + 110, 20, "rgba(0,0,0)")
}

function DrawLoopGameOver(a) {
    DrawStarfield();
    DrawTextCentred(playerColourNames[lastWinningPlayer], screenViewport.OffsetY + 20, 23, "rgba(" + playerColours[lastWinningPlayer] + ", 0.9)");
    DrawTextCentred("WINS", screenViewport.OffsetY + 90, 25, "rgba(0,255,0, 0.6)");
    DrawTextCentred("CLICK TO CONTINUE", screenViewport.OffsetY + 160, 10, "rgba(0,255,0, 0.6)")
}

function DrawLoopHowTo(a) {
    DrawStarfield();
    DrawTextCentred("HOW TO PLAY?", screenViewport.OffsetY + 50, 10, "rgba(0,255,0, 0.6)");
    switch (howToWizardStep) {
        case 0:
            DrawText("EACH PLAYER TAKES IT", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 100, 9, "rgba(0,255,0, 0.6)");
            DrawText("IN TURN TO PLACE THEIR", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 130, 9, "rgba(0,255,0, 0.6)");
            DrawText("ATOM ON THE GRID.", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 160, 9, "rgba(0,255,0, 0.6)");
            break;
        case 1:
            DrawText("PLACING THE SAME COLOUR", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 100, 9, "rgba(0,255,0, 0.6)");
            DrawText("ON A CELL AGAIN WILL", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 130, 9, "rgba(0,255,0, 0.6)");
            DrawText("ADD ANOTHER ATOM.", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 160, 9, "rgba(0,255,0, 0.6)");
            break;
        case 2:
            DrawText("WHEN A CELL REACHES 3", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 100, 9, "rgba(0,255,0, 0.6)");
            DrawText("ATOMS, ADDING A 4TH", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 130, 9, "rgba(0,255,0, 0.6)");
            DrawText("WILL EXPLODE THE CELL.", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 160, 9, "rgba(0,255,0, 0.6)");
            break;
        case 3:
            DrawText("THE 4 ATOMS WILL TAKE", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 100, 9, "rgba(0,255,0, 0.6)");
            DrawText("OVER CELLS ABOVE, BELOW,", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 130, 9, "rgba(0,255,0, 0.6)");
            DrawText("LEFT AND RIGHT.", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 160, 9, "rgba(0,255,0, 0.6)");
            break;
        case 4:
            DrawText("IF THESE CELLS REACH 4", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 100, 9, "rgba(0,255,0, 0.6)");
            DrawText("ATOMS THEY WILL ALSO", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 130, 9, "rgba(0,255,0, 0.6)");
            DrawText("EXPLODE CAUSING CHAINS.", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 160, 9, "rgba(0,255,0, 0.6)");
            break;
        case 5:
            DrawText("TO WIN YOUR COLOUR MUST", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 100, 9, "rgba(0,255,0, 0.6)");
            DrawText("BE THE ONLY ONE LEFT ON", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 130, 9, "rgba(0,255,0, 0.6)");
            DrawText("THE GRID.", (screenViewport.OffsetX + screenViewport.HalfWidth) - 150, screenViewport.OffsetY + 160, 9, "rgba(0,255,0, 0.6)");
            break
    }
    DrawTextCentred("CLICK TO CONTINUE", screenViewport.OffsetY + 210, 6, "rgba(0,255,0, 0.4)")
}

function InitStarfield() {
    starGenX = 0;
    starGenY = 0;
    starX = Math.floor(canvas.width / 2);
    starY = Math.floor(canvas.height / 2);
    starW = canvas.width;
    starH = canvas.height;
    starZ = (starW + starH) / 2;
    starColorRatio = 1 / starZ;
    for (var a = 0; a < starCount; a++) {
        star[a] = new Array(5);
        star[a][0] = Math.random() * starW * 2 - starX * 2;
        star[a][1] = Math.random() * starH * 2 - starY * 2;
        star[a][2] = Math.round(Math.random() * starZ);
        star[a][3] = 0;
        star[a][4] = 0
    }
}

function DrawStarfield() {
    context.strokeStyle = "rgba(255,255,255,0.9)";
    for (var a = 0; a < starCount; a++) {
        test = true;
        starXsave = star[a][3];
        starYsave = star[a][4];
        star[a][0] += starGenX >> 4;
        if (star[a][0] > starX << 1) {
            star[a][0] -= starW << 1;
            test = false
        }
        if (star[a][0] < -starX << 1) {
            star[a][0] += starW << 1;
            test = false
        }
        star[a][1] += starGenY >> 4;
        if (star[a][1] > starY << 1) {
            star[a][1] -= starH << 1;
            test = false
        }
        if (star[a][1] < -starY << 1) {
            star[a][1] += starH << 1;
            test = false
        }
        star[a][2] -= starSpeed;
        if (star[a][2] > starZ) {
            star[a][2] -= starZ;
            test = false
        }
        if (star[a][2] < 0) {
            star[a][2] += starZ;
            test = false
        }
        star[a][3] = starX + (star[a][0] / star[a][2]) * starRatio;
        star[a][4] = starY + (star[a][1] / star[a][2]) * starRatio;
        if (starXsave > 0 && starXsave < starW && starYsave > 0 && starYsave < starH && test) {
            context.lineWidth = (1 - starColorRatio * star[a][2]) * 2;
            context.beginPath();
            context.moveTo(starXsave, starYsave);
            context.lineTo(star[a][3], star[a][4]);
            context.stroke();
            context.closePath()
        }
    }
}

function BotMakeMove(e) {
    var g, h, b, c, a, d, f = true;
    b = -1;
    c = -1;
    a = -1;
    if ((Math.random() * 100) > 75) {
        for (h = 0; h < gridViewport.Height; h++) {
            for (g = 0; g < gridViewport.Width; g++) {
                if (grid[g][h].Count > 0) {
                    if (grid[g][h].PlayerID == e) {
                        d = grid[g][h].Count;
                        score = d;
                        for (i = 0; i < botGridScan.length; i++) {
                            score += CellCount(botGridScan[i].x, botGridScan[i].y) * d
                        }
                        if (score > a) {
                            a = score;
                            b = g;
                            c = h
                        }
                    }
                }
            }
        }
        if (a > -1) {
            CellClick(b, c, e);
            f = false
        }
    }
    if (f) {
        do {
            g = Math.floor(Math.random() * (gridViewport.Width - 1));
            h = Math.floor(Math.random() * (gridViewport.Height - 1))
        } while (!CellClick(g, h, e))
    }
    return true
}

function CellCount(a, b) {
    if (a >= 0 && a < gridViewport.Width) {
        if (b >= 0 && b < gridViewport.Height) {
            return grid[a][b].Count
        }
    }
    return 0
}

function DrawBusyIcon() {
    context.fillStyle = "rgba(0, 0, 0, 0.6)";
    context.strokeStyle = "rgba(255, 255, 255, 0.9)";
    var a = (gridViewport.OffsetX + (gridViewport.PixelWidth / 2)),
        b = gridViewport.OffsetY + (gridViewport.PixelHeight / 2);
    context.beginPath();
    context.arc(a, b, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
    context.fill();
    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(a - 18, b - 18);
    context.moveTo(a, b);
    context.lineTo(a + 20, b);
    context.stroke();
    context.closePath()
}

function InitGrid() {
    gridViewport = new Object();
    gridViewport.Width = Math.floor(screenViewport.Width / tileSize);
    gridViewport.Height = Math.floor(screenViewport.Height / tileSize);
    gridViewport.PixelWidth = (gridViewport.Width * tileSize);
    gridViewport.PixelHeight = (gridViewport.Height * tileSize);
    grid = new Array(gridViewport.Width);
    for (x = 0; x < gridViewport.Width; x++) {
        grid[x] = new Array(gridViewport.Height)
    }
    for (y = 0; y < gridViewport.Height; y++) {
        for (x = 0; x < gridViewport.Width; x++) {
            cell = new Object();
            cell.PlayerID = 0;
            cell.Count = 0;
            cell.Process = 0;
            cell.Pop = 0;
            grid[x][y] = cell
        }
    }
    cellProcessingCount = 0;
    ResizeGrid()
}

function ResizeGrid() {
    if (gridViewport != undefined) {
        gridViewport.OffsetX = screenViewport.OffsetX + Math.floor((screenViewport.Width - gridViewport.PixelWidth) / 2);
        gridViewport.OffsetY = screenViewport.OffsetY + Math.floor((screenViewport.Height - (gridViewport.PixelHeight + tileSize)) / 2)
    }
}

function CellClick(b, c, a) {
    if (grid[b][c].PlayerID == a || grid[b][c].Count == 0) {
        grid[b][c].PlayerID = a;
        grid[b][c].Process = 1;
        cellProcessingCount++;
        return true
    }
    return false
}

function UpdateGrid() {
    for (y = 0; y < gridViewport.Height; y++) {
        for (x = 0; x < gridViewport.Width; x++) {
            if (grid[x][y].Process > 0) {
                grid[x][y].Process--;
                if (grid[x][y].Process == 0) {
                    cellProcessingCount--;
                    grid[x][y].Count++;
                    playerStatus[grid[x][y].PlayerID].Started = true;
                    playerStatus[grid[x][y].PlayerID].AtomCount++;
                    if (grid[x][y].Count > 3) {
                        playerStatus[grid[x][y].PlayerID].AtomCount -= grid[x][y].Count;
                        grid[x][y].Count = 0;
                        grid[x][y].Pop = 8;
                        SplitAtom(x, y - 1, grid[x][y].PlayerID);
                        SplitAtom(x, y + 1, grid[x][y].PlayerID);
                        SplitAtom(x - 1, y, grid[x][y].PlayerID);
                        SplitAtom(x + 1, y, grid[x][y].PlayerID)
                    }
                }
            }
        }
    }
}

function SplitAtom(b, c, a) {
    if (b >= 0 && b < gridViewport.Width && c >= 0 && c < gridViewport.Height) {
        if (grid[b][c].Process > 0) {
            cellProcessingCount--
        }
        playerStatus[grid[b][c].PlayerID].AtomCount -= grid[b][c].Count;
        grid[b][c].Process = 3;
        grid[b][c].PlayerID = a;
        playerStatus[grid[b][c].PlayerID].AtomCount += grid[b][c].Count;
        cellProcessingCount++
    }
}

function DrawGrid() {
    context.strokeStyle = "rgba(0,255,0, 0.6)";
    context.lineWidth = 1;
    context.beginPath();
    for (y = 0; y <= gridViewport.Height; y++) {
        yy = gridViewport.OffsetY + (y * tileSize);
        context.moveTo(gridViewport.OffsetX, yy);
        context.lineTo(gridViewport.OffsetX + gridViewport.PixelWidth, yy)
    }
    for (x = 0; x <= gridViewport.Width; x++) {
        xx = gridViewport.OffsetX + (x * tileSize);
        context.moveTo(xx, gridViewport.OffsetY);
        context.lineTo(xx, gridViewport.OffsetY + gridViewport.PixelHeight)
    }
    context.stroke();
    context.closePath();
    context.lineWidth = 2;
    var a = 0;
    for (i = 0; i < (botMode ? 1 : playerCount); i++) {
        if (playerStatus[i].Alive) {
            if (currentPlayer == i || botMode) {
                context.fillStyle = "rgba(" + playerColours[i] + ", 0.5)";
                context.strokeStyle = "rgba(" + playerColours[i] + ", 0.9)"
            } else {
                context.fillStyle = "rgba(150,150,150, 0.1)";
                context.strokeStyle = "rgba(150,150,150, 0.3)"
            }
            context.beginPath();
            context.arc(gridViewport.OffsetX + tileSizeHalf + (a * tileSize), gridViewport.OffsetY + gridViewport.PixelHeight + tileSizeHalf, atomSize, 0, Math.PI * 2, true);
            context.closePath();
            context.stroke();
            context.fill();
            a++
        }
    }
    DrawCells()
}

function DrawCells() {
    for (y = 0; y < gridViewport.Height; y++) {
        for (x = 0; x < gridViewport.Width; x++) {
            if (grid[x][y].Count > 0) {
                context.fillStyle = "rgba(" + playerColours[grid[x][y].PlayerID] + ", 0.5)";
                context.strokeStyle = "rgba(" + playerColours[grid[x][y].PlayerID] + ", 0.9)";
                switch (grid[x][y].Count) {
                    case 1:
                        context.beginPath();
                        context.arc(gridViewport.OffsetX + tileSizeHalf + (x * tileSize), gridViewport.OffsetY + tileSizeHalf + (y * tileSize), atomSize, 0, Math.PI * 2, true);
                        context.closePath();
                        context.stroke();
                        context.fill();
                        break;
                    case 2:
                        ax = gridViewport.OffsetX + tileSizeHalf + (x * tileSize);
                        ay = gridViewport.OffsetY + tileSizeHalf + (y * tileSize);
                        context.beginPath();
                        context.arc(ax - tileSizeQuarter, ay, atomSize, 0, Math.PI * 2, true);
                        context.closePath();
                        context.stroke();
                        context.fill();
                        context.beginPath();
                        context.arc(ax + tileSizeQuarter, ay, atomSize, 0, Math.PI * 2, true);
                        context.closePath();
                        context.stroke();
                        context.fill();
                        break;
                    case 3:
                        ax = gridViewport.OffsetX + tileSizeHalf + (x * tileSize);
                        ay = gridViewport.OffsetY + tileSizeHalf + (y * tileSize);
                        context.beginPath();
                        context.arc(ax, ay - atomSize, atomSize, 0, Math.PI * 2, true);
                        context.closePath();
                        context.stroke();
                        context.fill();
                        context.beginPath();
                        context.arc(ax - tileSizeQuarter, ay + atomSize, atomSize, 0, Math.PI * 2, true);
                        context.closePath();
                        context.stroke();
                        context.fill();
                        context.beginPath();
                        context.arc(ax + tileSizeQuarter, ay + atomSize, atomSize, 0, Math.PI * 2, true);
                        context.closePath();
                        context.stroke();
                        context.fill();
                        break;
                    default:
                        context.beginPath();
                        context.arc(gridViewport.OffsetX + tileSizeHalf + (x * tileSize), gridViewport.OffsetY + tileSizeHalf + (y * tileSize), atomSize, 0, Math.PI * 2, true);
                        context.closePath();
                        context.stroke();
                        break
                }
            }
            if (grid[x][y].Pop > 0) {
                context.strokeStyle = "rgba(255,255,255,0.9)";
                ax = gridViewport.OffsetX + tileSizeHalf + (x * tileSize);
                ay = gridViewport.OffsetY + tileSizeHalf + (y * tileSize);
                grid[x][y].Pop--;
                context.beginPath();
                context.moveTo(ax - tileSizeHalf, ay);
                context.lineTo(ax + tileSizeHalf, ay);
                context.moveTo(ax, ay - tileSizeHalf);
                context.lineTo(ax, ay + tileSizeHalf);
                context.moveTo(ax - tileSizeQuarter, ay - tileSizeQuarter);
                context.lineTo(ax + tileSizeQuarter, ay + tileSizeQuarter);
                context.moveTo(ax + tileSizeQuarter, ay - tileSizeQuarter);
                context.lineTo(ax - tileSizeQuarter, ay + tileSizeQuarter);
                context.closePath();
                context.stroke()
            }
        }
    }
}

function BindEvent(a, c, b) {
    if (a.addEventListener) {
        a.addEventListener(c, b, false)
    } else {
        if (a.attachEvent) {
            a.attachEvent("on" + c, b)
        }
    }
}

function CheckForScreenResize(a) {
    resizeTimeout = setInterval(function() {
        if (lastScreenWidth != window.innerWidth || lastScreenHeight != window.innerHeight) {
            lastScreenWidth = window.innerWidth;
            lastScreenHeight = window.innerHeight;
            a()
        }
    }, 1000)
}

function Distance(c, e, d, f) {
    var a = Math.abs(c - d),
        b = Math.abs(e - f);
    return Math.sqrt((a * 2) + (b * 2))
}

function DetectFeatures() {
    var b = [
        ["Local storage", function() {
            try {
                var d = "ftAPL123a24";
                localStorage.setItem(d, d);
                localStorage.removeItem(d);
                return true
            } catch (c) {
                if (c.message.indexOf("QUOTA_EXCEEDED_ERR") == 0) {
                    alert("Your browser local storage is full or corrupt. The game will play, but game state cannot be stored. To fix this clear the browser data.");
                    return true
                }
                return false
            }
        }],
        ["HTML5 Canvas", function() {
            var c = document.createElement("canvas");
            return !!(c.getContext && c.getContext("2d"))
        }]
    ];
    var a = "";
    for (i = 0; i < b.length; i++) {
        if (!b[i][1]()) {
            a += "<li>" + b[i][0] + "</li>"
        }
    }
    return a
}

function DrawTextCentred(d, f, b, a) {
    var e = screenViewport.OffsetX + ((screenViewport.Width - ((d.length + (d.length * 0.5)) * b)) / 2);
    DrawText(d, e, f, b, a)
}

function DrawText(d, e, g, b, a) {
    context.strokeStyle = a;
    context.lineWidth = 2;
    var f = e;
    widestVertex = 0, currentLetter = null, code = 0;
    for (l = 0; l < d.length; l++) {
        code = d.charCodeAt(l);
        if (code != 32) {
            if (code >= 48 && code <= 57) {
                currentLetter = spaceFontNumbers[code - 48]
            } else {
                if (code == 46) {
                    currentLetter = spaceFontSymbols[0]
                } else {
                    if (code == 63) {
                        currentLetter = spaceFontSymbols[1]
                    } else {
                        if (code == 44) {
                            currentLetter = spaceFontSymbols[2]
                        } else {
                            if (code == 37) {
                                currentLetter = spaceFontSymbols[3]
                            } else {
                                if (code == 91) {
                                    currentLetter = spaceFontSymbols[4]
                                } else {
                                    if (code == 93) {
                                        currentLetter = spaceFontSymbols[5]
                                    } else {
                                        if (code >= 65 && code <= (65 + 24)) {
                                            currentLetter = spaceFontLetters[code - 65]
                                        } else {
                                            console.debug(code);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            widestVertex = 0;
            for (i = 0; i < currentLetter.length; i += 4) {
                context.beginPath();
                context.moveTo(f + (currentLetter[i] * b), g + (currentLetter[i + 1] * b));
                context.lineTo(f + (currentLetter[i + 2] * b), g + (currentLetter[i + 3] * b));
                context.stroke();
                context.closePath();
                if (currentLetter[i] > widestVertex) {
                    widestVertex = currentLetter[i]
                } else {
                    if (currentLetter[i + 2] > widestVertex) {
                        widestVertex = currentLetter[i + 2]
                    }
                }
            }
            f += (widestVertex + 0.5) * b
        } else {
            f += (1.5 * b)
        }
    }
};

function PlayTrack(track)
{
    StopTrack();

    // play the new one
    currTrackID = '#track' + track;
    $(currTrackID).get(0).play();
}

function StopTrack()
{
    // stop the current track if its playing
    var c = $(currTrackID).get(0);
    if (!c.paused) c.pause();
}