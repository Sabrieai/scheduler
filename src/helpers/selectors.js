

export function getAppointmentsForDay(state, day) {

    // filter days to get specific day
    const specificDay = state.days.filter(thisDay => thisDay.name === day);
    let results = []
    let appointments = [];
  
    if (!state.appointments || !state.days) {
      return results;
    }
    // set appointments array to equal that days appointments 
    if ( specificDay[0] && specificDay[0].appointments) {
      appointments = specificDay[0].appointments;
    }
   
 const allAppointments = Object.values(state.appointments)

//looks through all appointments and adds appointments from specific day to the results

 for (const appointment of allAppointments) {
  if(appointments.includes(appointment.id)) {
   results.push(appointment);
    }
  }

   return results;
 }


 export function  getInterview(state, interview) {
  //return an object that contains the interview data if it is passed an object that contains an interview.

  let allInterviewers = state.interviewers;

  //cuts process short if there are no interviewers or specified interview
  if (!interview || !allInterviewers) {
    return null;
  }
  
  let results = {};

  // loop through all interviewers 

  for (let interviewerId in allInterviewers) {
    // checks if the interviewer id is the one we are looking for
    if (interview.interviewer === allInterviewers[interviewerId].id) {
      // sets interviewers info instead of just the id for the interview
    results["interviewer"] = allInterviewers[interviewerId]
    results["student"] = interview.student
    }
  }

 return results;
 }

 export function getInterviewersForDay(state, day) {

  // filter days to get specific day
  const specificDay = state.days.filter(thisDay => thisDay.name === day);
  let allInterviewers = state.interviewers;
  let results = []

//cuts process short if there is no day data or specified  day
  if (!specificDay[0] || !day) {
    return results;
  } 
  
  
  let interviewers = specificDay[0].interviewers

  // loop through interviewers for that day and get their info 
  for (let interviewer of interviewers) {

    let interviewerInfo = allInterviewers[`${interviewer}`]

    if (interviewer === interviewerInfo.id) {
       
      results.push(interviewerInfo)

    }
    
   }

 return results;
}