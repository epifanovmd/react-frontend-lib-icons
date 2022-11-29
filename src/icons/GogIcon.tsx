import React, { FC, memo } from 'react';
import GogSvg from '../svg/gog.svg';

export interface IGogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GogIcon: FC<IGogIconProps> = memo(props => {
  return <GogSvg {...props} />;
});
