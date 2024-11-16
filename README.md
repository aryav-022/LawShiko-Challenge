Copy the below code in `terraform.tfvars` file

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

Create `.env` files in `./backend` folder.
Copy the below code in it.

```
MONGODB_URI="PASTE_THE_MONGODB_URL_COPIED_FROM_TERMINAL"
CLIENT_URL="http://localhost:5173"
```

Create `.env` files in `./frontend` folder.
Copy the below code in it.

```
VITE_SERVER_URL="http://localhost:8000"
```
