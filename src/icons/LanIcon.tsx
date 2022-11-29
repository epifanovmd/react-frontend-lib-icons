import React, { FC, memo } from 'react';
import LanSvg from '../svg/lan.svg';

export interface ILanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanIcon: FC<ILanIconProps> = memo(props => {
  return <LanSvg {...props} />;
});
