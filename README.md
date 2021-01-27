# AppSon
(максимальная ширина экрана 1800px)
Result: https://viktorzubtsov.github.io/AppSon/

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/) (если требуется) 
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/ViktorZubtsov/AppSon.git```
* перейдите в скачанную папку со сборкой
* скачайте необходимые зависимости: ```npm install```
* чтобы начать работу, введите команду: ```gulp``` ,```gulp dev``` (режим разработки)
* чтобы собрать проект, введите команду ```gulp build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. 

## :open_file_folder: Файловая структура

```
AppSon
├── build
├── PSD
├── gulp
|   ├── path
|   ├── tasks
├── src
│   ├── fonts
│   ├── img
│       ├── sprite
│   ├── js
│   ├── styles
│        ├── mobules
│        ├── utils
│        ├── style
│   ├── index.html
├── gulpfile.js
├── csscomb.json
├── package.json
├── package-lock.json

```

* Корень папки:
    * ```gulpfile.js``` — настройки Gulp
    * ```package.json``` — список зависимостей
    * ```./gulp/path/tasks.js``` — подключение Gulp тасков
    * ```./gulp/tasks/*.js``` — все Gulp таски
    
* Папка ```src``` - используется во время разработки:
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * favicon: ```src/img/favicon```
    * спрайты PNG: ```src/img/sprite```
    * спрайты SVG: ```src/img/svg```
    * JS-файлы: ```src/js```
    * библиотеки  JS: ```src/libs```
    * страницы сайта: ```src/pages```
    * SASS-модули: ```src/styles/modules```
    * SASS-спрайты,подключение шрифтов,переменные,миксины: ```src/styles/utils```
    * SASS-главный файл стилий: ```src/styles/styles.sass```
    * HTML-главный файл: ```src/.html```
    
