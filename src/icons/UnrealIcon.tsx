import React, { FC, memo } from 'react';
import UnrealSvg from '../svg/unreal.svg';

export interface IUnrealIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnrealIcon: FC<IUnrealIconProps> = memo(props => {
  return <UnrealSvg {...props} />;
});
