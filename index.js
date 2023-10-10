/* Your Code Here */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 

    return payable
}

function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}
function createEmployeeRecords(employeeData) {
    return employeeData.map(function (arr) {
        return createEmployeeRecord(arr);
    });
}
function createTimeInEvent(employee, dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    employee.timeInEvents.push({
        type: "TimeIn",
        date: date,
        hour: parseInt(time, 10)
    });
    return employee;
}
function hoursWorkedOnDate(employeeRecord, date) {
    
    if (!employeeRecord.hasOwnProperty('timeInEvents') || !employeeRecord.hasOwnProperty('timeOutEvents')) {
    
      return 0; 
    }
  
    // Find the timeInEvent and timeOutEvent objects for the given date
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
  
    if (!timeInEvent || !timeOutEvent) {
      
      return 0; 
    }
  
    const timeInHour = parseInt(timeInEvent.hour);
    const timeOutHour = parseInt(timeOutEvent.hour);
  
    const hoursWorked = (timeOutHour - timeInHour) / 100; 
  
    return hoursWorked;
  }
  function findEmployeeByFirstName(collection, firstNameString) {
   
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].firstName === firstNameString) {
        return collection[i]; 
      }
    }
   
    return null;
  }
  function createTimeOutEvent(employee, dateTimeString) {
  
    if (!employee.hasOwnProperty('timeOutEvents')) {
      employee.timeOutEvents = [];
    }
  
    const timeOutEvent = {
      type: 'TimeOut',
      date: dateTimeString.split(' ')[0],
      hour: parseInt(dateTimeString.split(' ')[1], 10),
    };
  
    employee.timeOutEvents.push(timeOutEvent);
  
    return employee;
  }

   
  
  
  

  
  

  






