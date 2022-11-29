import React, { FC, memo } from 'react';
import RacingHelmetSvg from '../svg/racing-helmet.svg';

export interface IRacingHelmetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RacingHelmetIcon: FC<IRacingHelmetIconProps> = memo(props => {
  return <RacingHelmetSvg {...props} />;
});
