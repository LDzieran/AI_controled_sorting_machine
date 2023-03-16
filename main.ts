input.onButtonPressed(Button.A, function () {
    strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J1, 8, PlanetX_Display.NeoPixelMode.RGB)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.White))
    neZha.setMotorSpeed(neZha.MotorList.M1, 75)
})
input.onButtonPressed(Button.B, function () {
    strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J1, 8, PlanetX_Display.NeoPixelMode.RGB)
    neZha.stopAllMotor()
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Black))
})
let strip: PlanetX_Display.Strip = null
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Ball)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Red)) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 45)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 45)
    }
    if (PlanetX_AILens.ballColor(PlanetX_AILens.ballColorList.Blue)) {
    	
    }
})
