import React, { FC, memo } from 'react';
import NinjaSvg from '../svg/ninja.svg';

export interface INinjaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NinjaIcon: FC<INinjaIconProps> = memo(props => {
  return <NinjaSvg {...props} />;
});
