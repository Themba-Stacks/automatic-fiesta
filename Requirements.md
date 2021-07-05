## Uptime monitoring application

This is a uptime monitor allowing users to enter URLs they want monitored, and receive alerts when those resources go down or come back up.

### Specs

1. The API listens on a PORT and accepts incoming HTTP requests for POST, GET, PUT, DELETE and HEAD.
2. The API allows a client to connect, then create a new user, then edit and delete that user.
3. The API allows a user to sing in which gives the m a toke that they can use for subsequent authenticated requests.
4. The API allows the user to sign out which invalidates their token.
5. The API allows a signed-in user to use their token to create a new check.
6. The API allows a signed-in user to edit or delete any of their checks. limit checks to a total of five.
7. in the background, workers perform all the checks at the appropriate times and send alerts to the users when a check changes its state from up to down or visa versa. All the users checks should run once a minute and send a sms if site state has changed.