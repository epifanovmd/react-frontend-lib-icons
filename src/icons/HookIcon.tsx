import React, { FC, memo } from 'react';
import HookSvg from '../svg/hook.svg';

export interface IHookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HookIcon: FC<IHookIconProps> = memo(props => {
  return <HookSvg {...props} />;
});
