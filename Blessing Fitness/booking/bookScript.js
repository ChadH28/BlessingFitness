/* exported gapiLoaded 
      /* exported gisLoaded */
      /* exported handleAuthClick */
      /* exported handleSignoutClick */

      // TODO(developer): Set to client ID and API key from the Developer Console
      const CLIENT_ID = '529672165494-nf0k95n07m0ku154608n0gu4rl6oouit.apps.googleusercontent.com';
      const API_KEY = 'AIzaSyAo_L15FmEfCteYg54F5l3-ITBoVXsrOqk';

      // Discovery doc URL for APIs used by the quickstart
      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/calendar';

      let tokenClient;
      let gapiInited = false;
      let gisInited = false;

      // document.getElementById('authorize_button').style.visibility = 'hidden';
    //   document.getElementById('signout_button').style.visibility = 'hidden';
      document.getElementById('bookButton').style.visibility = 'hidden' ;
      document.getElementById('dateIn').style.visibility = 'hidden';
      document.getElementById('timeIn').style.visibility = 'hidden';
      document.getElementById('dateInput').style.visibility = 'hidden';
      document.getElementById('timeInput').style.visibility = 'hidden';
      /**
       * Callback after api.js is loaded.
       */
      function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
      }

      /**
       * Callback after the API client is loaded. Loads the
       * discovery doc to initialize the API.
       */
      async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
        maybeEnableButtons();
      }

      /**
       * Callback after Google Identity Services are loaded.
       */
      function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
        gisInited = true;
        maybeEnableButtons();
      }

      /**
       * Enables user interaction after all libraries are loaded.
       */
      function maybeEnableButtons() {
        if (gapiInited && gisInited) {
          document.getElementById('authorize_button').style.visibility = 'visible';
          
          
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick() {
        tokenClient.callback = async (resp) => {
          if (resp.error !== undefined) {
            throw (resp);
          }
        //   document.getElementById('signout_button').style.visibility = 'visible';
          // document.getElementById('authorize_button').innerText = 'Refresh';
          document.getElementById('bookButton').style.visibility = 'visible';
          document.getElementById('dateIn').style.visibility = 'visible';
          document.getElementById('timeIn').style.visibility = 'visible';
          document.getElementById('dateInput').style.visibility = 'visible';
          document.getElementById('timeInput').style.visibility = 'visible';
          await listUpcomingEvents();
        };

        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({prompt: ''});
        }
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');
          document.getElementById('content').innerText = '';
          // document.getElementById('authorize_button').innerText = 'Authorize';
        //   document.getElementById('signout_button').style.visibility = 'hidden';
          document.getElementById('bookButton').style.visibility = 'hidden';
          document.getElementById('dateIn').style.visibility = 'hidden';
          document.getElementById('timeIn').style.visibility = 'hidden';
          document.getElementById('dateInput').style.visibility = 'hidden';
          document.getElementById('timeInput').style.visibility = 'hidden';
        }
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      async function listUpcomingEvents() {
        let response;
        try {
          const request = {
            'calendarId': 'e45ebb649a6b1ef5e0e9492a75572238103b2ff41f539190d75c1a2fa56f9b20@group.calendar.google.com',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime',
          };
          response = await gapi.client.calendar.events.list(request);
        } catch (err) {
          document.getElementById('content').innerText = err.message;
          return;
        }

        const events = response.result.items;
        if (!events || events.length == 0) {
          document.getElementById('content').innerText = 'No events found.';
          return;
        }
        // Flatten to string to display
        const output = events.reduce(
            (str, event) => `${str}${event.summary} (${event.start.dateTime || event.start.date})\n`,
            'Events:\n');
        document.getElementById('content').innerText = output;
      }

      async function addEventToCalendar() {
        
        let dateTime = convertToISO()
        let startDate = new Date(dateTime)
        startDate.setHours(startDate.getHours()-2)
        startDate = new Date(startDate.getTime() + 60 * 60 * 1000 * 2);
        dateTime = startDate.toISOString();
        const isoEndDate = new Date(startDate.getTime() + 60 * 60 * 1000);
        const endDate = isoEndDate.toISOString();
        document.getElementById('content').innerText = dateTime

       

      var event = {
        'summary': 'Package 1',
        'start': {
          'dateTime': dateTime ,
          'timeZone': 'Africa/Johannesburg'
        },
        'end': {
          'dateTime': endDate ,
          'timeZone': 'Africa/Johannesburg'
        },
        "attendees": [
          {"email": "44nator@gmail.com"}
        ]
      };

      gapi.client.calendar.events.insert({
        'calendarId': 'e45ebb649a6b1ef5e0e9492a75572238103b2ff41f539190d75c1a2fa56f9b20@group.calendar.google.com', // Use 'primary' for user's primary calendar
        'resource': event
      }).then(function(response) {
        showGreenTick()
        const output = 'Event created: ' + response.result.htmlLink
        // console.log('Event created: ' + response.result.htmlLink);
        document.getElementById('content').innerText = output
        document.getElementById('content').innerText = dateTime;
        
      });
    }

    function convertToISO() {
        // Get the date and time inputs
        var dateInput = document.getElementById("dateInput").value;
        var timeInput = document.getElementById("timeInput").value;
         if (dateInput.trim() === '' || timeInput.trim() === '') {
            alert('Please select both a date and a time.');
            return;
        }
        // Combine the date and time inputs
        var dateTimeString = dateInput + "T" + timeInput + ":00";
        return dateTimeString
    
      }
      function showGreenTick() {
        // Show the green tick element
        var greenTick = document.getElementById("greenTick");
        greenTick.style.display = "inline"; // Display the tick

        // Optionally, you can disable the button after it's clicked
        var myButton = document.getElementById("bookButton");
        myButton.disabled = true;
    }
      