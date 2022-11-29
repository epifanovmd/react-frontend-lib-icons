import React, { FC, memo } from 'react';
import CogRefreshSvg from '../svg/cog-refresh.svg';

export interface ICogRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogRefreshIcon: FC<ICogRefreshIconProps> = memo(props => {
  return <CogRefreshSvg {...props} />;
});
