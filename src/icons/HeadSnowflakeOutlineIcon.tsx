import React, { FC, memo } from 'react';
import HeadSnowflakeOutlineSvg from '../svg/head-snowflake-outline.svg';

export interface IHeadSnowflakeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadSnowflakeOutlineIcon: FC<IHeadSnowflakeOutlineIconProps> = memo(props => {
  return <HeadSnowflakeOutlineSvg {...props} />;
});
