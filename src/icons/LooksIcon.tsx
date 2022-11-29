import React, { FC, memo } from 'react';
import LooksSvg from '../svg/looks.svg';

export interface ILooksIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LooksIcon: FC<ILooksIconProps> = memo(props => {
  return <LooksSvg {...props} />;
});
