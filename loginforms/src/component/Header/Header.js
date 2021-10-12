import React from 'react';
import { Button } from 'react-bootstrap';
import * as Styled from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/fontawesome-free-solid"


function Header() {
    return(
        <Styled.Header>
            <div style={{display:'block'}}>
                <img size="3" src="https://app.uizard.io/static/media/primary-light.49dac9c9.svg" style={{height:"36px"}} />
            </div>
            <div>
                <Button variant="outline-warning">Sign up for free</Button>
            </div>
            <div>
                <Button variant="outline-dark">Request to edit</Button>
                <Button variant="primary" style={{marginLeft: '16px'}}>
                <FontAwesomeIcon icon={Icons.faShare} size='16px' />Share</Button>
            </div>
        </Styled.Header>
    )
}
export default Header;