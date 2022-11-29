import React, { FC, memo } from 'react';
import SpotlightSvg from '../svg/spotlight.svg';

export interface ISpotlightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpotlightIcon: FC<ISpotlightIconProps> = memo(props => {
  return <SpotlightSvg {...props} />;
});
