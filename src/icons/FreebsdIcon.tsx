import React, { FC, memo } from 'react';
import FreebsdSvg from '../svg/freebsd.svg';

export interface IFreebsdIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FreebsdIcon: FC<IFreebsdIconProps> = memo(props => {
  return <FreebsdSvg {...props} />;
});
