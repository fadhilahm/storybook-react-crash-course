import PropTypes from "prop-types";

const CircleButton = ({
  label,
  backgroundColor = "red",
  size = "md",
  handleClick,
  borderRadius = "50%",
  textColor = "black",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius,
    color: textColor
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
};

CircleButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  borderRadius: PropTypes.oneOf(["50%", "75%", "90%"]),
  textColor: PropTypes.string,
};

export default CircleButton;
