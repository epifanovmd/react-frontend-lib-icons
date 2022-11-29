import React, { FC, memo } from 'react';
import HookOffSvg from '../svg/hook-off.svg';

export interface IHookOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HookOffIcon: FC<IHookOffIconProps> = memo(props => {
  return <HookOffSvg {...props} />;
});
