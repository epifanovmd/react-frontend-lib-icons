import React, { FC, memo } from 'react';
import AlphaBBoxSvg from '../svg/alpha-b-box.svg';

export interface IAlphaBBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaBBoxIcon: FC<IAlphaBBoxIconProps> = memo(props => {
  return <AlphaBBoxSvg {...props} />;
});
