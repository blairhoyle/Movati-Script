const signupTime = "5:00pm-6:00pm"

const scheduleMovati = () => {
    let now = new Date()
    let workoutTime = new Date()
    console.log(now)
    workoutTime.setHours(16,0,10)
    // workoutTime.setHours(now.getHours()+1)
    let runIn = workoutTime.valueOf() - now.valueOf()

    console.log(`Running in ${runIn}ms`)

    window.setTimeout(runMovati, runIn) // runIn is in milliseconds
}

const runMovati = () => {
    
    let schedCols = document.getElementsByClassName("schedCol1")
    if (schedCols.length == 0) {
        console.error("Didn't find schedSignup")
        return
    }
    
    let rows = Array.from(schedCols).map(row => {
        return {
            time: row.children[0].innerText.trim(),
            signupButton: row.children[1]
        }
    }).filter(row => {
        // row.time: 5:00PM-6:00pm
       return row.time == signupTime
    })

    let {
        signupButton
    } = rows[3]
    

    signupButton.children[0].click()
}

const runExpro = () => {
  let signupBtnExpro = document.getElementsByClassName("btn btn-primary")
  signupBtnExpro[0].click()
}

const run = () => {
    console.log(new Date());
    let {hostname} = window.location
    
    if (hostname == 'api.groupexpro.com') {
        runExpro()
    } else {
        scheduleMovati()
    }

}


run()