# WeatherApp
- Weather Forcasting application built with Angular. 
- The application uses the Weatherstack API anf REST framework to retrieve instant, accurate weather information for
any location in the world in lightweight JSON format.
- Angular is a development platform, built on TypeScript which includes a component-based framework for building scalable web applications, a collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, etc. and a suite of developer tools to help you develop, build, test, and update your code.

# Using WeatherApp
- To use this application, clone this repository using
-     $ git clone https://github.com/Chinmayeegade/Angular_API_Weather_App.git
- Generate an API key from https://weatherstack.com/dashboard
- Replace [YOUR_API_KEY] with the generated API key on line 13 in the Angular_API_Weather_App/src/app/apixu.service.ts file.
-       getWeather(location : any) {
          return this.http.get(
            "http://api.weatherstack.com/current?access_key=[YOUR_API_KEY]&query=" + location
           );
        }
      }
- Start the development server 
-      $ ng serve
- The app will be accessible on http://localhost:4200       
