const getllCountriesData = () => {
  axios
    .get("https://corona.lmao.ninja/countries?sort=deaths")
    .then(res => {
      const { data } = res;
      data.map((country, index) => {
        const { cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion } = country;
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
          <td>${index + 1}</td>
          <td>${country.country}</td>
          <td>${cases}</td>
          <td>${todayCases}</td>
          <td>${deaths}</td>
          <td>${todayDeaths}</td>
          <td>${recovered}</td>
          <td>${active}</td>
          <td>${critical}</td>
          <td>${casesPerOneMillion}</td>
          <td>${deathsPerOneMillion}</td>
        </tr>
        `;
        document.getElementById('country-list').appendChild(tr);
      });
    })
    .catch(err => {
      console.error(err);
      const data = countries;
      data.map((country, index) => {
        const { cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion } = country;
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
          <td>${index + 1}</td>
          <td>${country.country}</td>
          <td>${cases}</td>
          <td>${todayCases}</td>
          <td>${deaths}</td>
          <td>${todayDeaths}</td>
          <td>${recovered}</td>
          <td>${active}</td>
          <td>${critical}</td>
          <td>${casesPerOneMillion}</td>
          <td>${deathsPerOneMillion}</td>
        </tr>
        `;
        document.getElementById('country-list').appendChild(tr);
      })
    });
}

getllCountriesData();

const getGlobalData = () => {
  axios
    .get("https://corona.lmao.ninja/all")
    .then(res => {
      const { cases, deaths, recovered, updated } = res.data;
      const info = `
        <h1 class="display-4">Global Stats: </h1>
        <p>Total Cases: ${cases}</p>
        <p class="text-danger">Total Deaths: ${deaths}</p>
        <p class="text-success">Total Recovered: ${recovered}</p>
        <h6>Last updated: ${Date(updated)}</h6>
      `;
      document.getElementById('global').innerHTML = info;
    })
    .catch(err => console.error(err));
}

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const cname = document.getElementById('cname').value;
  axios.get(`https://corona.lmao.ninja/countries/${cname}`)
    .then(res => {
      console.log(res.data);
      const { cases, deaths, country, recovered } = res.data
      const info = `
        <h1>Country: ${country}</h1>
        <p>Total Cases: ${cases}</p>
        <p class="text-danger">Total Deaths: ${deaths}</p>
        <p class="text-success">Total Recovered: ${recovered}</p>
      `;
      const responseDiv = document.getElementById('response');
      responseDiv.innerHTML = info;
    })
    .catch(err => console.log(err)
    )
});

document.addEventListener('DOMContentLoaded', () => getGlobalData())