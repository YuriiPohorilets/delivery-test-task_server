**Read in another language: [Українська](README.ukr.md), [English](README.md).**

# Delivery | Backend

Це репозиторій, який містить серверну частину додатку для **Delivery**. Цей сервер надає API для
управління замовленнями доставки і зберігання даних про замовлення.

## Вимоги

Перед використанням цього сервера переконайтеся, що на вашому комп'ютері встановлені наступні
компоненти:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/get-npm)

## Установка

1. Клонуйте цей репозиторій на свій локальний комп'ютер:

```shell
git clone https://github.com/YuriiPohorilets/delivery-test-task_server.git
```

2. Перейдіть до папки проекту:

```shell
cd delivery-test-task_server
```

3. Встановіть залежності, використовуючи npm:

```shell
npm install
```

## Запуск

1. Запустіть сервер:

```shell
npm start
```

2. Сервер буде доступний за адресою `http://localhost:8800`.

## Використання

Цей сервер надає API для управління замовленнями доставки. Ви можете виконувати різні операції, такі
як створення нового замовлення, оновлення статусу замовлення та отримання списку замовлень.

API має наступний формат:

- `POST /auth/register` - зареєструвати користувача
- `POST /auth/login` - залогінити користувача
- `GET /auth/logout` - розлогінити користувача
- `GET /auth/refresh` - оновити токен користувача

- `POST /order` - створити нове замовлення
- `GET /shops/` - отримати інформацію про всі магазини
- `GET /shops/{id}` - отримати інформацію про товари магазину магазини

---

## Tech stack

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)

---

# [Frontend repository](https://github.com/YuriiPohorilets/delivery-test-task_client)

# [Жива сторінка](https://yuriipohorilets.github.io/delivery-test-task_client/)
