import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const multiverses = [
     { name: "Marvel", image: "https://hdqwalls.com/download/the-avengers-marvel-comics-oc-3840x2400.jpg" },
  { name: "DC", image: "https://th.bing.com/th/id/R.c424e061ca936f68f69f4659b2e408fe?rik=a%2bgu6KJVZbQmFA&pid=ImgRaw&r=0" },
  { name: "One Piece", image: "https://tse3.mm.bing.net/th/id/OIP.2k8qwTpAX8tpV4_qqB5aWwHaFN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Jujutsu Kaisen", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/jujutsu-kaisen-jjk-why-a-sequel-could-bring-a-threat-greater-than-sukuna.JPG" },
];

const Multiverse = () => {
  const navigate = useNavigate();

  const handleSelect = (universe: string) => {
    navigate(`/search?universe=${encodeURIComponent(universe)}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="cursor-pointer text-lg font-semibold">
          Multiverse
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white p-4 w-[400px] shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          {multiverses.map((item) => (
            <Card
              key={item.name}
              onClick={() => handleSelect(item.name)}
              className="hover:shadow-xl cursor-pointer transition-transform hover:scale-105"
            >
              <CardContent className="flex flex-col items-center p-4">
                <img src={item.image} alt={item.name} className="h-12 object-contain mb-2" />
                <CardTitle className="text-center text-sm">{item.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Multiverse;

