import React, { FC, memo } from 'react';
import WebrtcSvg from '../svg/webrtc.svg';

export interface IWebrtcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebrtcIcon: FC<IWebrtcIconProps> = memo(props => {
  return <WebrtcSvg {...props} />;
});
