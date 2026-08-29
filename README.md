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
	Then set `VITE_APYHUB_API_KEY` in `.env`  
3. Start the dev server:
	```bash
	npm run dev
	```
4. Open the local URL shown in the terminal.

## How to use
1. Choose an input method (upload an image or paste an image URL).
	
	Example JPG: https://hips.hearstapps.com/hmg-prod/images/01-prince-harry-meghan-markle-1517172379.jpg
	
	Example PNG: https://inside.montclair.edu/sites/default/files/styles/1120x1120/public/2026-06/Collegium%2025-26.png 
2. Submit the image for processing.
3. Preview the pixelated result.
4. Download or save the result from the UI.

## API
### **Face Pixelizer API**
Info: https://apyhub.com/apyhub/service/pixelize  
Docs: 
* https://apyhub.com/apyhub/service/pixelize#ep-image-url-pixelized-image-download 
* https://apyhub.com/apyhub/service/pixelize#ep-upload-image-file-pixelized-image-downlo <- not a typo

## Libraries
* React (npm)
* react-bootstrap (npm)
* Bootstrap (npm)

## Author
André Woxell

## License
This project is licensed under the MIT License