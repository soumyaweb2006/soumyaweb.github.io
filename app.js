// Sample train data – replace with IoT/Backend data later
const trains = [
  {
    id: 'Trainset 01',
    fitness: 'Valid till 2025-12-15',
    status: 'green',
    lastMaintenance: '2025-09-20',
    mileage: '120,000 km',
    branding: '80% completed',
    nextInspection: '2025-10-01'
  },
  {
    id: 'Trainset 02',
    fitness: 'Expired – needs renewal',
    status: 'red',
    lastMaintenance: '2025-08-15',
    mileage: '150,000 km',
    branding: '40% completed',
    nextInspection: '2025-09-27'
  },
  {
    id: 'Trainset 03',
    fitness: 'Valid till 2026-01-10',
    status: 'orange',
    lastMaintenance: '2025-09-01',
    mileage: '130,000 km',
    branding: '60% completed',
    nextInspection: '2025-10-10'
  }
];

const container = document.getElementById('trainContainer');

function renderTrains(data) {
  container.innerHTML = '';
  data.forEach(train => {
    container.innerHTML += `
      <div class="train-card">
        <h2>${train.id}</h2>
        <p><strong>Fitness Certificate:</strong> ${train.fitness}</p>
        <p><strong>Last Maintenance:</strong> ${train.lastMaintenance}</p>
        <p><strong>Mileage:</strong> ${train.mileage}</p>
        <p><strong>Branding Status:</strong> ${train.branding}</p>
        <p><strong>Next Inspection:</strong> ${train.nextInspection}</p>
        <p class="status ${train.status}">Status: ${train.status.toUpperCase()}</p>
      </div>
    `;
  });
}

renderTrains(trains);

// Search/Filter functionality
document.getElementById('searchInput').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  const filtered = trains.filter(t =>
    t.id.toLowerCase().includes(searchValue)
  );
  renderTrains(filtered);
});
