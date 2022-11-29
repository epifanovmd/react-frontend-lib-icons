import React, { FC, memo } from 'react';
import AlphaSSvg from '../svg/alpha-s.svg';

export interface IAlphaSIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaSIcon: FC<IAlphaSIconProps> = memo(props => {
  return <AlphaSSvg {...props} />;
});
