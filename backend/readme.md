# Weather App Backend

## Overview

This backend application starts a server at your desired port . It also creates REST API which allows you to fetch customised and ordered weather data based on city names.For accurate data OpenWeather API is used in backend which is then handled for error and customisations. The backend is built using **Node.js** and **Express**. The frontend will interact with this API to display weather data.

## Setup

To get started with the backend, follow these steps:

<!-- ### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-backend.git
cd weather-backend
``` -->

### 1. Create `.env` File

In the root directory of the project, create a `.env` file with the following content:

```
API_BASE_URL=http://api.openweathermap.org
API_KEY=<Yourapikey>
PORT=<port>
```

- **API_KEY**: Replace `yourapikey` with your actual OpenWeather API key.
- **PORT**: The port where your server will run (default is `3001`).

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Start the Server

After installing the dependencies, start the server by running:

```bash
npm start
```

Your server should now be running at `http://localhost:3001`.

## Features

- **Geocoding Service**: Converts city names into latitude and longitude.
- **Weather Service**: Fetches weather data from OpenWeather API based on latitude and longitude.
- **Weather Data Endpoint**: Returns weather information including temperature, pressure, humidity, and sunrise/sunset times.



