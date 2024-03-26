import { prop } from 'ramda';
import styled from 'styled-components';

const Circle = styled.div`
  /* those 3 lines make sure a 1:1 aspect ratio is kept at all times based on the given width */
  height: 0;
  padding-bottom: calc(100% - 4px);
  width: 100%;

  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: ${prop('$backgroundColor')};
  text-align: center;
  border: 2px solid ${prop('$color')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${prop('$backgroundColor')};
`;

const Content = styled.div`
  position: absolute;
  top: 7%;
  left: 7%;
  width: 86%;
  height: 86%;
  border-radius: 50%;
  z-index: 3;
  border: 2px solid ${prop('$color')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${prop('$backgroundColor')};
`;

const ProgressHalf = styled.div.attrs((props) => {
  return {
    style: {
      transform: `rotate(${props.$progress}deg)`,
      zIndex: props.$progress > 180 ? '2' : '0',
    },
  };
})`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${prop('$color')};
  border-radius: 100px 0px 0px 100px;
  border-right: 0;
  transform-origin: right;
`;

function progressToDegrees(progress) {
  return (progress * 360) / 100;
}

export function CircularProgressBar({ children, progress, bgColor, color }) {
  const progressRight = progressToDegrees(progress > 50 ? 50 : progress);
  const progressLeft = progressToDegrees(progress > 50 ? progress : 0);

  return (
    <Circle $backgroundColor={bgColor}>
      <Overlay $color={color} $backgroundColor={bgColor}></Overlay>
      <Content $backgroundColor={bgColor}>{children}</Content>
      <ProgressHalf $progress={progressRight} $color={color}></ProgressHalf>
      <ProgressHalf $progress={progressLeft} $color={color}></ProgressHalf>
    </Circle>
  );
}
