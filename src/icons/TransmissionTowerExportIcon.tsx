import React, { FC, memo } from 'react';
import TransmissionTowerExportSvg from '../svg/transmission-tower-export.svg';

export interface ITransmissionTowerExportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TransmissionTowerExportIcon: FC<ITransmissionTowerExportIconProps> = memo(props => {
  return <TransmissionTowerExportSvg {...props} />;
});
