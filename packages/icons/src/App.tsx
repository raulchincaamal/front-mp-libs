/* eslint-disable max-lines */
import { useState } from "react"
import "./App.css"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [copiedIcon, setCopiedIcon] = useState("")

  // Get all SVG files from lib folders
  const regularIcons = [
    "alarm-clock",
    "arrow-down-to-line",
    "arrow-right",
    "arrow-up-from-bracket",
    "arrow-up",
    "badge-check",
    "bars",
    "bell",
    "calendar-days",
    "calendar",
    "camera",
    "caret-up",
    "cart-shopping",
    "check",
    "circle-down",
    "circle-exclamation",
    "circle-info",
    "circle-up",
    "circle-user",
    "circle-xmark",
    "clipboard",
    "clock",
    "cloud-arrow-up",
    "cloud",
    "code",
    "comment",
    "comments",
    "download",
    "earth-americas",
    "envelope",
    "envelopes",
    "eye-slash",
    "eye",
    "face-smile",
    "file",
    "files",
    "filter",
    "folder-open",
    "folder",
    "gear",
    "gears",
    "gift",
    "globe",
    "grid-2",
    "hand",
    "hashtag",
    "headphones",
    "heart",
    "house",
    "image",
    "inbox",
    "layer-group",
    "location-dot",
    "lock",
    "magnifying-glass",
    "megaphone",
    "minus",
    "money-bill",
    "paper-plane",
    "paperclip",
    "pen-to-square",
    "pen",
    "phone",
    "plus",
    "print",
    "right-to-bracket",
    "rocket-launch",
    "rotate-right",
    "share-from-square",
    "share",
    "sliders",
    "star",
    "tag",
    "thumbs-down",
    "thumbs-up",
    "ticket",
    "trash",
    "trophy",
    "truck-fast",
    "truck",
    "user",
    "users",
    "volume",
    "wifi",
    "xmark",
  ]

  const solidIcons = [
    "address-book",
    "alarm-clock",
    "angle-up",
    "arrow-down-to-line",
    "arrow-right",
    "arrow-up-from-bracket",
    "arrow-up",
    "badge-check",
    "bars",
    "bell",
    "calendar",
    "camera",
    "caret-up",
    "cart-plus",
    "cart-shopping",
    "cash-register",
    "chart-simple",
    "check",
    "chevron-up",
    "circle-down",
    "circle-exclamation",
    "circle-info",
    "circle-up",
    "circle-user",
    "circle-xmark",
    "clipboard",
    "clock",
    "cloud-arrow-up",
    "cloud",
    "code",
    "comment",
    "comments",
    "computer-speaker",
    "copy",
    "credit-card",
    "download",
    "earth-americas",
    "envelope",
    "envelopes",
    "eye-slash",
    "eye",
    "face-smile",
    "file-excel",
    "file",
    "files",
    "filter",
    "folder-open",
    "folder",
    "gear",
    "gears",
    "gift",
    "globe",
    "grid-2",
    "hand-holding-heart",
    "hand-point-up",
    "hand",
    "handshake",
    "hashtag",
    "headphones",
    "heart",
    "house",
    "image",
    "inbox",
    "layer-group",
    "link",
    "list",
    "location-pin",
    "lock",
    "magnifying-glass",
    "megaphone",
    "minus",
    "mobile",
    "money-bill",
    "newspaper",
    "notes-medical",
    "paper-plane",
    "paperclip",
    "pen-to-square",
    "pen",
    "pencil",
    "phone-volume",
    "phone",
    "plus",
    "print-1",
    "print",
    "question",
    "right-to-bracket",
    "rotate-right",
    "share-from-square",
    "share",
    "shield",
    "shop",
    "signal-bars",
    "signal-slash",
    "sliders",
    "square-heart",
    "star",
    "store",
    "tag",
    "tags",
    "thumbs-down",
    "thumbs-up",
    "ticket",
    "trash",
    "trophy",
    "truck",
    "upload",
    "user-minus",
    "user",
    "users",
    "volume",
    "wifi",
    "xmark",
  ]

  const filteredRegularIcons = regularIcons.filter(icon =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredSolidIcons = solidIcons.filter(icon =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const copyToClipboard = (iconName: string, type: string) => {
    const componentName =
      iconName
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("") + (type === "solid" ? "Solid" : "Regular")

    navigator.clipboard.writeText(`<${componentName} />`)
    setCopiedIcon(`${type}-${iconName}`)
    setTimeout(() => setCopiedIcon(""), 2000)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>@mp-front/icons</h1>
        <p>A comprehensive library of SVG icons for React applications</p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="content">
        <div className="section">
          <h2>Classic Regular ({filteredRegularIcons.length})</h2>
          <div className="icon-grid">
            {filteredRegularIcons.map(iconName => (
              <div
                key={`regular-${iconName}`}
                className={`icon-item ${copiedIcon === `regular-${iconName}` ? "copied" : ""}`}
                onClick={() => copyToClipboard(iconName, "regular")}
                title={`Click to copy: ${iconName}`}
              >
                <div className="icon-wrapper">
                  <img
                    src={`./lib/classic-regular/${iconName}.svg`}
                    alt={iconName}
                    className="icon"
                  />
                </div>
                <span className="icon-name">{iconName}</span>
                {copiedIcon === `regular-${iconName}` && (
                  <div className="copied-tooltip">Copied!</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Classic Solid ({filteredSolidIcons.length})</h2>
          <div className="icon-grid">
            {filteredSolidIcons.map(iconName => (
              <div
                key={`solid-${iconName}`}
                className={`icon-item ${copiedIcon === `solid-${iconName}` ? "copied" : ""}`}
                onClick={() => copyToClipboard(iconName, "solid")}
                title={`Click to copy: ${iconName}`}
              >
                <div className="icon-wrapper">
                  <img
                    src={`./lib/classic-solid/${iconName}.svg`}
                    alt={iconName}
                    className="icon"
                  />
                </div>
                <span className="icon-name">{iconName}</span>
                {copiedIcon === `solid-${iconName}` && (
                  <div className="copied-tooltip">Copied!</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
