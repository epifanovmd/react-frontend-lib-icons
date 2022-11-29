import React, { FC, memo } from 'react';
import CornOffSvg from '../svg/corn-off.svg';

export interface ICornOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CornOffIcon: FC<ICornOffIconProps> = memo(props => {
  return <CornOffSvg {...props} />;
});
