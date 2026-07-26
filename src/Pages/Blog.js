import React, { useState, useEffect } from "react";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeSrc, setIframeSrc] = useState(
    "https://blogs.multiplierskraft.com"
  );

  const handleLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Track whether we've pushed the initial state
    let hasPushedInitialState = false;

    const handleMessage = (event) => {
      if (event.origin === "https://blogs.multiplierskraft.com") {
        const data = event.data;
        if (data && data.type === "iframeUrlUpdate") {
          const newIframeUrl = data.url; // e.g., https://blogs.multiplierskraft.com/some-post
          setIframeSrc(newIframeUrl); // Update iframe src

          const encodedIframeUrl = encodeURIComponent(newIframeUrl);
          const newParentUrl = `/blog?url=${encodedIframeUrl}`;

          if (!hasPushedInitialState) {
            // Push the first iframe URL to history to allow exiting blog with one back click
            window.history.pushState(
              { iframeUrl: newIframeUrl },
              "",
              newParentUrl
            );
            hasPushedInitialState = true;
          } else {
            // Replace subsequent URLs to avoid stacking history entries
            window.history.replaceState(
              { iframeUrl: newIframeUrl },
              "",
              newParentUrl
            );
          }
        }
      }
    };

    const handlePopState = (event) => {
      const state = event.state;
      if (state && state.iframeUrl) {
        // Back/forward navigation: update iframe src
        setIframeSrc(state.iframeUrl);
      } else {
        // No state (e.g., back to /blog or initial load), reset to default
        setIframeSrc("https://blogs.multiplierskraft.com");
        hasPushedInitialState = false; // Reset for next navigation
      }
    };

    // Handle initial URL from query params
    const urlParams = new URLSearchParams(window.location.search);
    const initialIframeUrl = urlParams.get("url");
    if (initialIframeUrl) {
      const decodedIframeUrl = decodeURIComponent(initialIframeUrl);
      setIframeSrc(decodedIframeUrl);
      // Set initial state without adding a new history entry
      window.history.replaceState(
        { iframeUrl: decodedIframeUrl },
        "",
        window.location.pathname + window.location.search
      );
      hasPushedInitialState = true; // Mark as pushed to use replaceState later
    } else {
      // Ensure default state is set if no query param
      window.history.replaceState(
        { iframeUrl: "https://blogs.multiplierskraft.com" },
        "",
        "/blog"
      );
    }

    window.addEventListener("message", handleMessage);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div
      className="linkedin-blogs-container relative"
      style={{ padding: "1rem" }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      )}
      <iframe
        src={iframeSrc}
        title="MKraft Blogs"
        width="100%"
        id="wpframe"
        height="800px"
        style={{
          border: "none",
          borderRadius: "8px",
          overflow: "hidden",
          scrollbarWidth: "none",
        }}
        className="no-scrollbar"
        onLoad={handleLoad}
      ></iframe>
    </div>
  );
};

export default Blog;
