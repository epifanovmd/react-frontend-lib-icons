import React, { FC, memo } from 'react';
import SunSnowflakeSvg from '../svg/sun-snowflake.svg';

export interface ISunSnowflakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunSnowflakeIcon: FC<ISunSnowflakeIconProps> = memo(props => {
  return <SunSnowflakeSvg {...props} />;
});
