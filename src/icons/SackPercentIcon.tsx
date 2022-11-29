import React, { FC, memo } from 'react';
import SackPercentSvg from '../svg/sack-percent.svg';

export interface ISackPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SackPercentIcon: FC<ISackPercentIconProps> = memo(props => {
  return <SackPercentSvg {...props} />;
});
