import CircleButton from "../components/CircleButton";

export default {
  title: "Components/CircleButton",
  component: CircleButton,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <CircleButton {...args} />;

export const FullCircle = Template.bind({});
FullCircle.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
  borderRadius: "50%",
  textColor: "black",
};

export const ThreeQuarterCircle = Template.bind({});
ThreeQuarterCircle.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
  borderRadius: "75%",
  textColor: "black",
};

export const NineTenthCircle = Template.bind({});
NineTenthCircle.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
  borderRadius: "90%",
  textColor: "black",
};
