let tiempoP = 200
basic.forever(function () {
    if (tiempoP >= 40) {
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                basic.pause(tiempoP)
                led.plot(x, y)
                basic.pause(tiempoP)
                basic.clearScreen()
            }
        }
        basic.showIcon(IconNames.Yes)
        tiempoP += -80
        basic.clearScreen()
    }
    if (tiempoP < 40) {
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
})
