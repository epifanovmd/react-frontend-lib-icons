import React, { FC, memo } from 'react';
import VanUtilitySvg from '../svg/van-utility.svg';

export interface IVanUtilityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VanUtilityIcon: FC<IVanUtilityIconProps> = memo(props => {
  return <VanUtilitySvg {...props} />;
});
