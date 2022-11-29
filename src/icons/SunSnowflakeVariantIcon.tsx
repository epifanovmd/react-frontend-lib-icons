import React, { FC, memo } from 'react';
import SunSnowflakeVariantSvg from '../svg/sun-snowflake-variant.svg';

export interface ISunSnowflakeVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunSnowflakeVariantIcon: FC<ISunSnowflakeVariantIconProps> = memo(props => {
  return <SunSnowflakeVariantSvg {...props} />;
});
