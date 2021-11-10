import React, { Component } from 'react';

import { connect } from 'react-redux';

class MyMemes extends Component {
    render() {
        if (this.props.myMemes && this.props.myMemes.length === 0) {
            return (
                <div className="empty-canvas">
                    <span>
                        Step 1: Select a meme template on the right hand menu
                    </span>
                    <span>
                        Step 2: Type in the text you would like on the meme.
                    </span>
                    <span>Step 3: Click "Generate Meme"</span>
                </div>
            );
        }

        return (
            <div>
                {this.props.myMemes.map((meme, index) => {
                    return (
                        <img
                            key={index}
                            src={meme.data.url}
                            alt="my-meme"
                            className="my-meme-img"
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myMemes: state.myMemes,
    };
}

export default connect(mapStateToProps, null)(MyMemes);
