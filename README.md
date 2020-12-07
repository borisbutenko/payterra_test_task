# [Watch online]()

# How to run
```
$ yarn install && yarn serve
```
[Open localhost](http://127.0.0.1:8000/)

# Payterra Web Developer Testing Assignment

## Задача
Есть [API](https://api.stage.capusta.space/v1/cabinet/protected/transactions/page/1), выдающее список транзакций (одну страницу)

Надо сделать front приложение на vue.js, которое будет выводить данный список в текущей верстке (архив [тут](https://drive.google.com/file/d/1E5gAGRqLyBYArQRWCbKXBHW-dyQ_aUZ3/view?usp=sharing)).

## Что сделано дополнительно
LazyLoad по скролл-дауну в конце экрана (апи выдает только 3 страницы), и так как возможность конечной выдачи проверить невозможно в текущем апи, сделан небольшой костыль на дроп события `onscroll`
