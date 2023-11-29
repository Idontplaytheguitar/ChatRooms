export const formRoom: formType[] = [
  {
    type: "Input",
    name: "Name",
    description: "This is the name of the room",
    placeholder: "Enter the name of the room...",
    max: 25,
    maxMessage:
      "Room name needs to be less than 25 characters",
    min: 2,
    minMessage:
      "Room name needs to be longer than 2 characters",
  },
  {
    type: "Switch",
    name: "ChatPrivate",
    description:
      "Is the chat going to be visible only for registered users?",
    defaultValue: false,
  },
  {
    type: "Switch",
    name: "Listed",
    description:
      "Is the chatroom going to be listed in the rooms list?",
    defaultValue: true,
  },
  {
    type: "Select",
    name: "Duration",
    description:
      "How much time will the chatroom exist until it dissapears?",
    options: [
      "1 hour",
      "2 hours",
      "5 hours",
      "1 day",
      "7 days",
      "30 days",
    ],
    defaultValue: "1 day",
  },
];

export const formRegister: formType[] = [
  {
    type: "Input",
    name: "Email",
    description:
      "Use a valid email since we will use it for verification",
    placeholder: "Enter your email...",
  },
  {
    type: "Input",
    name: "Username",
    description:
      "This is name that will be displayed to other users",
    placeholder: "Enter the username...",
    max: 25,
    maxMessage:
      "Username needs to be less than 25 characters",
    min: 2,
    minMessage:
      "Username needs to be longer than 2 characters",
  },
  {
    type: "Input",
    name: "Password",
    description: "Choose a strong password",
    placeholder: "Enter the Password...",
    max: 25,
    maxMessage:
      "Password needs to be less than 25 characters",
    min: 6,
    minMessage:
      "Password needs to be longer than 6 characters",
  },
];
