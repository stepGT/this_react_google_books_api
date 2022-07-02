import './scss/App.module.scss';
console.log(process.env);
function App() {
  return (
    <div>
      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  );
}

export default App;
