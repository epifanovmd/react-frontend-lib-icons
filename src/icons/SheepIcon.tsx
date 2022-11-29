import React, { FC, memo } from 'react';
import SheepSvg from '../svg/sheep.svg';

export interface ISheepIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SheepIcon: FC<ISheepIconProps> = memo(props => {
  return <SheepSvg {...props} />;
});
