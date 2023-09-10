# NodeJSWebCamToTelegramm
Node js Sending photos from a webcam to telegram | Отправка фото с веб камеры  в телеграм  из NodeJs
<h3>Зависимости  | Dependencies </h3>
node-webcam <br>
<code>
  npm i node-webcam
</code>
node-telegram-bot-api <br>
<code>
  npm i node-telegram-bot-api
</code>
<h4>Использование | Using</h4>
<p>
  Измените значение переменной <code>const token ="*"</code> и <code>const chatId ="*"</code> Токен и индификатор чата куда должно приходить фото.
  <br>
  Change the value of the variable <code>const token ="*"</code> and <code>const chatId ="*"</code> The token and the chat identifier where the photo should come.
</p>
В консоли перейдите в папку с фалом server.js и введите: <br>
In the console, navigate to the folder with the server file.js and enter: <br>
<code>
  node server.js
</code>
<p>Для себя я сделал отправку только предыдущего фото, вы же можете делать как нужно вам. | For myself, I sent only the previous photo, you can do as you need.</p>
