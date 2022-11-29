import React, { FC, memo } from 'react';
import AlphaCSvg from '../svg/alpha-c.svg';

export interface IAlphaCIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaCIcon: FC<IAlphaCIconProps> = memo(props => {
  return <AlphaCSvg {...props} />;
});
