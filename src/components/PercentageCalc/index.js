export default function PercentageCalc(props) {
  let percentage = 0;
  if (props.target == "Exp1") {
    if (props.compList.Exp1.length > 0) {
      percentage = 0;
      if (props.compList.Sup1.length > 0) {
        percentage = 50;
        if (props.compList.Adm1.length > 0) {
          percentage = 100;
        }
      }
    }
  }
  if (props.target == "Exp2") {
    if (props.compList.Exp2.length > 0) {
      percentage = 0;
      if (props.compList.Sup2.length > 0) {
        percentage = 50;
        if (props.compList.Adm2.length > 0) {
          percentage = 100;
        }
      }
    }
  }
  if (props.target == "Exp3") {
    if (props.compList.Exp3.length > 0) {
      percentage = 0;
      if (props.compList.Sup3.length > 0) {
        percentage = 50;
        if (props.compList.Adm3.length > 0) {
          percentage = 100;
        }
      }
    }
  }

  return percentage;
}
