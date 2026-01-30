/**
 * Mission 1 blocks
 */
//% color="#FF8000" weight=100 icon="\uf1eb"
namespace mission1 {

    let pressCount = 0
    let triggerAt = 0

    /**
     * Shows a checkmark after random Button A presses
     */
    //% block="Mission 1 checkmark controller"
    export function checkmarkController(): void {

        pressCount = 0
        triggerAt = randint(5, 8)

        input.onButtonPressed(Button.A, function () {
            pressCount++

            if (pressCount >= triggerAt) {
                basic.showIcon(IconNames.Yes)
                basic.pause(1000)
                basic.clearScreen()

                pressCount = 0
                triggerAt = randint(5, 8)
            }
        })
    }
}
