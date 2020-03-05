import React from 'react';
import Time from './Time';
// import Date from './Date';

class Clock extends React.Component {
    render() {
        return (
            <div className="border-bottom">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 mx-auto">
                        <Time />
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;