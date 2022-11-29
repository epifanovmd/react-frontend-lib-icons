import React, { FC, memo } from 'react';
import AlphaZSvg from '../svg/alpha-z.svg';

export interface IAlphaZIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaZIcon: FC<IAlphaZIconProps> = memo(props => {
  return <AlphaZSvg {...props} />;
});
