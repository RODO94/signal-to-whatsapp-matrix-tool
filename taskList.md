# Let's think what we need to do

**Aim:** _We want a tool where a user can specify in Signal which WhatsApp group they want to link. The tool will then create a link and mirror the messages in the WhatsApp group in Signal._

- Need a way for people to specify a group
- The tool needs to get a `room_id` from that specified group and store it somewhere
- We need to then create a new Signal group for that `room_id`
- Then every time a new message is sent, the tool knows to send messages from that WhatsApp group to the specific Signal group
