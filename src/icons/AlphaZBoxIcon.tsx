import React, { FC, memo } from 'react';
import AlphaZBoxSvg from '../svg/alpha-z-box.svg';

export interface IAlphaZBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaZBoxIcon: FC<IAlphaZBoxIconProps> = memo(props => {
  return <AlphaZBoxSvg {...props} />;
});
