# Resident Evil Characters Database

## Overview

This project provides a Dockerized setup for a Resident Evil characters database. It includes a PostgreSQL database container and a simple web API using express to interact with the database.

## Contents

- [Setup](#setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/resident-evil-characters.git
    ```

2. Navigate to the project directory:

    ```bash
    cd resident-evil-characters
    ```

3. Build and run the Docker containers:

    ```bash
    docker-compose up --build
    ```

   This will launch the PostgreSQL database container with express server.

## Usage

Access the web API at `http://localhost:3000`. The PostgreSQL database is exposed on `localhost:5432`.

## Endpoints

- `GET api/char`: Retrieve all characters in the database.


## Contributing

Contributions to this project are welcome! If you have improvements or additional features to suggest, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
