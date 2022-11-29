import React, { FC, memo } from 'react';
import WebcamSvg from '../svg/webcam.svg';

export interface IWebcamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebcamIcon: FC<IWebcamIconProps> = memo(props => {
  return <WebcamSvg {...props} />;
});
