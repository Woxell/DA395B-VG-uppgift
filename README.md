# DA395B-VG-uppgift

## Description
Simple React-based webapp that allows the user to upload an image to have the faces pixelated. 

## Getting Started
1. Install dependencies:
	```bash
	npm install
	```
2. Create an env file and add your API key:  
	*Bash*
	```bash
	cp example.env .env
	```
	*Powershell/CMD*
	```powershell
	copy example.env .env
	```
	Then set `VITE_APILAYER_API_KEY` in `.env`  
3. Start the dev server:
	```bash
	npm run dev
	```
4. Open the local URL shown in the terminal.

## How to use
1. Choose an input method (upload an image or paste an image URL).
2. Submit the image for processing.
3. Preview the pixelated result.
4. Download or save the result from the UI. (Download feature couldn't be implemented due to CORS)

## API
### **Face Pixelizer API**
Info: https://marketplace.apilayer.com/face_pixelizer-api  
Docs: https://marketplace.apilayer.com/face_pixelizer-api#endpoints  

## Libraries
* React (npm)
* react-bootstrap (npm)
* jQuery (npm)
* Bootstrap (npm)

## Author
André Woxell

## License
This project is licensed under the MIT License