import Link from "next/link"

function Header(){
    return(
        <div className="  w-full h-[80px] flex justify-center item-center border-b-2">
            <div className="w-[80%] h-full flex sm:flex-col md:flex-row justify-between items-center item-center">
                {/* left side */}
            <div>
               {/* llogo */}   
            <h1 className="text-3xl font-bold"> <b> Avion</b></h1>
        </div>
        {/* right side */}
        
        <div>
        <ul className="flex gap-x-5 mr-4 ">
        <li>
        <Link className="hover:underline" href={"/"}><b><u>Plant pots</u></b></Link>
        </li>
        <li>
        <Link className="hover:underline" href={"/"}><b><u>Ceramics
        
        </u></b></Link>
        </li>
        <li>
        <Link  className="hover:underline" href={"/"}><b><u>Tables</u></b></Link>
        </li>
        <li>
        <Link className="hover:underline" href={"/"}><b><u>Chairs</u></b></Link>
        </li>
        <li>
        <Link  className="hover:underline" href={"/"}><b><u>Crockery</u></b></Link>
        </li>
        <li>
        <Link  className="hover:underline" href={"/"}><b><u>Tableware</u></b></Link>
        </li>
        <li>
        <Link  className="hover:underline" href={"/"}><b><u>Cutlery


</u></b></Link>
        </li>

        </ul>
        </div>
        </div>

      
            <ul>
                <li>

                </li>
            </ul>
        </div>
    )
}

export default Header;