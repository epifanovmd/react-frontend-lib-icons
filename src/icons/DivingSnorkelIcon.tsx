import React, { FC, memo } from 'react';
import DivingSnorkelSvg from '../svg/diving-snorkel.svg';

export interface IDivingSnorkelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingSnorkelIcon: FC<IDivingSnorkelIconProps> = memo(props => {
  return <DivingSnorkelSvg {...props} />;
});
