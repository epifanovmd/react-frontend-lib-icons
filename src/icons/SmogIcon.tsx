import React, { FC, memo } from 'react';
import SmogSvg from '../svg/smog.svg';

export interface ISmogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmogIcon: FC<ISmogIconProps> = memo(props => {
  return <SmogSvg {...props} />;
});
