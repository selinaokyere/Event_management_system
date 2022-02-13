function AddEvent(){
    //Collecting Event details from the form
    const eventName = document.querySelector('#event_name').value
    const startDate = document.querySelector('#start-date').value
    const endDate = document.querySelector('#end-date').value
    const eventExptReg = document.querySelector('#event-expt-reg').value 
    const eventType = document.querySelector('#event-type').value
    const hostName = document.querySelector('#host-name').value
    const SpeakerName = document.querySelector('#Speaker-name').value
    
    let events = JSON.parse(localStorage.getItem('events'));
    if (events === null) {
        events = [];
    }
    events.push(
        eventName,startDate,endDate,eventExptReg,eventType,hostName,SpeakerName
    )
    let stringifyData = JSON.stringify(events)
    localStorage.setItem('events',stringifyData);
    addEventToTable(events);
}
/*
function addEventToTable(events) {
    let table
}*/

document.querySelector('#event-form').addEventListener('submit', (event) => {
event.preventDefault();

AddEvent()
}) 
