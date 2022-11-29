import React, { FC, memo } from 'react';
import SnowflakeCheckSvg from '../svg/snowflake-check.svg';

export interface ISnowflakeCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowflakeCheckIcon: FC<ISnowflakeCheckIconProps> = memo(props => {
  return <SnowflakeCheckSvg {...props} />;
});
