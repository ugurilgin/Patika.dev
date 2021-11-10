import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import { createMeme } from '../actions';

import MemeItem from './MemeItem';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MyMemes from '../components/MyMemes';

class App extends Component {
    constructor() {
        super();

        this.state = {
            memeLimit: 10,
            text0: ' ',
            text1: ' ',
            memeSelected: false,
            template_id: '',
        };

        this.isButtonDisabled = this.isButtonDisabled.bind(this);
        this.toggleMemeSelected = this.toggleMemeSelected.bind(this);
    }

    isButtonDisabled() {
        const { text0, text1 } = this.state;
        return (
            text0 === ' ' && text1 === ' ' && this.state.memeSelected === true
        );
    }

    toggleMemeSelected(id) {
        this.setState({
            memeSelected: !this.state.memeSelected,
            template_id: id,
        });
    }

    render() {
        console.log(this.state);
        console.log(this.isButtonDisabled());
        return (
            <div className="container">
                <div className="main-content">
                    <div className="header">
                        <h2>
                            <u>Welcome to the Meme generator</u>
                        </h2>
                    </div>
                    <div className="content">
                        <div className="meme-form">
                            <h4>
                                <i>Write Some Text</i>
                            </h4>
                            <Form inline>
                                <FormGroup>
                                    <ControlLabel>Top</ControlLabel>{' '}
                                    <FormControl
                                        type="text"
                                        onChange={(event) =>
                                            this.setState({
                                                text0: event.target.value,
                                            })
                                        }
                                    ></FormControl>{' '}
                                    <FormGroup className="group">
                                        <ControlLabel>Bottom</ControlLabel>
                                        <FormControl
                                            type="text"
                                            onChange={(event) =>
                                                this.setState({
                                                    text1: event.target.value,
                                                })
                                            }
                                        ></FormControl>
                                    </FormGroup>
                                    <FormGroup>
                                        <button
                                            disabled={this.isButtonDisabled()}
                                            className={
                                                this.isButtonDisabled()
                                                    ? 'generate-btn disabled'
                                                    : 'generate-btn'
                                            }
                                            onClick={(e) => {
                                                const {
                                                    text0,
                                                    text1,
                                                    template_id,
                                                } = this.state;
                                                const obj = {
                                                    template_id,
                                                    text0,
                                                    text1,
                                                };
                                                e.preventDefault();
                                                this.props.createMeme(obj);
                                            }}
                                        >
                                            Generate Meme
                                        </button>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="meme-container">
                            <MyMemes />
                        </div>
                    </div>
                </div>
                <div className="meme-choice-containers">
                    <div className="meme-choice-header">
                        <h3>Pick a meme</h3>
                    </div>
                    <div className="meme-choices">
                        {this.props.memes
                            .slice(0, this.state.memeLimit)
                            .map((meme, index) => {
                                return (
                                    <MemeItem
                                        key={index}
                                        meme={meme}
                                        text0={this.state.text0}
                                        text1={this.state.text1}
                                        toggleMemeSelected={
                                            this.toggleMemeSelected
                                        }
                                    />
                                );
                            })}
                        <div
                            className="meme-button"
                            onClick={() => {
                                this.setState({
                                    memeLimit: this.state.memeLimit + 10,
                                });
                            }}
                        >
                            Load 10 more memes...
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { createMeme })(App);
