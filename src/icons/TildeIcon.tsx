import React, { FC, memo } from 'react';
import TildeSvg from '../svg/tilde.svg';

export interface ITildeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TildeIcon: FC<ITildeIconProps> = memo(props => {
  return <TildeSvg {...props} />;
});
