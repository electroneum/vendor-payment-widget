document.addEventListener("DOMContentLoaded", function() {
    // Array of translation texts
    const langs = {
        en: "Scan with the app or click to pay"
    };

    // Select each ETN Vendor element
    var els = document.querySelectorAll('[data-etn-vendor]');
    for (i = 0; i < els.length; ++i) {
        // Extract the vendor configuration strings
        var code = els[i].getAttribute("data-etn-vendor");
        var lang = els[i].getAttribute("data-etn-lang");
        var text = '';
        if (typeof(lang) === 'undefined' || lang === null) {
            lang = 'en';
        }
        if (typeof(langs[lang]) === 'undefined') {
            console.warn('Electroneum vendor payment language unknown: ' + lang);
            text = langs['en'];
        } else {
            text = langs[lang];
        }

        // Create the container
        var container = document.createElement("div");
        container.classList.add("etn-payment");
        container.style.backgroundColor = "#FFFFFF";
        container.style.paddingBottom = "5px"
        container.style.border = "12px solid #FFFFFF";
        container.style.borderBottomWidth = "6px";
        container.style.borderRadius = "8px";
        container.style.boxShadow = "0 2px 8px 0 rgba(50, 50, 50, 0.2)";
        container.style.width = "180px";
        container.style.textDecoration = "none";
        container.style.color = "#333333";
        container.style.textAlign = "center";
        container.style.cursor = "pointer";
        container.onclick = function () {
            window.open("https://link.electroneum.com/jWEpM5HcxP?vendor=" + code);
        };

        // Create the content
        var content = document.createElement("div");
        content.style.position = "relative";
        content.style.boxSizing = "content-box";
        content.style.border = "4px solid #333333";
        content.style.borderRadius = "4px";

        // Create the QR code
        var qr = document.createElement("img");
        qr.src = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=L|0&chl=" + encodeURI('https://link.electroneum.com/jWEpM5HcxP?vendor=' + code);
        qr.style.boxSizing = "border-box";
        qr.style.border = "8px solid #FFFFFF";
        qr.style.marginBottom = "10px";
        qr.style.width = "100%";

        // Create the label image
        var labelImage = document.createElement("img");
        labelImage.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTg1LjQgMjYwLjMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDExODUuNCAyNjAuMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMwQzM1NDg7fQoJLnN0MXtmaWxsOiMyQUIxRjM7fQo8L3N0eWxlPgo8dGl0bGU+YWx0LWNvbG91cnM8L3RpdGxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzk5LjcsMTE5LjJ2MjYuNGgtNjMuOXYxNi4xYzAuMSwyLjcsMi4yLDQuOCw0LjksNC45aDU5djEwLjNoLTU5Yy04LjQsMC0xNS4yLTYuOC0xNS4yLTE1LjJjMCwwLDAsMCwwLDAKCXYtNDIuNWMwLTguNCw2LjgtMTUuMiwxNS4yLTE1LjJjMCwwLDAsMCwwLDBoNDMuN0MzOTIuOCwxMDMuOSwzOTkuNiwxMTAuNywzOTkuNywxMTkuMkMzOTkuNywxMTkuMSwzOTkuNywxMTkuMSwzOTkuNywxMTkuMnoKCSBNMzg5LjIsMTM1LjN2LTE2LjFjMC0yLjctMi4yLTQuOS00LjktNC45aC00My43Yy0yLjcsMC4xLTQuOCwyLjItNC45LDQuOXYxNi4xSDM4OS4yeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDIwLjIsODAuMnY4MS41YzAuMSwyLjcsMi4yLDQuOCw0LjksNC45aDEyLjN2MTAuM2gtMTIuM2MtOC40LDAtMTUuMi02LjgtMTUuMi0xNS4yYzAsMCwwLDAsMCwwVjgwLjJINDIwLjJ6IgoJLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTUyMCwxMTkuMnYyNi40aC02My45djE2LjFjMC4xLDIuNywyLjIsNC44LDQuOSw0LjloNTl2MTAuM2gtNTljLTguNCwwLTE1LjItNi44LTE1LjItMTUuMmMwLDAsMCwwLDAsMHYtNDIuNQoJYzAtOC40LDYuOC0xNS4yLDE1LjItMTUuMmMwLDAsMCwwLDAsMGg0My43QzUxMy4xLDEwMy45LDUyMCwxMTAuNyw1MjAsMTE5LjJDNTIwLDExOS4xLDUyMCwxMTkuMSw1MjAsMTE5LjJ6IE01MDkuNywxMzUuM3YtMTYuMQoJYzAtMi43LTIuMi00LjktNC45LTQuOWgtNDMuN2MtMi43LDAuMS00LjgsMi4yLTQuOSw0Ljl2MTYuMUg1MDkuN3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTYwNC40LDE2Ni42djEwLjNoLTU5Yy04LjQsMC0xNS4yLTYuOC0xNS4yLTE1LjJjMCwwLDAsMCwwLDB2LTQyLjVjMC04LjQsNi44LTE1LjIsMTUuMi0xNS4yYzAsMCwwLDAsMCwwaDU4LjgKCXYxMC4zaC01OC44Yy0yLjcsMC4xLTQuOCwyLjItNC45LDQuOXY0Mi41YzAuMSwyLjcsMi4yLDQuOCw0LjksNC45TDYwNC40LDE2Ni42eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjI0LjksMTE0LjN2NDcuM2MwLjEsMi43LDIuMiw0LjgsNC45LDQuOWgyNi42djEwLjNoLTI2LjZjLTguNCwwLTE1LjEtNi44LTE1LjItMTUuMWMwLDAsMC0wLjEsMC0wLjFWODAuMQoJSDYyNVYxMDRoMzEuNXYxMC4zTDYyNC45LDExNC4zeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIyLjEsMTA0djEwLjNoLTQwLjljLTIuNywwLjEtNC44LDIuMi00LjksNC45djU3LjZINjY2di01Ny42YzAtOC40LDYuOC0xNS4yLDE1LjItMTUuMmMwLDAsMCwwLDAsMEg3MjIuMXoiCgkvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzg4LjQsMTA0YzguNCwwLDE1LjMsNi43LDE1LjMsMTUuMWMwLDAsMCwwLDAsMC4xdjQyLjVjMCw4LjQtNi44LDE1LjItMTUuMiwxNS4yYzAsMCwwLDAtMC4xLDBoLTQzLjcKCWMtOC40LDAtMTUuMi02LjgtMTUuMi0xNS4yYzAsMCwwLDAsMCwwdi00Mi41YzAtOC40LDYuOC0xNS4yLDE1LjItMTUuMmMwLDAsMCwwLDAsMEg3ODguNHogTTc0NC43LDExNC4zYy0yLjcsMC4xLTQuOCwyLjItNC45LDQuOQoJdjQyLjVjMC4xLDIuNywyLjIsNC44LDQuOSw0LjloNDMuN2MyLjcsMCw0LjktMi4yLDQuOS00Ljl2LTQyLjVjMC0yLjctMi4yLTQuOS00LjktNC45TDc0NC43LDExNC4zeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODg5LjEsMTE5LjJ2NTcuNmgtMTAuM3YtNTcuNmMtMC4xLTIuNy0yLjItNC44LTQuOS00LjloLTQzLjdjLTIuNywwLTQuOSwyLjItNSw0Ljl2NTcuNmgtMTAuM1YxMDRoNTkKCWM4LjQsMCwxNS4yLDYuNywxNS4yLDE1LjFDODg5LjEsMTE5LjEsODg5LjEsMTE5LjEsODg5LjEsMTE5LjJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05NzYuMiwxMTkuMnYyNi40aC02My45djE2LjFjMC4xLDIuNywyLjIsNC44LDQuOSw0LjloNTl2MTAuM2gtNTljLTguNCwwLTE1LjItNi44LTE1LjItMTUuMmMwLDAsMCwwLDAsMAoJdi00Mi41YzAtOC40LDYuOC0xNS4yLDE1LjItMTUuMmMwLDAsMCwwLDAsMGg0My43Qzk2OS4zLDEwMy45LDk3Ni4yLDExMC43LDk3Ni4yLDExOS4yQzk3Ni4yLDExOS4xLDk3Ni4yLDExOS4xLDk3Ni4yLDExOS4yegoJIE05NjUuOCwxMzUuM3YtMTYuMWMwLTIuNy0yLjItNC45LTQuOS00LjloLTQzLjdjLTIuNywwLjEtNC44LDIuMi00LjksNC45djE2LjFIOTY1Ljh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDYzLjMsMTA0djU3LjZjMCw4LjQtNi44LDE1LjItMTUuMiwxNS4yYzAsMCwwLDAtMC4xLDBoLTQzLjdjLTguNCwwLTE1LjItNi44LTE1LjItMTUuMmMwLDAsMCwwLDAsMFYxMDQKCWgxMC4zdjU3LjZjMC4xLDIuNywyLjIsNC44LDQuOSw0LjloNDMuN2MyLjcsMCw0LjktMi4yLDUtNC45VjEwNEgxMDYzLjN6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTg1LjQsMTE5LjJ2NTcuNmgtMTAuMnYtNTcuNmMtMC4xLTIuNy0yLjMtNC45LTUtNC45aC0zMC4zYy0yLjcsMC00LjksMi4yLTQuOSw0Ljl2NTcuNmgtMTAuM3YtNTcuNgoJYy0wLjEtMi43LTIuMi00LjgtNC45LTQuOWgtMzAuNGMtMi43LDAuMS00LjgsMi4yLTQuOSw0Ljl2NTcuNmgtMTAuNFYxMDRoOTYuMmM4LjMsMCwxNS4xLDYuNywxNS4yLDE1CglDMTE4NS40LDExOSwxMTg1LjQsMTE5LjEsMTE4NS40LDExOS4yeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTc1LjksMTAwLjNsMjEuNiwxNi40bDEzLjcsMTAuM2wtMTUuMiw3LjhsLTMwLjcsMTUuN2wxMC41LDcuM2wxNC43LDEwLjJsLTE1LjksOC4ybC05Ny41LDUwLjMKCWM1My4xLDI5LjIsMTE5LjksOS45LDE0OS4xLTQzLjNjMjEuOC0zOS42LDE3LjEtODguNS0xMS45LTEyMy4yTDE3NS45LDEwMC4zeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODQuMSwxNjUuOGwtMjEuNi0xNi40bC0xMy43LTEwLjNsMTUuMi03LjhsMzAuNy0xNS43bC0xMC41LTcuM0w2OS41LDk4LjFsMTUuOS04LjJsMTAyLjctNTMKCUMxMzYuNyw0LjgsNjguOSwyMC41LDM2LjksNzEuOUMxMSwxMTMuNCwxNS43LDE2Nyw0OC4zLDIwMy40TDg0LjEsMTY1Ljh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MS43LDIxMC42Qy0yLjgsMTYxLjgsMC44LDg2LjIsNDkuNSw0MS44QzkwLjcsNC4zLDE1Mi4zLDAuMiwxOTguMSwzMmwxMC43LTUuNUMxNTEuNS0xNyw2OS45LTUuOCwyNi40LDUxLjUKCWMtMzguMSw1MC4yLTM0LjcsMTIwLjUsOCwxNjYuOUw0MS43LDIxMC42eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjIxLDUyLjhjNDIuOCw1MC4yLDM2LjgsMTI1LjYtMTMuNCwxNjguNGMtMzkuNiwzMy43LTk2LjUsMzgtMTQwLjcsMTAuNEw1NiwyMzcuMgoJYzU5LjEsNDAuOSwxNDAuMSwyNi4yLDE4MS4xLTMyLjljMzMuOC00OC44LDMwLjMtMTE0LjQtOC43LTE1OS4zTDIyMSw1Mi44eiIvPgo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjY4LjksMTQwLjkgMTAwLjEsMTY0LjUgMjkuNiwyMzguOCAxNjkuNywxNjYuNSAxNDQuNCwxNDkuMSAxOTEuMSwxMjUuMiAxNTkuOCwxMDEuNiAyMzAuMywyNy40IAoJOTAuMyw5OS42IDExNS42LDExNy4xICIvPgo8L3N2Zz4K";
        labelImage.style.width = "110px";
        labelImage.style.boxSizing = "content-box";
        labelImage.style.backgroundColor = "#FFFFFF";
        labelImage.style.padding = "0 8px";
        labelImage.style.position = "absolute";
        labelImage.style.bottom = "-13px";
        labelImage.style.left = "50%";
        labelImage.style.transform = "translateX(-50%)";

        // Create the label button
        var labelButton = document.createElement("div");
        labelButton.innerHTML = text;
        labelButton.style.marginTop = "15px";

        // Append the new elements to the DOM
        content.appendChild(qr);
        content.appendChild(labelImage);
        container.appendChild(content);
        container.appendChild(labelButton);
        insertAfter(container, els[i]);

        // Remove the original element
        els[i].parentNode.removeChild(els[i]);
    }

    /**
     * Insert an element after another element in the DOM
     *
     * @param newElement
     * @param targetElement
     */
    function insertAfter(newElement, targetElement) {
        // Get the parent element of the target
        var parent = targetElement.parentNode;

        // If this the target is the last element, append the newElement
        if (parent.lastChild === targetElement) {
            parent.appendChild(newElement);
        } else {
            // Else insert the new element before the next sibling
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }
});
