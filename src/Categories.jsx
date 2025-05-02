import { FaBorderAll } from "react-icons/fa";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { LiaPastafarianismSolid } from "react-icons/lia";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

 const Categories = [
      {
        id : 1,
        name : "All",
        icon : <FaBorderAll className="w-16 h-16 text-green-500" />
      },
      {
        id : 2,
        name : "breakfast",
        icon : <MdOutlineFreeBreakfast className="w-16 h-16 text-green-500" />
      },
      {
        id : 3,
        name : "soups",
        icon : <TbSoup className="w-16 h-16 text-green-500" />
      },
      {
        id : 4,
        name : "pasta",
        icon : <LiaPastafarianismSolid className="w-16 h-16 text-green-500" />
      },
      {
        id : 5,
        name : "main_course",
        icon : <PiBowlFoodDuotone className="w-16 h-16 text-green-500" />
      },
      {
        id : 6,
        name : "pizza",
        icon : <GiFullPizza className="w-16 h-16 text-green-500" />
      },
      {
        id : 7,
        name : "burger",
        icon : <GiHamburger  className="w-16 h-16 text-green-500" />
      },
]

export default Categories ;