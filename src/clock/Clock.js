import React from 'react';
import Time from './Time';
// import Date from './Date';

class Clock extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <Time />
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;