import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item';

// import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import DirectoryContext from '../../contexts/directory/directory.context';
import './directory.scss';


// const Directory = ({ sections }) => {
const Directory = () => {

    const sections = useContext(DirectoryContext);

    return (
        <div className="directory-menu">
            {sections.map(section => {
                return (
                    <MenuItem 
                        key={section.id} 
                        title={section.title}
                        imageUrl={section.imageUrl}
                        size={section.size}
                        linkUrl={section.linkUrl}
                    />
                );
            })}
        </div>
    );
};

// const mapStateToProps = createStructuredSelector({
//     sections: selectDirectorySections
// });


// export default connect(mapStateToProps)(Directory);
export default Directory;