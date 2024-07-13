import newEle from './newEle'

function App() {
  const tryvar="just try to embed variable"

  return (
    //this function return only one element ,ie. we need to encapsulate multiple element in single enclosing tag like <div></div> or <></>(empty tag)
    // <h1>Ganga try to make first react app</h1> 

    //lets try out by returning multiple elements
    // <h2>THIis is second element </h2>
    // but this will give error 
    
    <>
    <h1>This is in enclosed tag</h1>
    <p>so we  can give multiple elements in it </p>
    <div> and to embed javascript variable use curly braces {tryvar}</div>
    <div>This is important to note that name casing  doesnt matter while defining element but it matters while importing and rendering  </div>
    <newEle/>

    </>

    
  );
}

export default App;


