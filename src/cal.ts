const completionSpec: Fig.Spec = {
  name: "cal",
  description: "Displays a calendar and the date of Easter",
  options: [
    {
      name: "-3",
      description: "Display the previous, current, and next month",
    },
    {
      name: "-h",
      description: "Disables highlighting of the current day",
    },
    {
      name: "-j",
      description: "Displays Julian days",
    },
    {
      name: "-y",
      description: "Displays the whole year",
    },
    {
      name: "-A",
      description: "Displays the number of months after the current month",
      args: { name: "num" },
    },
    {
      name: "-B",
      description: "Displays the number of months before the current month",
      args: { name: "num" },
    },
    {
      name: "-m",
      description: "Displays the given month",
      exclusiveOn: ["-y"],
      args: { name: "month" },
    },
  ],
  // Only uncomment if cal takes an argument
  args: {
    name: "month and year",
    description: "Year to display, the month is optional",
    isOptional: true,
  },
};
export default completionSpec;
