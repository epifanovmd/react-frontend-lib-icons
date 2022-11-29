import React, { FC, memo } from 'react';
import DivingScubaSvg from '../svg/diving-scuba.svg';

export interface IDivingScubaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingScubaIcon: FC<IDivingScubaIconProps> = memo(props => {
  return <DivingScubaSvg {...props} />;
});
