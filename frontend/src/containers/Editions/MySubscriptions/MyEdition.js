import React, {Fragment} from 'react';
import TemplateMyEdition from "./TemplateMyEdition";

import '../../../assets/css/new_edition.css'

const MyEdition = (props) => {
    const { posts } = props
    const { subscription } = props

    if(!posts || posts.length===0)
        return <p></p>

    // if(!posts.is_subscriptions)
    //     return <h1>test</h1>

    // TODO: Реализовать вывод "У вас нет подписок" если у подписчика нет подписок

    return (
        <Fragment>
            <div className="center_editions">
                <div className='row'>
                    {
                        subscription.sort((a, b) => (a.id > b.id ? -1 : 1)).map((susubscriptions) =>

                            // console.log(susubscriptions.is_subscription) &&
                            // !susubscriptions.subscriber ===
                            // localStorage.getItem('email') ?
                            susubscriptions.subscriber
                            ===
                            localStorage.getItem('email') &&
                            susubscriptions.is_subscription &&
                            posts.map((edition) =>
                                susubscriptions.edition === edition.id &&
                                <div className='text-center col-md-2 me-5 mt-5' key={edition.id}>
                                    <TemplateMyEdition
                                        id = {edition.id}
                                        image = {edition.image}
                                        index = {edition.index}
                                        title = {edition.title}
                                        edition_type = {edition.edition_type}
                                        description = {edition.description}
                                        price = {edition.price}
                                        un_subscribe_edition={susubscriptions.id}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
            </div>        
            <br/><br/><br/>
        </Fragment>
    );
}

export default MyEdition;



