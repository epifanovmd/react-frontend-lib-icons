import React, { FC, memo } from 'react';
import BorderRadiusSvg from '../svg/border-radius.svg';

export interface IBorderRadiusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderRadiusIcon: FC<IBorderRadiusIconProps> = memo(props => {
  return <BorderRadiusSvg {...props} />;
});
