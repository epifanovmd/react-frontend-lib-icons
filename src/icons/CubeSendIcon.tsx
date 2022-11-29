import React, { FC, memo } from 'react';
import CubeSendSvg from '../svg/cube-send.svg';

export interface ICubeSendIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CubeSendIcon: FC<ICubeSendIconProps> = memo(props => {
  return <CubeSendSvg {...props} />;
});
