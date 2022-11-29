import React, { FC, memo } from 'react';
import SnowflakeSvg from '../svg/snowflake.svg';

export interface ISnowflakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowflakeIcon: FC<ISnowflakeIconProps> = memo(props => {
  return <SnowflakeSvg {...props} />;
});
