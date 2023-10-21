# Contact-Express-API-with-MongoDB

## Main Components and Summary -
1. Routes for Users and Contacts.
2. Controllers to handle the routes response.
3. Middlewares to intercept the request and handle err.
4. The User And Contact Model.

### User Routes -
1. Register User POST - api/users/register
2. Login User POST - api/users/login (return a jwt token)
3. Current User info GET - api/users/current

### Contact Routes -
send the token in the Authorization or bearer
1. Get All Contacts associated with the token's user GET - /api/contacts
2. Create a Contact POST - /api/contacts
3. Get Contact by Contact Id GET - /api/contacts/:id
4. Update Contact by Contact Id PUT - /api/contacts/:id
5. Delete Contact by Contact Id DELETE - /api/contacts/:id

### IMPORTANT - 
1. CONNECTION_STRING - MongoDB connection String to connect.
2. ACCESS_TOKEN_SECRET - token signature for jwt.<br>
 - Put you mongoDB CONNECTION_STRING and ACCESS_TOKEN_SECRET in the provided .env file or you can create the one with same name.

##### By Jatin Gautam
