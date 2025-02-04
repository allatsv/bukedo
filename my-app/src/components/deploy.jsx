import { useEffect, useState } from 'react';

export default function useDebounce() {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  return (
      <Router>
          <h1 style={{ color: "green" }}>
              GeeksForGeeks
          </h1>
          <h3>
              React Example to add 404 page in Routing
          </h3>

          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                  path="*"
                  element={<PageNotFound />}
              />
          </Routes>
      </Router>
  );
}

