const MontyVersionTwo = () => {
    let prizeBoxArray = [{isPrize: false, isPicked: false, index: 0}, {isPrize: false, isPicked: false, index: 1}, {isPrize: false, isPicked: false, index: 2}]
    const randomPrizeBoxNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    prizeBoxArray[randomPrizeBoxNumber].isPrize = true
    const randomContestantBoxNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    prizeBoxArray[randomContestantBoxNumber].isPicked = true
    const drunkFriendPick = prizeBoxArray.filter(box => !box.isPicked)[Math.round(Math.random())].index
    if (prizeBoxArray[drunkFriendPick].isPrize) return 'friendOpenedCar';
    if (randomPrizeBoxNumber === randomContestantBoxNumber) return 'friendOpenedDoorAndYouShouldhaveStuck';
    return 'friendOpenedDoorAndYouShouldhaveSwitched';
}

const loopMontyVersionTwo = times => {
    let friendOpenedCar = 0;
    let friendOpenedDoorAndYouShouldhaveStuck = 0;
    let friendOpenedDoorAndYouShouldhaveSwitched = 0;
    for (i = 0; i <= times; i++) {
        const montyVersionTwoResult = MontyVersionTwo()
        if (montyVersionTwoResult === 'friendOpenedCar') friendOpenedCar++
        if (montyVersionTwoResult === 'friendOpenedDoorAndYouShouldhaveStuck') friendOpenedDoorAndYouShouldhaveStuck++
        if (montyVersionTwoResult === 'friendOpenedDoorAndYouShouldhaveSwitched') friendOpenedDoorAndYouShouldhaveSwitched++
    }
    console.log('Friend opened car door: ' ,friendOpenedCar, 'times')
    console.log('Friend opened door with a goat and you should have stuck: ' ,friendOpenedDoorAndYouShouldhaveStuck, 'times')
    console.log('Friend opened door with a goat and you should have switched: ' ,friendOpenedDoorAndYouShouldhaveSwitched, 'times')
}
