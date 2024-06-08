import React from "react";
import Home from './home';
import Image from './image_slider';
import Actuality from './actuality_project';
import Information from './information';
import InformationBas from './information_bas';
import Footer from './footer';


function Page1(){
    return(
<div>
    <Home />
    <Image />
    <Actuality />
    <Information/>
    <InformationBas/>
    <Footer/> 
</div>
    )
}

export default Page1;