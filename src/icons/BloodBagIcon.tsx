import React, { FC, memo } from 'react';
import BloodBagSvg from '../svg/blood-bag.svg';

export interface IBloodBagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BloodBagIcon: FC<IBloodBagIconProps> = memo(props => {
  return <BloodBagSvg {...props} />;
});
