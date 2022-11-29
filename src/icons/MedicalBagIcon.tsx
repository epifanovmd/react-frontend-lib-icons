import React, { FC, memo } from 'react';
import MedicalBagSvg from '../svg/medical-bag.svg';

export interface IMedicalBagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MedicalBagIcon: FC<IMedicalBagIconProps> = memo(props => {
  return <MedicalBagSvg {...props} />;
});
