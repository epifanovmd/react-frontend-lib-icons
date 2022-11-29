import React, { FC, memo } from 'react';
import AutoFixSvg from '../svg/auto-fix.svg';

export interface IAutoFixIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AutoFixIcon: FC<IAutoFixIconProps> = memo(props => {
  return <AutoFixSvg {...props} />;
});
