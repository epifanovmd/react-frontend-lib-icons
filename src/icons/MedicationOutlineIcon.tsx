import React, { FC, memo } from 'react';
import MedicationOutlineSvg from '../svg/medication-outline.svg';

export interface IMedicationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MedicationOutlineIcon: FC<IMedicationOutlineIconProps> = memo(props => {
  return <MedicationOutlineSvg {...props} />;
});
