import * as fs from "fs";
import "dotenv/config";

export const readDataFromJson = () => {
  try {
    const json = fs.readFileSync("./group_ids.json", "utf8");
    const result: Array<string[]> = JSON.parse(json);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const compareLinkedRoomIds = (roomId: string) => {
  const data = readDataFromJson();
  return Boolean(data.find((roomIds: string[]) => roomIds.includes(roomId)));
};
