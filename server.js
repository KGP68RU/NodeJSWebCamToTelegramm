let fs = require('fs');
//Available in nodejs
var NodeWebcam = require("node-webcam");
//Default options
var opts = {
    //Picture related
    width: 1280,
    height: 720,
    quality: 100,
    // Number of frames to capture
    // More the frames, longer it takes to capture
    // Use higher framerate for quality. Ex: 60
    frames: 60,
    //Delay in seconds to take shot
    //if the platform supports miliseconds
    //use a float (0.1)
    //Currently only on windows
    delay: 0,
    //Save shots in memory
    saveShots: true,
    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: "jpeg",
    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
    device: false,
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: "location",
    //Logging
    verbose: false
};

//Creates webcam instance
var Webcam = NodeWebcam.create(opts);
//Will automatically append location output type
Webcam.capture("test_picture", function (err, data) { });
//Also available for quick use
NodeWebcam.capture("test_picture", opts, function (err, data) {
});
//Get list of cameras
Webcam.list(function (list) {
    //Use another device
    var anotherCam = NodeWebcam.create({ device: list[0] });
});
//Return type with base 64 image
var opts = {
    callbackReturn: "base64"
};
NodeWebcam.capture("test_picture", opts, function (err, data) {
    //var изображение = "<img src='" + данные + "'>";
});
const TelegramBot = require('node-telegram-bot-api');
const { exit } = require("process");

// replace the value below with the Telegram token you receive from @BotFather
const token = '123:AAFF';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

const chatId = 600000000;

if (fs.existsSync('test_picture.bmp')) {
    bot.sendPhoto(chatId, 'test_picture.bmp');
}
if (fs.existsSync('test_picture.jpg')) {
    bot.sendPhoto(chatId, 'test_picture.jpg');
}
//удаление файлов чтобы не слать старые!
if (fs.existsSync('test_picture.bmp')) {
    fs.unlink('test_picture.bmp', err => {
        if (err) throw err; // не удалось удалить файл
        console.log('Файл BMP успешно удалён');
    });
};
if (fs.existsSync('test_picture.jpg')) {
    fs.unlink('test_picture.jpg', err => {
        if (err) throw err; // не удалось удалить файл
        console.log('Файл JPG успешно удалён');
    });
};

setTimeout(exit, 5000);
//curl -F document=@"test_picture.jpg" https://api.telegram.org/bot<token>/sendDocument?chat_id=<chat_id>