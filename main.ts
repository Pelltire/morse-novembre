function E () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.clearScreen()
    basic.pause(500)
}
function O () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(500)
    }
}
function M () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(500)
    }
}
function B () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(50)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(500)
    }
}
function V () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(50)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(500)
}
function R () {
	
}
basic.forever(function () {
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.clearScreen()
    basic.pause(500)
})
