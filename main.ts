input.onButtonPressed(Button.A, function () {
    x += 1
})
input.onButtonPressed(Button.B, function () {
    x += -1
})
let x = 0
basic.showNumber(x)
basic.forever(function () {
    basic.showNumber(x)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
    basic.pause(500)
})
