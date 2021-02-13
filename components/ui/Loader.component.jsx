import React from 'react'
import styled from 'styled-components'

const Loader = () => {
    return (
        <Spinner>
            <figure className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </figure>
        </Spinner>
    )
}

export default Loader


const Spinner = styled.div`
height : 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color : var(--baseBg);
z-index : 5000;
position:fixed;
left: 0;
top: 0;
.spinner {
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
  padding : 0;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--primary);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
`