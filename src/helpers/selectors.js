

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
