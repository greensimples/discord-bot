# My Discord Bot

A simple Discord bot built with `discord.py` that responds to a "ping" command with "pong!". This project serves as a basic template for creating more complex bots.

## Features

* Responds to the `!ping` command.
* Simple and easy to understand code.
* Uses `discord.py` library.

## Prerequisites

Before you can run this bot, you'll need the following:

* **Python 3.8 or higher** installed.
* A **Discord Bot Token**. You can get one by creating a new application in the [Discord Developer Portal](https://discord.com/developers/applications).
* The **Message Content Intent** enabled for your bot in the Discord Developer Portal.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/greensimples/discord-bot.git](https://github.com/greensimples/discord-bot.git)
    cd my-discord-bot
    ```

2.  **Install the required Python library:**
    ```bash
    pip install -r requirements.txt
    ```
    *(Note: If you don't have a `requirements.txt` file, you can create one with `pip freeze > requirements.txt` after installing `discord.py`.)*

3.  **Set up your environment variables:**
    * **Do not hardcode your token in the script!** This is a major security risk.
    * Create a file named `.env` in the root directory of your project.
    * Add your bot token to this file like so:
        ```ini
        DISCORD_TOKEN=YOUR_BOT_TOKEN_HERE
        ```
    * Add `.env` to your `.gitignore` file to prevent it from being uploaded to GitHub.

## Usage

To run the bot, simply execute the following command from your terminal:

```bash
python bot.py