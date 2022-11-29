import React, { FC, memo } from 'react';
import TransmissionTowerSvg from '../svg/transmission-tower.svg';

export interface ITransmissionTowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransmissionTowerIcon: FC<ITransmissionTowerIconProps> = memo(props => {
  return <TransmissionTowerSvg {...props} />;
});
