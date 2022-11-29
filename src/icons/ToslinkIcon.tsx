import React, { FC, memo } from 'react';
import ToslinkSvg from '../svg/toslink.svg';

export interface IToslinkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToslinkIcon: FC<IToslinkIconProps> = memo(props => {
  return <ToslinkSvg {...props} />;
});
