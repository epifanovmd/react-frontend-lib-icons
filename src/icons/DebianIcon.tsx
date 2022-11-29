import React, { FC, memo } from 'react';
import DebianSvg from '../svg/debian.svg';

export interface IDebianIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DebianIcon: FC<IDebianIconProps> = memo(props => {
  return <DebianSvg {...props} />;
});
