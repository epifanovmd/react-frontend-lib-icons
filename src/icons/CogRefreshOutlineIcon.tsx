import React, { FC, memo } from 'react';
import CogRefreshOutlineSvg from '../svg/cog-refresh-outline.svg';

export interface ICogRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CogRefreshOutlineIcon: FC<ICogRefreshOutlineIconProps> = memo(props => {
  return <CogRefreshOutlineSvg {...props} />;
});
