import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { ButtonCage, IsButton } from '../../styledComponents/GenStyling';

class DeleteWindow extends Component {
    state = {
        open: false
    };

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({
            closeOnEscape,
            closeOnDimmerClick,
            open: true });
    };

    close = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, closeOnEscape, closeOnDimmerClick } = this.state
        return (
            <div>
                {/* <Button onClick={this.closeConfigShow(true, true)}>DELETE</Button> */}
                <ButtonCage>
                    <IsButton onClick={this.closeConfigShow(true, true)}>DELETE</IsButton>
                </ButtonCage>
                <Modal
                    open={open}
                    closeOnEscape={closeOnEscape}
                    closeOnDimmerClick={closeOnDimmerClick}
                    onClose={this.close}
                >
                    <Modal.Header>
                        Delete Your Message
                    </Modal.Header>
                    <Modal.Content>
                        <p>Are you sure you want to delete your message?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative>
                            No
                        </Button>
                        <Button
                            onClick={this.close}
                            positive
                            labelPosition='right'
                            icon='checkmark'
                            content='Yes'
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    };
};

export default DeleteWindow;