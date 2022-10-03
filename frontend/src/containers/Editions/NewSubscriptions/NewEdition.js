import React, {useState, Fragment} from 'react';
import TemplateNewEdition from "./TemplateNewEdition";

import '../../../assets/css/new_edition.css'


const NewEdition = ({editions}) => {



    if(!editions || editions.length===0)
        return <p></p>

    return (
        <Fragment>
            <div className="center_editions">

                <div className='row'>
                    {
                        editions.map((edition) =>
                            !edition.is_subscription &&
                            // <div className='text-center col-md-2 card me-5 mt-5' key={edition.id}>
                            <div className='text-center col-md-2 me-5 mt-5' key={edition.id}>
                                <TemplateNewEdition
                                    id = {edition.id}
                                    image = {edition.image}
                                    index = {edition.index}
                                    title = {edition.title}
                                    edition_type = {edition.edition_type}
                                    description = {edition.description}
                                    price = {edition.price}
                                />
                            </div>
                        )
                    }
                </div>
                <br/><br/><br/>
            </div>
        </Fragment>
    );
}

export default NewEdition;