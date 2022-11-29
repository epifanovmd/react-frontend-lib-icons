import React, { FC, memo } from 'react';
import SnowflakeMeltSvg from '../svg/snowflake-melt.svg';

export interface ISnowflakeMeltIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SnowflakeMeltIcon: FC<ISnowflakeMeltIconProps> = memo(props => {
  return <SnowflakeMeltSvg {...props} />;
});
