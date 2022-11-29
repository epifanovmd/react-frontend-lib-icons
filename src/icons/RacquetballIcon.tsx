import React, { FC, memo } from 'react';
import RacquetballSvg from '../svg/racquetball.svg';

export interface IRacquetballIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RacquetballIcon: FC<IRacquetballIconProps> = memo(props => {
  return <RacquetballSvg {...props} />;
});
