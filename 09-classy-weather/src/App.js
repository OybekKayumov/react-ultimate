import React from 'react';

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

class App extends React.Component {
  state = {
    // location: 'lisbon',
    location: '',
    isLoading: false,
    displayLocation: '',
    weather: {},
  };

  // constructor(props) {
    // super(props);
    // this.fetchWeather = this.fetchWeather.bind(this);
  // }
  
  // async fetchWeather() {
  fetchWeather = async () => {
    // console.log('Loading data...');
    // console.log('this: ', this);

    // not only return, but also set the state to empty weather again
    if (this.state.location.length < 2) return this.setState({ weather: {} });

    try {
      this.setState({ isLoading: true })  // update state
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);
  
      if (!geoData.results) throw new Error("Location not found");
  
      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);
      console.log(`${name} ${convertToFlag(country_code)}`);
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`
      });
  
      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      console.log(weatherData.daily);
      this.setState({ weather:  weatherData.daily });
    } catch (err) {
      console.error(err);
    } finally {
      this.setState({ isLoading: false })
    }
  }

  setLocation = e => this.setState({location: e.target.value});

  // called immediately after rendering, after the dom has been created
  // like a use effect hook with the empty dependency array  
  componentDidMount() {
    // as soon as the app is loaded it'll immediately start fetching for the weather
    // this.fetchWeather();

    this.setState({location: localStorage.getItem('location') || "" });
  }

  // React gives it access to the previous state and the previous props
  // useEffect[location]
  // search as we type
  componentDidUpdate(prevProps, prevState) {
    if (this.state.location !== prevState.location) {
      this.fetchWeather();

      localStorage.setItem('location', this.state.location); // already a string
    }
  }
  
  render() {
    return (
      <div className='app'>
        <h1>Classy Weather</h1>
        {/* <div>
          <input 
            type="text" 
            placeholder='Search from location...'
            value={this.state.location}
            onChange={e => this.setState({location: e.target.value})}
          />
        </div> */}
        <Input 
          location={this.state.location}
          onChangeLocation={this.setLocation}
        />
        
        <button
          onClick={this.fetchWeather}
        >
          Get weather
        </button>

        {this.state.isLoading && 
          <p className='loader'>
            Loading...
          </p> 
        }

        {this.state.weather.weathercode && (
          <Weather 
            weather={this.state.weather}
            location={this.state.displayLocation}
        />)}
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <div>
        <input 
          type="text" 
          placeholder='Search from location...'
          // value={this.state.location}
          value={this.props.location}
          // onChange={e => this.setState({location: e.target.value})}
          onChange={this.props.onChangeLocation}
        />
      </div>
    )
  }
}

class Weather extends React.Component {
  // similar to returning a cleanup function from a effect function
  // The difference is that this one really only runs after the component unmounts, so after it disappears and is destroyed, not between renders.
  componentWillUnmount() {
    console.log('weather will unmount...');
  }

  render() {
    console.log('this.props: ', this.props);
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes
    } = this.props.weather

    return (
      <div>
        <h2>Weather for {this.props.location}</h2>
        <ul className='weather'>
          {dates.map((date, i) => (
            <Day 
              date={date}
              max={max.at(i)}
              min={min.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    )
  }
}

class Day extends React.Component {
  render() {
    const {date, max, min, code, isToday} = this.props;
    
    return (
      <li className='day'>
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? 'Today' : formatDay(date)}</p>
        <p>
          {min}&deg; &mdash; <strong>{max}&deg;</strong>
        </p>
      </li>
    )
  }
}

export default App;
