export default function App() {
  const images=[
    {src:"imges/pic1.jpg",alt:"Closeup of a human eye"},
    {src:"imges/pic2.jpg",alt:"Rock that looks like a wave"},
    {src:"imges/pic3.jpg",alt:"Purple and white pansies"},
    {src:"imges/pic4.jpg",alt:"Section of wall from a pharoah's tomb"},
    {src:"imges/pic5.jpg",alt:"Large moth on a leaf"}
  ];
  const [displayedImage,setDisplayedImage]=useState(images[0]);

  const handleThumbnaiClick=(image)=>{
    setDisplayedImage(image);
  };
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={displayedImage.src}
          alt={displayedImage.alt}
        />
        <div className="overlay"></div>
        <button className="dark">Darken</button>
      </div>
      <div className="thumb-bar">
        {images.map((image,index)=>(
          <img key={index} src={image.src} alt={image.alt} onClick={()=>handleThumbnailClick(image)}/>
        ))}
      </div>
    </>
  );
}