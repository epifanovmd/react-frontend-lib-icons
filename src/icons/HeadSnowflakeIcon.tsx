import React, { FC, memo } from 'react';
import HeadSnowflakeSvg from '../svg/head-snowflake.svg';

export interface IHeadSnowflakeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadSnowflakeIcon: FC<IHeadSnowflakeIconProps> = memo(props => {
  return <HeadSnowflakeSvg {...props} />;
});
