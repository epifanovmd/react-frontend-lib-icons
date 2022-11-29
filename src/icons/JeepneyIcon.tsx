import React, { FC, memo } from 'react';
import JeepneySvg from '../svg/jeepney.svg';

export interface IJeepneyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JeepneyIcon: FC<IJeepneyIconProps> = memo(props => {
  return <JeepneySvg {...props} />;
});
