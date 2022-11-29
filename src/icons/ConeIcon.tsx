import React, { FC, memo } from 'react';
import ConeSvg from '../svg/cone.svg';

export interface IConeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ConeIcon: FC<IConeIconProps> = memo(props => {
  return <ConeSvg {...props} />;
});
