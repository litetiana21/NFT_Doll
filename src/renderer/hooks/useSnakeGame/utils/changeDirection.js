export const changeDirectionWeb = (e, direction,setDirectionChanged,DirectionChanged ) => { 
  switch (e.keyCode) {
    case 37:
      if (direction === "Right") return "Right";
      return "Left";
    case 38:
      if (direction === "Down") return "Down";
      return "Up";
    case 39:
      if (direction === "Left") return "Left";
      return "Right";
    case 40:
      if (direction === "Up") return "Up";
      return "Down";
    default:
      return direction
  }

};

export const changeDirectionMobile = (value, direction) => {
  console.log(value);
  switch (value) {
    case "swipeleft":
      if (direction === "Right") return "Right";
      return "Left";
    case "swipeup":
      if (direction === "Down") return "Down";
      return "Up";
    case "swiperight":
      if (direction === "Left") return "Left";
      return "Right";
    case "swipedown":
      if (direction === "Up") return "Up";
      return "Down";
    default:
      console.log("nothing happened");
  }
};
