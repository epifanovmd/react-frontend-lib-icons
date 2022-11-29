import React, { FC, memo } from 'react';
import ReloadSvg from '../svg/reload.svg';

export interface IReloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReloadIcon: FC<IReloadIconProps> = memo(props => {
  return <ReloadSvg {...props} />;
});
