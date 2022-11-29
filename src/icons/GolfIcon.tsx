import React, { FC, memo } from 'react';
import GolfSvg from '../svg/golf.svg';

export interface IGolfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GolfIcon: FC<IGolfIconProps> = memo(props => {
  return <GolfSvg {...props} />;
});
