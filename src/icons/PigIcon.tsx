import React, { FC, memo } from 'react';
import PigSvg from '../svg/pig.svg';

export interface IPigIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PigIcon: FC<IPigIconProps> = memo(props => {
  return <PigSvg {...props} />;
});
