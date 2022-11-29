import React, { FC, memo } from 'react';
import WebcamOffSvg from '../svg/webcam-off.svg';

export interface IWebcamOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebcamOffIcon: FC<IWebcamOffIconProps> = memo(props => {
  return <WebcamOffSvg {...props} />;
});
