import ListeDefis from "../components/ListeDefis";
import Sidebar_jury from "../components/Sidebar_jury";

export default function ListeDefisPage(){
    return(
        <Sidebar_jury prop={<ListeDefis/>}/>
    )
}