import React, { FC, memo } from 'react';
import AlphaBSvg from '../svg/alpha-b.svg';

export interface IAlphaBIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaBIcon: FC<IAlphaBIconProps> = memo(props => {
  return <AlphaBSvg {...props} />;
});
