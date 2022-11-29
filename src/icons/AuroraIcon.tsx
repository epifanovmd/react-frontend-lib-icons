import React, { FC, memo } from 'react';
import AuroraSvg from '../svg/aurora.svg';

export interface IAuroraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AuroraIcon: FC<IAuroraIconProps> = memo(props => {
  return <AuroraSvg {...props} />;
});
