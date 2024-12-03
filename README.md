
# 4chan /biz/ Thread and Post Scraper

A Node.js application that scrapes threads and popular posts from 4chan's **/biz/** board based on user-defined keywords. The application allows users to search for specific topics, displaying threads and their most engaged posts, all within a clean and responsive web interface.

## Features

- **Keyword-Based Search**: Enter any keyword to search for relevant threads on the 4chan **/biz/** board.
- **Popular Posts Highlighting**: Displays posts within threads that have more than one reply, indicating active discussions.
- **Dynamic Content Rendering**: Fetches real-time data from 4chan, ensuring the latest threads and posts are displayed.
- **Image Proxying**: Proxies images from 4chan to avoid mixed content issues and potential CORS problems.
- **Responsive Design**: Mobile-friendly layout for easy viewing on any device.
- **Dockerized Setup**: Easily run the application using Docker and Docker Compose.

## Table of Contents

- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Clone the Repository](#clone-the-repository)
  - [Environment Setup](#environment-setup)
  - [Running with Node.js](#running-with-nodejs)
  - [Running with Docker](#running-with-docker)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

[![4chan /biz/ Scraper Demo]](http://bizsnuff.traagel.dev)

*Note: Replace the image link with an actual screenshot of the application.*

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Docker** (optional, for running with Docker)
- **Docker Compose** (optional, for running with Docker Compose)

## Installation

### Clone the Repository

    git clone https://github.com/yourusername/4chan-biz-scraper.git
    cd 4chan-biz-scraper

### Environment Setup

Ensure you have the required dependencies installed:

- **Node.js** and **npm**: [Download and install](https://nodejs.org/en/download/)
- **Docker** and **Docker Compose**: [Download and install](https://docs.docker.com/get-docker/)

### Running with Node.js

#### Install Dependencies

    npm install

#### Run the Application

    node app.js

#### Access the Application

Open your web browser and navigate to:

    http://localhost:3069/

### Running with Docker

#### Build and Run the Docker Container

   `docker-compose up --build`

#### Access the Application

Open your web browser and navigate to:

    http://localhost:3069/

#### Stop the Docker Container

Press `Ctrl+C` in the terminal running the Docker container, or run:

    docker-compose down

## Usage

1. **Open the Application**: Navigate to `http://localhost:3069/` in your web browser.
2. **Search for Keywords**: Enter any keyword (e.g., `doge`, `btc`, `eth`) into the search bar and click "Search".
3. **View Threads**: Browse through the list of threads that mention your keyword.
4. **Read Popular Posts**: Under each thread, view the popular posts that have sparked active discussions.
5. **Navigate Threads**: Click on the thread titles to visit 
