import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  let full = false;
  if(props.spots === 0) {
    full = true;
  }

  const ItemClass = classNames("day-list__item",{
   "--selected": props.selected,
   "--full":full
  })

  const spaceFree = ItemClass.replace(" ","")

  const formatSpots = () => { 
    let message;
    if (props.spots === 0) {
      message = "no spots"
    } else if (props.spots === 1) {
      message = `${props.spots} spot`
    } else {
      message = `${props.spots} spots`
    }

    return `${message} remaining`
  }

  return (
    <li className={spaceFree} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 lassName="text--light">{ formatSpots(props.spots)} </h3>
    </li>
  );
}