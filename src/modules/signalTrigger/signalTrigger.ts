import * as sdk from "matrix-js-sdk";
import { sendMessage } from "../../matrixClientRequests";

export const signalTrigger = "triggerLink --whatsApp";

export const checkForTrigger = (message: string) => {
  if (message.includes(signalTrigger)) return true;
  return false;
};

export const handleSignalTrigger = async (event: sdk.MatrixEvent) => {
  const roomId = event.getRoomId();
  sendMessage(
    roomId,
    `The Signal roomId is: '${roomId}'. Use this in the WhatsApp group you want to link`
  );
};
