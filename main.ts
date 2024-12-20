basic.forever(function () {
    basic.showString("GUARANI,")
    basic.showString("I L")
    basic.showIcon(IconNames.Heart)
    basic.showString("VE YOU!")
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 500, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
