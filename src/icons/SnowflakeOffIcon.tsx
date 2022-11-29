import React, { FC, memo } from 'react';
import SnowflakeOffSvg from '../svg/snowflake-off.svg';

export interface ISnowflakeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowflakeOffIcon: FC<ISnowflakeOffIconProps> = memo(props => {
  return <SnowflakeOffSvg {...props} />;
});
