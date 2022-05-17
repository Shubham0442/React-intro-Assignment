import logo from './logo.svg';
import './App.css';
import { Head1, Ul1, Head2, Ul2 } from './components/head1'; 
import {Logo, Linkdiv, Link, Btn } from './components/navbar';


var style1 = {
    fontFamily: "Times-New-Roman",
    fontWeight: "Bold",
    paddingLeft: "20px",
    width:"80%",
    margin: "auto"
} 

var style2 = {
  fontFamily: "Times-New-Roman",
  fontWeight: "Bold",
  paddingLeft: "20px",
  display: "list-item",
  listStyleType: "square"
}

var style3 = {
  width:"80%",
  height:"60px",
  border:"1px solid black",
  margin: "auto",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor:"black",
  color:"white",
  fontWeight:"Bold",
  marginTop:"10px"
}

function App() {

  let link = 
  [
    {li:"Services"},
    {li:"Projects"},
    {li:"About"}
  ];

  return (
    <>
      <div style={style3}>
          <Logo></Logo>
          
          <div id='midDiv'>
          {link.map((elem)=>(

            
                 <div key ={elem.li}>
                  <Link {...elem}/>
                </div>
            
            
          ))}
        </div>
         
         <div id='btn'>
              <Btn></Btn>
         </div>
          
      </div>
      


      <div style={style1}>
        <Head1></Head1>
      </div>
      <div style={style1}>
        <Ul1></Ul1>
      </div>

      <div style={style1}>
        <Head2></Head2>
      </div>

      <div style={style1}>
        <Ul2></Ul2>
      </div>
    </>
  );
}

export default App;
