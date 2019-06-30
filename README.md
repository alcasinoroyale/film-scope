#Film Scope
Film Scope is a react app with a rails API that gives users the ability to search for films in a variety of genres and create a list of favorites.

## Installation
Follow these instructions to start up the application.

1. Clone repository from GitHub
$ git clone https://github.com/alcasinoroyale/film-scope.git

2. CD into film-scope directory and install bundle
$ cd film-scope && bundle install

3. Migrate and seed database to implement users
$ rake db:migrate && rake db:seed

4. CD into client directory and install dependencies
$ cd client && npm install

5. Create an .env file to store the TMDB API Key
$ touch .env

6. If existing TMDB API Key doesn't work, you can receive one at themoviedb.org. Then set up the API KEY with REACT_APP_FILM_API_KEY = (fill in with your key chars) inside the .env file.

7. Add the .env file to .gitignore so the API Key is hidden, filmActions.js is set to process this API KEY.

8. CD back into project directory and start the development server
$ cd .. && rake start

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/alcasinoroyale/film-scope. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.
