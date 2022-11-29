import React, { FC, memo } from 'react';
import EyeRefreshSvg from '../svg/eye-refresh.svg';

export interface IEyeRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeRefreshIcon: FC<IEyeRefreshIconProps> = memo(props => {
  return <EyeRefreshSvg {...props} />;
});
