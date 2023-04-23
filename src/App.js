import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 1st section */}
      <div className="first-section-div">
        <h3>1rd Section</h3>
        <p>Home</p>
        <p>Story</p>
        <p>Like</p>
      </div>
      {/* 3rd section */}
      <div className="third-section-div">
        <h1>3rd Section</h1>
        <input type="search" />
        <div className="story-class-div">
          <h1>Story 1</h1>
          <h1>Story 2</h1>
          <h1>Story 3</h1>
          <h1>Story 4</h1>
          <h1>Story 5</h1>
          <h1>Story 6</h1>
          <h1>Story 7</h1>
          <h1>Story 8</h1>
        </div>
      </div>
      {/* 2nd section */}
      <div className="second-section-div">
        <h3>2nd section</h3>
        <h2>User Data</h2>
      </div>
    </div>
  );
}

export default App;
