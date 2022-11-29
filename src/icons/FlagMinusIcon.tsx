import React, { FC, memo } from 'react';
import FlagMinusSvg from '../svg/flag-minus.svg';

export interface IFlagMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagMinusIcon: FC<IFlagMinusIconProps> = memo(props => {
  return <FlagMinusSvg {...props} />;
});
