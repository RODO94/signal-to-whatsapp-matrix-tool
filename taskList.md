# Let's think what we need to do

**Aim:** _We want a tool where a user can specify in Signal which WhatsApp group they want to link. The tool will then create a link and mirror the messages in the WhatsApp group in Signal._

- A user will make a Signal group
- In that group, the user will send a message `'triggerlink --roomId'`
- The Bot in Signal will return the `signalRoomId` for that Signal Group
- The user will then go to the WhatsApp group they want to connect
- In the WhatsApp group they will send in another trigger message `'triggerlink --<signalRoomId>'`
- We can then find where that message was sent, what the `whatsAppRoomId` of the WhatsApp group is
- Store this in a JSON within the repo
  - `"[[signalRoomId, whatsAppRoomId], [...], [...]]"`
- Then we check that everytime a message is sent and send the messages from the `whatsAppRoomId` to the `signalRoomId`
- The messages should come through in Signal as a Bot, not the user
