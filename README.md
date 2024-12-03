
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

## Project Structure

    4chan-biz-scraper/
    ├── app.js
    ├── controllers/
    │   └── threadController.js
    ├── routes/
    │   └── index.js
    ├── services/
    │   └── fourChanService.js
    ├── utils/
    │   └── htmlParser.js
    ├── public/
    │   └── styles.css
    ├── views/
    │   └── index.html
    ├── Dockerfile
    ├── docker-compose.yml
    ├── package.json
    └── README.md

- **app.js**: Entry point of the application, sets up the Express server.
- **controllers/**: Contains controller functions that handle requests and responses.
- **routes/**: Defines the application routes.
- **services/**: Contains logic for fetching and processing data from the 4chan API.
- **utils/**: Utility functions, such as HTML parsing.
- **public/**: Static assets like CSS files.
- **views/**: HTML templates for rendering the web pages.
- **Dockerfile**: Instructions to build the Docker image.
- **docker-compose.yml**: Configuration for Docker Compose.
- **package.json**: Node.js project metadata and dependencies.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js.
- **node-fetch**: Fetch API implementation for Node.js to make HTTP requests.
- **node-html-parser**: Fast HTML parser to parse and manipulate HTML content.
- **Docker**: Containerization platform to run the application in isolated environments.
- **Docker Compose**: Tool for defining and running multi-container Docker applications.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**: Click on the "Fork" button on the top right to fork this repository.
2. **Clone Your Fork**: Clone your forked repository to your local machine.

       git clone https://github.com/yourusername/4chan-biz-scraper.git

3. **Create a New Branch**: Create a new branch for your feature or bugfix.

       git checkout -b feature/new-feature

4. **Make Changes**: Implement your feature or bugfix.
5. **Commit Changes**: Commit your changes with a descriptive message.

       git commit -am 'Add new feature'

6. **Push to Your Fork**:

       git push origin feature/new-feature

7. **Submit a Pull Request**: Go to the original repository and create a new pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Author**: Your Name
- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **GitHub**: [yourusername](https://github.com/yourusername)

---

*This project is not affiliated with or endorsed by 4chan. Use this tool responsibly and adhere to 4chan's [terms of service](https://www.4chan.org/terms) and [API rules](https://github.com/4chan/4chan-API).*

## Keywords

- 4chan scraper
- 4chan API
- 4chan /biz/ board
- Node.js web scraper
- Express.js application
- Dockerized Node.js app
- Docker Compose setup
- Keyword-based thread search
- Popular posts highlighting
- Web scraping
- HTML parsing
- Image proxying
- Responsive web design
- Node.js Docker image
- Containerized application
