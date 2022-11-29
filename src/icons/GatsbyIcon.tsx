import React, { FC, memo } from 'react';
import GatsbySvg from '../svg/gatsby.svg';

export interface IGatsbyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GatsbyIcon: FC<IGatsbyIconProps> = memo(props => {
  return <GatsbySvg {...props} />;
});
