import React, { FC, memo } from 'react';
import SackSvg from '../svg/sack.svg';

export interface ISackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SackIcon: FC<ISackIconProps> = memo(props => {
  return <SackSvg {...props} />;
});
