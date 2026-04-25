import { useEffect } from 'react';

/**
 * Custom hook to dynamically update document title and meta description.
 * @param {string} title - The title of the page.
 * @param {string} description - The meta description of the page.
 */
const useSEO = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Granville-Tech`;
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'description';
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [title, description]);
};

export default useSEO;
