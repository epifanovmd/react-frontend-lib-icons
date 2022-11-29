import React, { FC, memo } from 'react';
import SpotlightBeamSvg from '../svg/spotlight-beam.svg';

export interface ISpotlightBeamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpotlightBeamIcon: FC<ISpotlightBeamIconProps> = memo(props => {
  return <SpotlightBeamSvg {...props} />;
});
