class JadwalSholatElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        h1 {
            background-color: #2980b9;
            color: #fff;
            padding: 20px;
            margin: 0;
        }
        h2 {
            font-size: 15px;
            background-color: #6cabcf;
            color: #200303;
            padding: 5px;
            margin: 0;
        }
        table {
            border-collapse: collapse;
            margin: 20px auto;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            width: 100%;
        }
        table, th, td {
            border: 1px solid #ccc;
        }
        th {
            background-color: #2980b9;
            color: #fff;
            font-weight: bold;
        }
        td {
            padding: 10px;
            text-align: center;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #ddd;
        }
    </style>

            <div id="jadwal-sholat">
                <h1>Jadwal Sholat Hari ini</h1>
                <h2>untuk wilayah jawa tengah dan sekitarnya.</h2>
                <table>
                    <tr>
                        <th>Waktu</th>
                        <th>Jadwal</th>
                    </tr>
                    <tr>
                        <td>Subuh</td>
                        <td id="subuh"></td>
                    </tr>
                    <tr>
                        <td>Dzuhur</td>
                        <td id="dzuhur"></td>
                    </tr>
                    <tr>
                        <td>Asr</td>
                        <td id="asr"></td>
                    </tr>
                    <tr>
                        <td>Maghrib</td>
                        <td id="maghrib"></td>
                    </tr>
                    <tr>
                        <td>Isha</td>
                        <td id="isha"></td>
                    </tr>
                </table>
            </div>
        `;
        this.fetchAndDisplayJadwalSholat();
    }

    connectedCallback() {
        document.addEventListener("DOMContentLoaded", () => {
            this.fetchAndDisplayJadwalSholat();
        });
    }
  
    fetchAndDisplayJadwalSholat() {
        fetch("https://api.myquran.com/v1/sholat/jadwal/1609/2021/06/23")
            .then((response) => response.json())
            .then((data) => {
                const jadwal = data.data.jadwal;
                this.shadowRoot.getElementById("subuh").textContent = jadwal.subuh;
                this.shadowRoot.getElementById("dzuhur").textContent = jadwal.dzuhur;
                this.shadowRoot.getElementById("asr").textContent = jadwal.ashar;
                this.shadowRoot.getElementById("maghrib").textContent = jadwal.maghrib;
                this.shadowRoot.getElementById("isha").textContent = jadwal.isya;
            })
            .catch((error) => {
                console.error("Gagal mengambil data jadwal sholat.", error);
            });
    }
}
customElements.define('jadwal-sholat', JadwalSholatElement);

