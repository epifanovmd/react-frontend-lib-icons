import React, { FC, memo } from 'react';
import GoldSvg from '../svg/gold.svg';

export interface IGoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoldIcon: FC<IGoldIconProps> = memo(props => {
  return <GoldSvg {...props} />;
});
