import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  const isHoveringHeading = useRef(false);
  const isHoveringImage = useRef(false);
  const isHoveringButton = useRef(false);
  const isHoveringFooter = useRef(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkDevice();
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const el = document.elementFromPoint(e.clientX, e.clientY);
      isHoveringHeading.current = !!el?.closest("[data-cursor='heading']");
      isHoveringImage.current = !!el?.closest("[data-cursor='image']");
      isHoveringFooter.current = !!el?.closest("[data-cursor='footer']");
      isHoveringButton.current = !!el?.closest(
        "a, button, [role='button'], input, select, textarea, label",
      );
    };

    const animate = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) {
        raf.current = requestAnimationFrame(animate);
        return;
      }

      dot.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`;

      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;

      if (isHoveringFooter.current) {
        dot.className = "cursor-dot cursor-footer";
        ring.className = "cursor-ring ring-footer";
      } else if (isHoveringHeading.current) {
        dot.className = "cursor-dot cursor-heading";
        ring.className = "cursor-ring ring-heading";
      } else if (isHoveringImage.current) {
        dot.className = "cursor-dot cursor-image";
        ring.className = "cursor-ring ring-image";
      } else if (isHoveringButton.current) {
        dot.className = "cursor-dot cursor-button";
        ring.className = "cursor-ring ring-button";
      } else {
        dot.className = "cursor-dot";
        ring.className = "cursor-ring";
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <style>{`
        *, *::before, *::after { cursor: none !important; }

        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 12px; height: 12px;
          background: #008235;
          border-radius: 50%;
          pointer-events: none;
          z-index: 999999;
          will-change: transform;
          transition: width 0.2s, height 0.2s, background 0.2s, box-shadow 0.2s;
        }

        .cursor-dot.cursor-heading {
          width: 18px; height: 18px;
          background: #e5792b;
          box-shadow: 0 0 0 3px #008235;
        }

        .cursor-dot.cursor-image {
          width: 10px; height: 10px;
          background: #ffffff;
          box-shadow: 0 0 8px rgba(255,255,255,0.9);
        }

        .cursor-dot.cursor-button {
          width: 10px; height: 10px;
          background: #e5792b;
          box-shadow: 0 0 0 2px #008235;
        }

        .cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 40px; height: 40px;
          border: 2px solid #008235;
          border-radius: 50%;
          pointer-events: none;
          z-index: 999998;
          will-change: transform;
          opacity: 0.55;
          transition: width 0.3s, height 0.3s, border-color 0.3s,
                      opacity 0.3s, background 0.3s;
        }

        .cursor-ring.ring-heading {
          width: 54px; height: 54px;
          border-color: #e5792b;
          border-width: 2.5px;
          opacity: 1;
          animation: ringPulse 1s ease-in-out infinite;
        }

        .cursor-ring.ring-image {
          width: 60px; height: 60px;
          border-color: rgba(255,255,255,0.75);
          opacity: 0.8;
        }

        .cursor-ring.ring-button {
          width: 44px; height: 44px;
          background: rgba(229, 121, 43, 0.12);
          border-color: #008235;
          opacity: 0.9;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.7; }
        }

       .cursor-dot.cursor-footer {
  background: #ffffff;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
}

.cursor-ring.ring-footer {
  border-color: #ffffff;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(4px);
}

      `}</style>

      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
