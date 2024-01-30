import axios from "axios";
import { roomDuration } from "fndtn/types/roomDuration";

export const onSubmitCreateRoom = async (values: {
  roomName: string;
  chatPrivate: boolean;
  listed: boolean;
  duration: roomDuration;
}) => {
  axios
    .post("api/room/create", {
      roomName: values.roomName,
      chatPrivate: values.chatPrivate,
      listed: values.listed,
      duration: values.duration,
    })
    .then(() => window.location.reload())
    .catch((e) => console.log(e));
};
