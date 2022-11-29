import React, { FC, memo } from 'react';
import AmpersandSvg from '../svg/ampersand.svg';

export interface IAmpersandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AmpersandIcon: FC<IAmpersandIconProps> = memo(props => {
  return <AmpersandSvg {...props} />;
});
