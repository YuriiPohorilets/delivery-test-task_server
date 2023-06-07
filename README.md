**Читати іншою мовою: [Українська](README.ukr.md), [English](README.md).**

# Delivery | Backend

This is a repository that contains the server-side application for the **Delivery**. This server
provides an API for managing delivery orders and storing order data.

## Requirements

Before using this server, make sure the following components are installed on your computer:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. Clone this repository to your local computer:

```shell
git clone https://github.com/YuriiPohorilets/delivery-test-task_server.git
```

2. Navigate to the project folder:

```shell
cd delivery-test-task_server
```

3. Install the dependencies using npm:

```shell
npm install
```

## Running

1. Start the server:

```shell
npm start
```

2. The server will be accessible at `http://localhost:8000`.

## Usage

This server provides an API for managing delivery orders. You can perform various operations such as
creating a new order, updating the status of an order, and retrieving a list of orders.

The API follows the following format:

- `POST /auth/register` - register a user
- `POST /auth/login` - log in a user
- `GET /auth/logout` - log out a user
- `GET /auth/refresh` - refresh the user's token

- `POST /order` - create a new order
- `GET /shops/` - get information about all shops
- `GET /shops/{id}` - get information about the products of a specific shop

---

## Tech stack

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)

---

# [Frontend repository](https://github.com/YuriiPohorilets/delivery-test-task_client)

# [View a demo](https://yuriipohorilets.github.io/delivery-test-task_client/)
