import { ZodSchemaCreate } from "fndtn/interfaces/ZodSchemaCreate";

export const formRoom: formType[] = [
  {
    type: "Input",
    name: "Name",
    description: "This is the name of the room",
    placeholder: "Enter the name of the room...",
  },
  {
    type: "Switch",
    name: "ChatPrivate",
    description:
      "Is the chat going to be visible only for registered users?",
  },
  {
    type: "Switch",
    name: "Listed",
    description:
      "Is the chatroom going to be listed in the rooms list?",
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
  },
];

export const formRoomSchemaCreator: ZodSchemaCreate[] =
  [
    {
      name: "Name",
      value: "string",
      restrictions: {
        messageMax:
          "Name of the room has to be less than 25 characters",
        messageMin:
          "Name of the room has to be more than 2 characters",
        max: 25,
        min: 2,
      },
    },
    {
        name: 'Listed',
        value: 'boolean',
    },
    {
        name
    }
  ];
