import React, { FC, memo } from 'react';
import DivingScubaFlagSvg from '../svg/diving-scuba-flag.svg';

export interface IDivingScubaFlagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingScubaFlagIcon: FC<IDivingScubaFlagIconProps> = memo(props => {
  return <DivingScubaFlagSvg {...props} />;
});
