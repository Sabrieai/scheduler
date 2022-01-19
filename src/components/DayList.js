
import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
   // an array of day objects
   const dayData = props.days
   const daysList = dayData.map(singleDay => {
    return (<DayListItem 
            key= {singleDay.id}
            name={singleDay.name} 
            spots={singleDay.spots}
            selected= {singleDay.name === props.day}
            setDay= {props.setDay}
            > 
            </DayListItem>);
});
  return (
    
    <ul>

      {daysList}
      
    </ul>
    
    );

}