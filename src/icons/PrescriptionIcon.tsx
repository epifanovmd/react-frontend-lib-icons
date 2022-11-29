import React, { FC, memo } from 'react';
import PrescriptionSvg from '../svg/prescription.svg';

export interface IPrescriptionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PrescriptionIcon: FC<IPrescriptionIconProps> = memo(props => {
  return <PrescriptionSvg {...props} />;
});
