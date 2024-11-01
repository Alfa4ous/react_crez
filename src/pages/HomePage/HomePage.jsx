import { Banner } from "../../components/Banner/Banner";
import { Catalogtovarov } from "../../components/catalogtovarov/catalogtovarov";

export function HomePage(){
    return(
        <section className="main">
            <Banner/>
            <Catalogtovarov/>
        </section>
    )
}