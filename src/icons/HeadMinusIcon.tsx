import React, { FC, memo } from 'react';
import HeadMinusSvg from '../svg/head-minus.svg';

export interface IHeadMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadMinusIcon: FC<IHeadMinusIconProps> = memo(props => {
  return <HeadMinusSvg {...props} />;
});
