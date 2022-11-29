import React, { FC, memo } from 'react';
import UnitySvg from '../svg/unity.svg';

export interface IUnityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnityIcon: FC<IUnityIconProps> = memo(props => {
  return <UnitySvg {...props} />;
});
