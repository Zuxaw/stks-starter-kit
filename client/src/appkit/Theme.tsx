import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'bumblebee' | 'emerald' | 'corporate' | 'synthwave';

function Theme() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const htmlElem = document.querySelector<HTMLHtmlElement>('html');
    if (htmlElem) {
      const detectedTheme: Theme = htmlElem.getAttribute('data-theme') as Theme;
      console.log('detectedTheme', detectedTheme);
      if (detectedTheme) setTheme(detectedTheme);
    }
  }, []);

  useEffect(() => {
    const htmlElem = document.querySelector<HTMLHtmlElement>('html');
    if (htmlElem) htmlElem.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChange = (event: any) => {
    setTheme(event.target.value);
  };

  return (
    <div>
      <select
        data-choose-theme
        className="select select-bordered w-full max-w-xs"
        value={theme}
        onChange={handleChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="bumblebee">Bumblebee</option>
        <option value="emerald">Emerald</option>
        <option value="corporate">Corporate</option>
        <option value="synthwave">Synthwave</option>
      </select>
    </div>
  );
}

export default Theme;
