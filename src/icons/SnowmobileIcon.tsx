import React, { FC, memo } from 'react';
import SnowmobileSvg from '../svg/snowmobile.svg';

export interface ISnowmobileIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowmobileIcon: FC<ISnowmobileIconProps> = memo(props => {
  return <SnowmobileSvg {...props} />;
});
