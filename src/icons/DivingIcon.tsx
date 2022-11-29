import React, { FC, memo } from 'react';
import DivingSvg from '../svg/diving.svg';

export interface IDivingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingIcon: FC<IDivingIconProps> = memo(props => {
  return <DivingSvg {...props} />;
});
