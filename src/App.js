import "./styles.css";

export default function App() {
  const Debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleChange = Debounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <div className="App">
      <h1>React Debouncing</h1>
      <input placeholder="write..." onChange={handleChange} />
    </div>
  );
}
