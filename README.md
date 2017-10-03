///////////////    Terminal Weather App    ////////////////

-----
About 
-----
This Node app takes in an address, city or ZIP code from the user, converts it to latitude and longitude through the Google Geocode API, and returns the current temperature from the Dark Sky weather API, as well as the forecasts for today and tomorrow.

To run from the terminal, navigate to the app folder and run 'node app.js -a="{address, city or ZIP}" ' (without curly braces)

Note that the value added after the -a flag requires quotes if it's a multi-word string, but they can be omitted if you're just entering a ZIP code or single-word city name. The equal sign is also optional.


-----
How to update terminal settings on a Mac
-----
If you want to make checking the weather as fast as typing the word "weather," keep reading. 

You're going to want to create a new alias - weather - in your terminal profile to automatically run the file from any directory. 

1. Take note of full file path for your app file. 

2. Open a new finder window and navigate to your user folder. 

3. Look for a file titled ".profile". It's usually a hidden file, so you might need to show hidden files. Shift + Cmmd + . will toggle showing/hiding hidden files. !!! Note: Use caution editing this file. 

4. In this file, the # signifies a comment. To differentiate my aliases from those defined by the system or other apps, I added a line below the other aliases that says "############## User-defined aliases########" and then "#launch weather app" on the next line.

5. Then you'll add the new alias: alias weather='node {insert your file path} -a={insert your address/city/ZIP}' . Be sure that there are NO spaces before or after the equal sign next to your alias declaration. Save and close.

6. Restart your terminal and type "weather." You should get a nice block of text with some basic weather info. Hooray!