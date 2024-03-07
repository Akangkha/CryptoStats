"use client";
import React, { useEffect, useRef, memo, use } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) => {
    // useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
     {
          "width": "100%",
          "height": "610",
        
          "symbol": "COINBASE:BTCUSD",
          "interval": "30",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "hide_top_toolbar": true,
          "save_image": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current!.appendChild(script);

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => container.current!.removeChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container p-0 m-0" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
         
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
