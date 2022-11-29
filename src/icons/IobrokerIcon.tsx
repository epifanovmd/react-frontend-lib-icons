import React, { FC, memo } from 'react';
import IobrokerSvg from '../svg/iobroker.svg';

export interface IIobrokerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IobrokerIcon: FC<IIobrokerIconProps> = memo(props => {
  return <IobrokerSvg {...props} />;
});
