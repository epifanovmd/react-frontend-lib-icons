import React, { FC, memo } from 'react';
import SpearSvg from '../svg/spear.svg';

export interface ISpearIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpearIcon: FC<ISpearIconProps> = memo(props => {
  return <SpearSvg {...props} />;
});
