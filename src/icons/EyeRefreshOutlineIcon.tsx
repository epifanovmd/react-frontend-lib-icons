import React, { FC, memo } from 'react';
import EyeRefreshOutlineSvg from '../svg/eye-refresh-outline.svg';

export interface IEyeRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeRefreshOutlineIcon: FC<IEyeRefreshOutlineIconProps> = memo(props => {
  return <EyeRefreshOutlineSvg {...props} />;
});
