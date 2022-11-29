import React, { FC, memo } from 'react';
import MedicationSvg from '../svg/medication.svg';

export interface IMedicationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MedicationIcon: FC<IMedicationIconProps> = memo(props => {
  return <MedicationSvg {...props} />;
});
