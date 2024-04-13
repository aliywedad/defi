import ListeEquipes from "../components/ListeEquipes";
import Sidebar_jury from "../components/Sidebar_jury";

export default function ListeEquipesPage(){
    return(
        <Sidebar_jury prop={<ListeEquipes/>}/>
    )
}