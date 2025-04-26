import * as sdk from "matrix-js-sdk";
import { sendMessage } from "../../matrixClientRequests";
import * as fs from "fs";
import * as path from "path";

export const whatsAppTrigger = "triggerLink --signal";

export const checkForWhatsAppTrigger = (message: string) => {
  if (message.includes(whatsAppTrigger)) return true;
  return false;
};

export const handleWhatsAppTrigger = async (event: sdk.MatrixEvent) => {
  const roomId = event.getRoomId();
  const message = event.getContent().body;
  const signalRoomId = message.split("--")[2] || message;
  matchGroupId(roomId, signalRoomId);
  sendMessage(
    roomId,
    `Connecting current WhatsApp group with Signal group with id '${signalRoomId}'.`
  );
};

export const matchGroupId = (whatsAppRoomId, signalRoomId) => {
  try {
    const filePath = path.join(__dirname.split("dist")[0], "group_ids.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    const newData = data.map((groupIds) => {
      if (groupIds.includes(signalRoomId) && groupIds[0] == "xx") {
        return [whatsAppRoomId, signalRoomId];
      }
      return groupIds;
    });
    fs.writeFileSync(filePath, JSON.stringify(newData));
  } catch (error) {
    console.error(error);
  }
};
