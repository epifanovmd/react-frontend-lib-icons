import React, { FC, memo } from 'react';
import TransmissionTowerOffSvg from '../svg/transmission-tower-off.svg';

export interface ITransmissionTowerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransmissionTowerOffIcon: FC<ITransmissionTowerOffIconProps> = memo(props => {
  return <TransmissionTowerOffSvg {...props} />;
});
