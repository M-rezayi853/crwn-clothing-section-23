import React, { useContext } from 'react';
// import { connect } from 'react-redux';

import CollectionItems from '../../components/collection-item/collection-item';

// import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionsContext from '../../contexts/collections/collections.context';
import './collection.scss';


// const CollectionPage = ({ collection }) => {
const CollectionPage = ({ match }) => {
    
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => 
                        <CollectionItems 
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </div>
        </div>
    );
};

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// });


// export default connect(mapStateToProps)(CollectionPage);
export default CollectionPage;