import * as sdk from "matrix-js-sdk";
import { sendMessage } from "../../matrixClientRequests";
import * as fs from "fs";
import * as path from "path";

export const signalTrigger = "triggerLink --whatsApp";

export const checkForSignalTrigger = (message: string) => {
  if (message.includes(signalTrigger)) return true;
  return false;
};

export const handleSignalTrigger = async (event: sdk.MatrixEvent) => {
  const roomId = event.getRoomId();
  writeGroupId(roomId);
  sendMessage(roomId, `The Signal roomId is:`);
  sendMessage(roomId, roomId);
  sendMessage(roomId, "Use this in the WhatsApp group you want to link");
};

export const writeGroupId = (roomId) => {
  try {
    const filePath = path.join(__dirname.split("dist")[0], "group_ids.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    if (!data.some((groupIds) => Boolean(groupIds.includes(roomId)))) {
      const newData = JSON.stringify([...data, ["xx", roomId]]);
      fs.writeFileSync(filePath, newData);
    }
  } catch (error) {
    console.error(error);
  }
};
