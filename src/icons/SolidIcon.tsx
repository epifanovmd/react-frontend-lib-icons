import React, { FC, memo } from 'react';
import SolidSvg from '../svg/solid.svg';

export interface ISolidIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SolidIcon: FC<ISolidIconProps> = memo(props => {
  return <SolidSvg {...props} />;
});
