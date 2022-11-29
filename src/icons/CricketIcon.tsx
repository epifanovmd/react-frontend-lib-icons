import React, { FC, memo } from 'react';
import CricketSvg from '../svg/cricket.svg';

export interface ICricketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CricketIcon: FC<ICricketIconProps> = memo(props => {
  return <CricketSvg {...props} />;
});
