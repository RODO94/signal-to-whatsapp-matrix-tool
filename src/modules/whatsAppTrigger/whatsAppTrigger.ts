import * as sdk from "matrix-js-sdk";
import { sendMessage } from "../../matrixClientRequests";

export const whatsAppTrigger = "triggerLink --signal";

export const checkForWhatsAppTrigger = (message: string) => {
  if (message.includes(whatsAppTrigger)) return true;
  return false;
};

export const handleWhatsAppTrigger = async (event: sdk.MatrixEvent) => {
  const roomId = event.getRoomId();
  const message = event.getContent().body;
  const signalRoomId = message.split("--")[2] || message;
  sendMessage(
    roomId,
    `The WhatsApp roomId is: '${signalRoomId}'. I will store and use this to connect the chat`
  );
};
