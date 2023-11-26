import moment from "moment"

const  brightness = (curr_time, day_info) => {
    const { sunrise, sunset, civil_twilight_begin: dawn, civil_twilight_end: dusk } = day_info

    const day_period = moment(sunset).diff(moment(sunrise),"ms")

    // just used to scale between 0 and 1
    // could have also just started at dawn and ended at dusk
    // but slightly more accurate this way :)
    const vertical_rise = Math.sin((moment(dawn) - moment(sunrise)) * Math.PI / day_period)

    const x = curr_time.isBetween(dawn,dusk) ?
        (1 / (1 - vertical_rise)) * (Math.sin((curr_time - moment(sunrise)) * Math.PI / day_period) - vertical_rise) : 0

    return x
}

const Rise = () => {

    // setting loaded variable to false, so that I can update it later, so sun/moon only rises one time
    let loaded = false;

    const main = document.querySelector("#root");
    const sunDiv = document.createElement("div");
    sunDiv.classList.add("sun_moon", "sun_moonrise");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "sun"
    const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
    sunDiv.classList.add("sun_moon");
    svg.setAttribute("height", "100vw");
    svg.setAttribute("width", "100vw");
    circle.setAttribute("cx","50vw");
    circle.setAttribute("cy","50vw");
    circle.setAttribute("r","50vw");
    svg.appendChild(circle);
    sunDiv.appendChild(svg);

    let url = "https://api.sunrise-sunset.org/json?lat=43.4643&lng=-80.5204&formatted=0&date=";
    let date = moment().format("YYYY-MM-DD");
    url += date;
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let sunrise = moment(data.results.sunrise);
            let sunset = moment(data.results.sunset);
            document.body.classList.toggle("night",!(moment().isBetween(sunrise,sunset)));
            return data.results;
        })
        .catch(err => {
            if (err) {
                return {
                    sunrise: moment().hour(6),
                    sunset: moment().hour(18),
                    civil_twilight_begin:  moment().hour(5).minute(30),
                    civil_twilight_end:  moment().hour(18).minute(30)
                }
            }
        })
        .then(res => {
            let lightness = brightness(moment(),res)
            let HSL = `hsl(197, 71%, ${lightness * 70}%)`
            let skylight = `hsla(197, 90%, ${lightness * 80 + 15}%, ${(1 - lightness) * 100}%)`
            document.documentElement.style = `--sky-color:${HSL}; --sky-light-color:${skylight}`
        })

    const makeSunrise = () => {
        if (loaded || !document.hasFocus()) return
        if (sunDiv) sunDiv.remove();

        main.prepend(sunDiv);

        window.removeEventListener("focus",makeSunrise)
        window.removeEventListener("load",makeSunrise)

        loaded = true;
    }

    window.addEventListener("focus", makeSunrise);

    window.addEventListener("load", makeSunrise);

}

export default Rise