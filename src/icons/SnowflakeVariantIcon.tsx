import React, { FC, memo } from 'react';
import SnowflakeVariantSvg from '../svg/snowflake-variant.svg';

export interface ISnowflakeVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowflakeVariantIcon: FC<ISnowflakeVariantIconProps> = memo(props => {
  return <SnowflakeVariantSvg {...props} />;
});
