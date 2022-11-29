import React, { FC, memo } from 'react';
import UbuntuSvg from '../svg/ubuntu.svg';

export interface IUbuntuIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UbuntuIcon: FC<IUbuntuIconProps> = memo(props => {
  return <UbuntuSvg {...props} />;
});
