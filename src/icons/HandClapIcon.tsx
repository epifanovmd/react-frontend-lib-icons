import React, { FC, memo } from 'react';
import HandClapSvg from '../svg/hand-clap.svg';

export interface IHandClapIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandClapIcon: FC<IHandClapIconProps> = memo(props => {
  return <HandClapSvg {...props} />;
});
