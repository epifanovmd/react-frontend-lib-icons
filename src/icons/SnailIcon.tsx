import React, { FC, memo } from 'react';
import SnailSvg from '../svg/snail.svg';

export interface ISnailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnailIcon: FC<ISnailIconProps> = memo(props => {
  return <SnailSvg {...props} />;
});
