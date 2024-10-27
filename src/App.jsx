export default function App() {
  const images=[
    {src:"imges/pic1.jpg",alt:"Closeup of a human eye"},
    {src:"imges/pic2.jpg",alt:"Rock that looks like a wave"},
    {src:"imges/pic3.jpg",alt:"Purple and white pansies"},
    {src:"imges/pic4.jpg",alt:"Section of wall from a pharoah's tomb"},
    {src:"imges/pic5.jpg",alt:"Large moth on a leaf"}
  ]
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src="images/pic1.jpg"
          alt="Closeup of a human eye"
        />
        <div className="overlay"></div>
        <button className="dark">Darken</button>
      </div>
      <div className="thumb-bar"></div>
    </>
  );
}