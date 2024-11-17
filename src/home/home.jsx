import Card from "./card";

export default function Home() {
  const images = [
    "https://images.pexels.com/photos/17998584/pexels-photo-17998584/free-photo-of-mar-natureza-moda-tendencia.jpeg",
    "https://images.pexels.com/photos/17998586/pexels-photo-17998586/free-photo-of-mar-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/18016828/pexels-photo-18016828/free-photo-of-mar-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="flex flex-row justify-center items-center h-screen mt-2 gap-4">
      <Card images={images} />
      <Card images={images} />
      <Card images={images} />
    </div>
  );
}
