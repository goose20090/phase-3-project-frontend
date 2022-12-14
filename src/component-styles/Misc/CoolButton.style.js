import styled from "styled-components"
import CoolButton from "../../components/Misc/CoolButtonComponent"

export const StyledCoolButton = styled(CoolButtonComponent)`


.button {
  margin: 10px;
  -webkit-touch-callout: none;
  user-select: none;
  display: inline-block;
  border: 0.2em solid;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  opacity: 0.6;
  color: #fff;
  &:active {
  opacity: 1;
  background: white;
  color: black;
}
}

/* .button__text {
  display: block;
  padding: 1em 2em;
  text-transform: uppercase;
  font-weight: bold;
}

.button__text:before {
  content: attr(title);
}

.button__text--bis {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-1em);
  opacity: 0;
}

.button__mask {
  display: block;
  position: absolute;
  top: 0;
  left: -0;
  right: 0;
  bottom: 0;
  margin-left: -2%;
  background: white;
  transform: translateX(-100%) rotate(45deg);
  transition: all 0.3s;
}

.button:hover {
  opacity: 1;
}

.button:hover .button__text {
  animation: fx-text 0.3s ease-out;
}

.button:hover .button__text--bis {
  animation: fx-text-bis 0.3s ease-out;
}

.button:hover .button__mask {
  animation: fx-mask 0.3s ease-out;
}

@keyframes fx-mask {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

@keyframes fx-text {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1em);
    opacity: 0;
  }
}

@keyframes fx-text-bis {
  0% {
    transform: translateX(-1em);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
} */

`