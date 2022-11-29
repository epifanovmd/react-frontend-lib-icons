import React, { FC, memo } from 'react';
import AlphaMSvg from '../svg/alpha-m.svg';

export interface IAlphaMIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaMIcon: FC<IAlphaMIconProps> = memo(props => {
  return <AlphaMSvg {...props} />;
});
