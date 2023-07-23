import { useEffect, useState } from "react";
import ThemeContext from "./components/ThemeContext";
import "./index.css";
import CustomTextArea from "./components/CustomTextArea/CustomTextArea";

function App() {
    const [theme, setTheme] = useState();
    const themeContextValue = { theme, setTheme };

	const copyText = () => {
		const textfield = document.getElementById('textfield');
    	textfield.select();
    	document.execCommand('copy');
	}

	const clearText = () => {
		const textfield = document.getElementById('textfield');
		(textfield.value.length != 0) && (textfield.value = '')
	}

	const downloadFile = () => {
		var textcontent = document.getElementById('textfield').value;

  		if (textcontent.length > 0) {
  		  	var downloadableLink = document.createElement("a");
  		  	downloadableLink.setAttribute(
  		    	"href",
  		    	"data:text/plain;charset=utf-8," + encodeURIComponent(textcontent)
  		  	);
  		  	var name = `${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}.txt`;
  		  	downloadableLink.download = name;
  		  	document.body.appendChild(downloadableLink);
  		  	downloadableLink.click();
  		  	document.body.removeChild(downloadableLink);
  		}	
	}

	const uploadFile = () => {

	}

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme");
        if (storedTheme !== (undefined || null)) {
            setTheme(storedTheme);
        } else {
            window.localStorage.setItem("theme", "flashbang");
            setTheme("flashbang");
        }
    }, []);

    useEffect(() => {
        theme && window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <div
                className={[
                    `app w-screen h-screen bg-bg text-text`,
                    `theme-${theme}`,
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <CustomTextArea />
				<div className="absolute top-[92%] left-[25%]">
					<button className="editor-button">
						<span class="material-icons-outlined md-60"> file_upload </span>
					</button>
					<button className="editor-button">
						<span class="material-icons-outlined md-60" onClick={downloadFile}> file_download </span>
					</button>
				</div>
				<div className="absolute top-[92%] right-[25%]">
					<button className="editor-button" onClick={copyText}>
						<span class="material-icons-outlined md-60"> content_copy </span>
					</button>
					<button className="editor-button" onClick={clearText}>
						<span class="material-icons-outlined md-60"> backspace </span>
					</button>
				</div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
