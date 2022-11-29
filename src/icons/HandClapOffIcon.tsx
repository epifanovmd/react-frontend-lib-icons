import React, { FC, memo } from 'react';
import HandClapOffSvg from '../svg/hand-clap-off.svg';

export interface IHandClapOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandClapOffIcon: FC<IHandClapOffIconProps> = memo(props => {
  return <HandClapOffSvg {...props} />;
});
