input.onButtonPressed(Button.A, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -50)
})
input.onButtonPressed(Button.B, function () {
    neZha.stopAllMotor()
})
let strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J1, 8, PlanetX_Display.NeoPixelMode.RGB)
strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
basic.pause(1000)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 145)
basic.pause(1000)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Ball)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Red)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 145)
        basic.pause(1000)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
        basic.pause(1000)
        basic.clearScreen()
    } else if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Blue)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 35)
        basic.pause(1000)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            . # # # .
            # # . . #
            # . # . #
            # . . # #
            . # # # .
            `)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    }
})
loops.everyInterval(100, function () {
    PlanetX_AILens.cameraImage()
})
