import React, { FC, memo } from 'react';
import EarHearingSvg from '../svg/ear-hearing.svg';

export interface IEarHearingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarHearingIcon: FC<IEarHearingIconProps> = memo(props => {
  return <EarHearingSvg {...props} />;
});
