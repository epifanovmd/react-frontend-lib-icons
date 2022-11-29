import React, { FC, memo } from 'react';
import SnowflakeAlertSvg from '../svg/snowflake-alert.svg';

export interface ISnowflakeAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowflakeAlertIcon: FC<ISnowflakeAlertIconProps> = memo(props => {
  return <SnowflakeAlertSvg {...props} />;
});
