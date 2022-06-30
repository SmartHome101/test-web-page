import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';

// import custom components
import Bar from "./components/Bar/Bar";
import TestAPI from "./pages/TestAPI/TestAPI";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import WeatherApp from "./pages/WeatherApp/WeatherApp";
import Rooms from "./pages/Rooms/Rooms";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";


//import avatars
import ramadan from '../src/assests/smartHomeTeam/ramadan.jpg';
import nabil from '../src/assests/smartHomeTeam/nabil.jpg';
import sabek from '../src/assests/smartHomeTeam/sabek.jpg';
import mohamedNour from '../src/assests/smartHomeTeam/mohamedNour.jpg';
import eman from '../src/assests/smartHomeTeam/eman.jpeg';
import bebars from '../src/assests/smartHomeTeam/bebars.jpg';
import alfy from '../src/assests/smartHomeTeam/alfy.JPG';
import salma from '../src/assests/smartHomeTeam/salma.jpg';
import blank_avatar from '../src/assests/smartHomeTeam/blank_avatar.png';


const HomesDb = [
  {
    homeId: 1,
    rooms: [
      {
        roomId: 1,
        roomName: 'Living Room',
        roomIcon: <ChairOutlinedIcon fontSize="large" style={{ fill: '#0072ea' }}/>,
        sensors:
          [
            { 'sensorId': 1, 'sensorName': "Fan", 'SensorTopic': 'home/node1/D1', "sensorStatus": "ON" },
            { 'sensorId': 2, 'sensorName': "Air Conditioner", 'SensorTopic': 'home/node1/D2', "sensorStatus": "OFF" },
            { 'sensorId': 3, 'sensorName': "Smart TV", 'SensorTopic': 'home/node1/D3', "sensorStatus": "ON" },
            { 'sensorId': 4, 'sensorName': "Door 1", 'SensorTopic': 'home/node1/D4', "sensorStatus": "ON" },
            { 'sensorId': 5, 'sensorName': "Door 2", 'SensorTopic': 'home/node1/D5', "sensorStatus": "ON" },
            { 'sensorId': 6, 'sensorName': "Router", 'SensorTopic': 'home/node1/D6', "sensorStatus": "OFF" },
            { 'sensorId': 7, 'sensorName': "Light bulb", 'SensorTopic': 'home/node1/D7', "sensorStatus": "ON" },
            { 'sensorId': 8, 'sensorName': "Window 1", 'SensorTopic': 'home/node1/D8', "sensorStatus": "OFF" },
            { 'sensorId': 9, 'sensorName': "Window 2", 'SensorTopic': 'home/node1/D9', "sensorStatus": "ON" },
          ]
      },
      {
        roomId: 2,
        roomName: 'Bed Room',
        roomIcon: <KingBedOutlinedIcon fontSize="large" style={{ fill: '#0072ea' }}/>,
        sensors:
          [
            { 'sensorId': 1, 'sensorName': "Fan", 'SensorTopic': 'home/node2/D1', "sensorStatus": "OFF" },
            { 'sensorId': 2, 'sensorName': "Light", 'SensorTopic': 'home/node2/D2', "sensorStatus": "ON" },
            { 'sensorId': 3, 'sensorName': "Air Conditioner", 'SensorTopic': 'home/node2/D3', "sensorStatus": "OFF" },
            { 'sensorId': 4, 'sensorName': "Light bulb", 'SensorTopic': 'home/node2/D4', "sensorStatus": "OFF" },
          ]
      },
      {
        roomId: 3,
        roomName: 'Kitchen',
        roomIcon: <KitchenOutlinedIcon fontSize="large" style={{ fill: '#0072ea' }}/>,
        sensors:
          [
            { 'sensorId': 1, 'sensorName': "Fan", 'SensorTopic': 'home/node3/D1', "sensorStatus": "OFF" },
            { 'sensorId': 2, 'sensorName': "Light", 'SensorTopic': 'home/node3/D2', "sensorStatus": "ON" },
            { 'sensorId': 3, 'sensorName': "Refrigerator", 'SensorTopic': 'home/node3/D3', "sensorStatus": "OFF" },
            { 'sensorId': 4, 'sensorName': "Light bulb", 'SensorTopic': 'home/node3/D4', "sensorStatus": "OFF" },
          ]
      }
    ]
  }
]

const smartHomeTeamData = [
  {
    id: 1,
    name: 'Mahmoud Abdallah',
    about: 'Software Engineer | Cloud Team',
    contactInfo: "https://www.linkedin.com/in/mahmoud-abdallah-hassan-942227185/",
    avatar: ramadan,
  },
  {
    id: 2,
    name: 'Mohamed Sabek',
    about: 'Software Engineer | Clould Team',
    contactInfo: "https://www.linkedin.com/in/mohamed-sabek",
    avatar: sabek,
  },
  {
    id: 3,
    name: 'Mohamed Nabil',
    about: 'Machine Learning Developer | Machine Learning team',
    contactInfo: "https://www.linkedin.com/in/mohamed-nabil-410424203/",
    avatar: nabil,
  },
  {
    id: 4,
    name: 'Roqaya Abdullah',
    about: 'Software Engineer | Embedded Systems team',
    contactInfo: 'https://www.linkedin.com/in/roqaya-abdallah-21a3461b6',
    avatar: blank_avatar,
  },
  {
    id: 5,
    name: 'Mohamed Nour',
    about: 'C# and Unity Game developer. | Mobile Application team',
    contactInfo: 'https://www.linkedin.com/in/mohamed-nour-b44955176/',
    avatar: mohamedNour,
  },
  {
    id: 6,
    name: 'Eman Eldeeb',
    about: 'Software Engineer | Machine Learning team',
    contactInfo: 'mailto:emaneldeeb1999@gmail.com',
    avatar: eman,
  },
  {
    id: 7,
    name: 'Mahmoud Bebars',
    about: 'Software Engineer | AI Enthusiast\n Machine Learning team',
    contactInfo: 'https://www.linkedin.com/in/mahmoud-abdullah-723606204/',
    avatar: bebars,
  },
  {
    id: 8,
    name: 'Salma El-Naggar',
    about: 'Software Engineer | Embedded Systems team',
    contactInfo: 'https://www.linkedin.com/in/salma-el-naggar',
    avatar: salma,
  },
  {
    id: 9,
    name: 'Mahmoud ElAlfy',
    about: 'Junior Front-End Developer | Mobile App team',
    contactInfo: 'https://www.linkedin.com/in/mahmoud-elalfy-79b894209',
    avatar: alfy,
  },
  {
    id: 10,
    name: 'Bassem Hussine',
    about: 'Software Engineer | Embedded Systems team',
    contactInfo: '',
    avatar: blank_avatar,
  },


]


const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms HomesDb={HomesDb} />} />
        <Route path="/weather-app" element={<WeatherApp />} />
        <Route path="/test-api" element={<TestAPI />} />
        <Route path="/about" element={<About smartHomeTeamData={smartHomeTeamData} />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
