import React, { FC, memo } from 'react';
import GolfTeeSvg from '../svg/golf-tee.svg';

export interface IGolfTeeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GolfTeeIcon: FC<IGolfTeeIconProps> = memo(props => {
  return <GolfTeeSvg {...props} />;
});
