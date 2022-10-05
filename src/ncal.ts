const completionSpec: Fig.Spec = {
  name: "ncal",
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
      name: "-J",
      description: "Displays Julian Calender",
    },
    {
      name: "-p",
      description: "Prints the country codes and switching days",
    },
    {
      name: "-w",
      description: "Displays the week numbers",
    },
    {
      name: "-y",
      description: "Displays the whole year",
    },
    {
      name: "-e",
      description: "Displays the date of Easter",
    },
    {
      name: "-o",
      description: "Displays the date of Orthodox Easter",
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
      name: "-s",
      description:
        "Assume the switch from Julian to Gregorian calendar from country code",
      args: { name: "country code" },
    },
    {
      name: "-C",
      description: "Switch to cal mode",
    },
    {
      name: "-N",
      description: "Switch to ncal mode",
    },
    {
      name: "-d",
      description: "Uses YYYY-MM as current date",
      args: { name: "date" },
    },
    {
      name: "-H",
      description: "Uses YYYY-MM-DD as current date",
      args: { name: "date" },
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
