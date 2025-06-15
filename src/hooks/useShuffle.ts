
import { useState, useRef, useCallback } from 'react';

const useShuffle = (originalText: string) => {
  const [text, setText] = useState(originalText);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const shuffle = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText(
        originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }

            if (letter === ' ') {
              return ' ';
            }

            return alphabet[Math.floor(Math.random() * alphabet.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  }, [originalText]);

  const stopShuffle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setText(originalText);
  }, [originalText]);

  return { text, shuffle, stopShuffle };
};

export default useShuffle;
