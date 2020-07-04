# Avatar Expander

Tugas 2 Seleksi Ca-Labpro 2020. Made by Morgen Sudyanto - 13518093.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will only need to install NodeJS. Other dependencies will be installed automatically when you start the server. You can get NodeJS from [here](https://nodejs.org/en/).

### Running Locally

Simply run this command to start the server. Your browser will be opened automatically. If not, visit http://localhost:3000 in your browser.
```
npm start
```

## How to Use

* Enter id to search.
* Click on a node or on a friend in the friend list to search that node.
* Double click on a node to expand from that node.
* Scroll down/up to zoom in/out.
* Drag and drop on an empty space to move the graph.

## Built With

* [ReactJS](https://reactjs.org/) - Frontend framework
* [Material-UI](https://material-ui.com/) - React UI framework
* [React-d3-graph](https://github.com/danielcaldas/react-d3-graph) - Graph visualization library
* [NodeJS](https://nodejs.org/en/) - Backend framework

## Review API
- Self friend: 12<br>
Suspect with id 12 is friends with another suspect with the same id.
```
{"status":200,"payload":{"id":"12","name":"Rizki Sulis Syarifuddin","friends":[{"id":"54","name":"Jonathan Mirza","element":"earth"},{"id":"13","name":"Ariyanti Hasna Ilham","element":"fire"},{"id":"12","name":"Rizki Sulis Syarifuddin","element":"water"},{"id":"184","name":"Valentinus Rumapea Albisthami","element":"water"},{"id":"76","name":"Ghani Hollyana Rafi Irsandy","element":"air"}],"element":"water"},"message":""}
```
- Duplicate friends: 5<br>
Suspect with id 70 appears twice in the friend list.
```
{"status":200,"payload":{"id":"5","name":"Byan Ravid","friends":[{"id":"70","name":"Raihan Yumna Daniel","element":"water"},{"id":"70","name":"Raihan Yumna Daniel","element":"water"},{"id":"7","name":"Alamsyah Nurrosyid Hudan","element":"air"},{"id":"113","name":"Yonatan Ekananda","element":"air"},{"id":"75","name":"Olivia Sosrodimardito Kevin","element":"air"},{"id":"151","name":"Karuna Qurrata Lucky","element":"earth"},{"id":"34","name":"Rafi' Dzakiy Salim","element":"air"},{"id":"44","name":"Elisabeth Chokyi Bezalel","element":"water"},{"id":"32","name":"Nasharudin Aziz Fauzi","element":"air"},{"id":"107","name":"Arfananda Rahim Elbert Dhafin","element":"fire"}],"element":"earth"},"message":""}
```

## Authors

* **Morgen Sudyanto** - [moondemon68](https://github.com/moondemon68)
