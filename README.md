# chronogestor_automation

Setup:
- In `badge.js`replace 'you_email_address' by your actual email
- In `badge.js` replace 'your_password' by your actual password

How to use:
- From your console :
- export EDITOR=nano #cause i'm not nerd enough for vim
- which node #to find your node location
- crontab -e
- add something like this :

0 8 * * 1-5 cd /Users/YOU/YOUR_APP_FOLDER/ && /Users/YOU/YOUR_NODE badge.js
0 13 * * 1-5 cd /Users/YOU/YOUR_APP_FOLDER/ && /Users/YOU/YOUR_NODE badge.js
0 14 * * 1-5 cd /Users/YOU/YOUR_APP_FOLDER/ && /Users/YOU/YOUR_NODE badge.js
0 18 * * 1-5 cd /Users/YOU/YOUR_APP_FOLDER/ && /Users/YOU/YOUR_NODE badge.js

- Be free ! And NEVER putain de badge again !

[![FREEEEEEE](https://img.youtube.com/vi/xSkCny-HtTw/0.jpg)](https://www.youtube.com/watch?v=xSkCny-HtTw)
