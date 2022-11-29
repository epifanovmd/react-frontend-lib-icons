import React, { FC, memo } from 'react';
import PoundSvg from '../svg/pound.svg';

export interface IPoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoundIcon: FC<IPoundIconProps> = memo(props => {
  return <PoundSvg {...props} />;
});
