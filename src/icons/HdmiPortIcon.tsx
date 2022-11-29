import React, { FC, memo } from 'react';
import HdmiPortSvg from '../svg/hdmi-port.svg';

export interface IHdmiPortIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HdmiPortIcon: FC<IHdmiPortIconProps> = memo(props => {
  return <HdmiPortSvg {...props} />;
});
