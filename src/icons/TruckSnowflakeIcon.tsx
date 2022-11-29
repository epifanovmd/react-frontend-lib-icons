import React, { FC, memo } from 'react';
import TruckSnowflakeSvg from '../svg/truck-snowflake.svg';

export interface ITruckSnowflakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TruckSnowflakeIcon: FC<ITruckSnowflakeIconProps> = memo(props => {
  return <TruckSnowflakeSvg {...props} />;
});
