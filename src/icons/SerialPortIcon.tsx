import React, { FC, memo } from 'react';
import SerialPortSvg from '../svg/serial-port.svg';

export interface ISerialPortIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SerialPortIcon: FC<ISerialPortIconProps> = memo(props => {
  return <SerialPortSvg {...props} />;
});
