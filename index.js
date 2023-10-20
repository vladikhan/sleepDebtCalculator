const getSleepHours = (day) => {
  if (day === 'monday') {
    return 9
  } else if (day === 'tuesday') {
    return 9
  } else if (day === 'wesdesday') {
    return 7
  } else if (day === 'thursday') {
    return 7
  } else if (day === 'friday') {
    return 5
  } else if (day === 'saturday') {
    return 6
  } else if (day === 'sunday') {
    return 7
  }
}
// console.log(getSleepHours("saturday"))

const getActualSleepHours = () => {
  let sum =
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wesdesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')

  return sum
}
console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours * 7
}
console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours) {
    return console.log('You got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours) {
    return console.log(
      "You've got " +
        (actualSleepHours - idealSleepHours) +
        ' hour(s) more sleep than you needed this week. Get some rest.'
    )
  } else if (actualSleepHours < idealSleepHours) {
    return console.log(
      "You should get some rest because you've slept " +
        (idealSleepHours - actualSleepHours) +
        ' hour(s) less sleep than you needed this week. Get some rest.'
    )
  } else {
    console.log('Error')
  }
}

calculateSleepDebt()
// console.log(calculateSleepDebt())
getActualSleepHours()
