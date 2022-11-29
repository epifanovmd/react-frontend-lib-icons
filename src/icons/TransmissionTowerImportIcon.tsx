import React, { FC, memo } from 'react';
import TransmissionTowerImportSvg from '../svg/transmission-tower-import.svg';

export interface ITransmissionTowerImportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransmissionTowerImportIcon: FC<ITransmissionTowerImportIconProps> = memo(props => {
  return <TransmissionTowerImportSvg {...props} />;
});
