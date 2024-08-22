const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const EXCEL_FILE = path.join(__dirname, 'EmployeeInfo.xlsx');

function initializeExcel() {
  if (!fs.existsSync(EXCEL_FILE)) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(wb, ws, "Employee Data");
    XLSX.writeFile(wb, EXCEL_FILE);
  }
}

function appendToExcel(data) {
  const wb = XLSX.readFile(EXCEL_FILE);
  const ws = wb.Sheets["Employee Data"];
  const jsonData = XLSX.utils.sheet_to_json(ws);
  jsonData.push(data);
  const newWs = XLSX.utils.json_to_sheet(jsonData);
  wb.Sheets["Employee Data"] = newWs;
  XLSX.writeFile(wb, EXCEL_FILE);
}

app.post('/submit', (req, res) => {
  try {
    const data = req.body;
    appendToExcel(data);
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Failed to save data' });
  }
});

app.post('/submit-offline-data', (req, res) => {
  try {
    const { data } = req.body;
    if (Array.isArray(data)) {
      data.forEach(item => appendToExcel(item));
    } else if (typeof data === 'object') {
      appendToExcel(data);
    } else {
      throw new Error('Invalid data format');
    }
    res.status(200).json({ message: 'Offline data saved successfully' });
  } catch (error) {
    console.error('Error saving offline data:', error);
    res.status(500).json({ message: 'Failed to save offline data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  initializeExcel();
});