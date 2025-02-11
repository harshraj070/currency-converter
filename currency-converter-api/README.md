# Currency Converter API  

## Overview  
This is a simple Node.js API that converts currencies using live exchange rates from a third-party service.  

## Requirements  
- Node.js v20 or higher  
- An API key from [ExchangeRate-API](https://www.exchangerate-api.com/)  

## Setup  
1. Clone the repository:  
   ```sh
   git clone https://github.com/harshraj070/currency-converter-api.git
   ```  
2. Navigate to the project directory:  
   ```sh
   cd currency-converter-api
   ```  
3. Install dependencies:  
   ```sh
   npm install
   ```  
4. Create a `.env` file in the root directory and add:  
   ```
   EXCHANGE_RATE_API_KEY=your_api_key_here
   PORT=3000
   ```  
5. Start the server:  
   ```sh
   npm start
   ```  

## API Endpoints  

### 1️⃣ Get Exchange Rates  
**Request:**  
```
GET /rates?base=USD
```  
**Response:**  
```json
{
  "base_code": "USD",
  "conversion_rates": {
    "INR": 82.50,
    "EUR": 0.92
  }
}
```  

### 2️⃣ Convert Currency  
**Request:**  
```
GET /convert?from=USD&to=INR&amount=100
```  
**Response:**  
```json
{
  "from": "USD",
  "to": "INR",
  "amount": "100",
  "convertedAmount": "8250.00",
  "rate": 82.50
}
```  

## Notes  
- Ensure you have a valid API key before running the project.  
- Supports all major world currencies.  
- Handles errors for invalid inputs.  

## License  
MIT  
