import React, { FC, memo } from 'react';
import CornSvg from '../svg/corn.svg';

export interface ICornIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CornIcon: FC<ICornIconProps> = memo(props => {
  return <CornSvg {...props} />;
});
