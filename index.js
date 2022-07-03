/* Your Code Here */
const createEmployeeRecord = function(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function(array){
    return array.map(function(row){
        return createEmployeeRecord(row)
    })
}

const createTimeInEvent = function(dateStamp){
    let [date,hour] = dateStamp.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return this
}
const createTimeOutEvent = function(dateStamp){
    let [date,hour] = dateStamp.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this
}

const hoursWorkedOnDate = function(date){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === date
    })
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === date
    })
    return (outEvent.hour - inEvent.hour) / 100
}

const wagesEarnedOnDate = function(date){
    let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(wage.toString())
}

const findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(function(rec){
        return rec.firstName === firstName
    })
}

const calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    },0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

