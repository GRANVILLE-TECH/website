import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function KofiWidget() {
  useEffect(() => {
    const SCRIPT_SRC =
      "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";

    const initWidget = () => {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("granvilletech", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Support me",
          "floating-chat.donateButton.background-color": "#00b9fe",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };

    // If script already loaded (e.g. hot reload), just call draw
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      initWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.onload = initWidget;
    script.onerror = () =>
      console.error("Ko-fi widget failed to load. Check the account name.");
    document.body.appendChild(script);
  }, []);

  // Portal renders nothing visually — Ko-fi injects its own DOM into body
  return createPortal(null, document.body);
}
