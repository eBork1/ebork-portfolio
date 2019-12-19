import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class HomeBtn extends React.Component {

    render() {
        return (
            <div className="containter">
                <div className="row">
                    <div className="col-3 mt-3">
                        <a href="/" className="shadow-lg">
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                color="#c9c9c9"
                            />

                            <FontAwesomeIcon
                                icon={faHome}
                                color="#c9c9c9"
                                size="2x"
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeBtn;
