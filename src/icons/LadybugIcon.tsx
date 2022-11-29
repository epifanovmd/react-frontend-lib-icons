import React, { FC, memo } from 'react';
import LadybugSvg from '../svg/ladybug.svg';

export interface ILadybugIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LadybugIcon: FC<ILadybugIconProps> = memo(props => {
  return <LadybugSvg {...props} />;
});
