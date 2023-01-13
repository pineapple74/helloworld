input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("  Now Press B!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    basic.showString("  Good Job!")
})
basic.showString("Hello!")
