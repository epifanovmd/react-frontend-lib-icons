import React, { FC, memo } from 'react';
import SkateOffSvg from '../svg/skate-off.svg';

export interface ISkateOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkateOffIcon: FC<ISkateOffIconProps> = memo(props => {
  return <SkateOffSvg {...props} />;
});
