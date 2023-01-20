import { orange, purple } from "../theme/colors";

export const generateStatusColor = (status) => {
  if (status === "active") {
    return { bgColor: "#EBF5FF", color: "#1A72F7" };
  } else if (status === "inactive") {
    return { bgColor: orange[50], color: orange[200] };
  } else {
    return { bgColor: purple[50], color: purple[100] };
  }
};
