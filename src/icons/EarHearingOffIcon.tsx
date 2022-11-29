import React, { FC, memo } from 'react';
import EarHearingOffSvg from '../svg/ear-hearing-off.svg';

export interface IEarHearingOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarHearingOffIcon: FC<IEarHearingOffIconProps> = memo(props => {
  return <EarHearingOffSvg {...props} />;
});
