import { useEffect, useState } from "react";

const glitchChars = "!<>-_\\/[]{}—=+*^?#________".split("");

const useScrambledText = (targetText, speed = 40, glitchDuration = 800) => {
  const [displayText, setDisplayText] = useState(targetText);

  useEffect(() => {
    let timeout;
    let interval;
    let frame = 0;
    let result = [];

    interval = setInterval(() => {
      result = targetText.split("").map((char, i) => {
        if (i < frame) return char;
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
      });

      setDisplayText(result.join(""));

      if (frame >= targetText.length) {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setDisplayText(targetText);
        }, glitchDuration);
      }

      frame += 1;
    }, speed);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [targetText]);

  return displayText;
};

export default function GlitchText({ phrases, interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const text = phrases[index];
  const animatedText = useScrambledText(text);

  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, interval);
    return () => clearInterval(loop);
  }, [phrases, interval]);

  return (
    <span className="text-cyan-400">{animatedText}</span>
  );
}
