# Lawsikho Challenge

## Setup Instructions

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com/v2) and signin using your account.

2. Create an organization and note the organization id.

3. Go to **Access Manager > Application > API Keys** and create a new API key with **Organization Project Creator** permission.

4. Note the **Public Key** and **Private Key** of this API key.

5. Clone this repository into your device using `git clone` command, or download and extract the zip folder.

6. Create `/terraform/terraform.tfvars` file and copy the below code in it.

    ```
    atlas_public_key = "YOUR_MONGODB_ATLAS_PUBLIC_KEY"
    atlas_private_key = "YOUR_MONGODB_ATLAS_PRIVATE_KEY"
    db_username = "USERNAME_THAT_IS_USED_TO_CREATE_DB_USER"
    db_password = "PASSWORD_THAT_IS_USED_TO_CREATE_DB_USER"
    ip_whitelist = "YOUR_IP_ADDRESS"
    cluster_name = "Cluster0 OR NAME_OF_YOUR_CHOISE"
    project_name = "Lawshiko-Challenge OR NAME_OF_YOUR_CHOICE"
    atlas_org_id = "YOUR_MONGODB_ATLAS_ORG_ID"
    ```

    Update the values accordingly.

7. Create `/backend/.env` file and copy the below code in it.

    ```
    MONGODB_URI="PASTE_THE_MONGODB_URL_COPIED_FROM_TERMINAL"
    CLIENT_URL="http://localhost:5173"
    ```

    Update the values accodingly.

8. Create `/frontend/.env` file and copy the below code in it.

    ```
    VITE_SERVER_URL="http://localhost:8000"
    ```

    Update the values accodingly.

9. Open linux terminal (or Git Bash) in `/terraform` folder, and run the commands written in `/terraform/setup.bat` file.

10. Open terminal in `/backend` folder and run the `yarn` and `yarn start` command.

11. Wait for **'Server running on port 8000'** message on terminal, it might take a minute for the first time.

12. Open another teminal window in `/frontend` folder and run the `yarn` and `yarn dev` command.

13. Open the url given in the terminal in any browser.

## API Documentation

-   `GET /`

    Returns a simple message indicating the server is running.

-   `GET /character/:name`

    Retrieves a character by name (case-insensitive search).

    **Path Parameters:**

    -   **name:** The name of the character (case-insensitive).

-   `GET /characters`

    Retrieves a paginated list of characters.

    **Query Parameters:**

    -   **page (Optional):** The page number (defaults to 1).

    -   **startswith (Optional):** Filter characters by name starting with this string (case-insensitive search).

-   `GET /episodes` :

    Retrieves the episodes a character appeared in, given their name.

    **Query Parameters:**

    -   **name:** The name of the character.
